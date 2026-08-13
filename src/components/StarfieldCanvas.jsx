import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const starsCount = 3400;
    const starsGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 110;
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    function createStarTexture() {
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 64;
      texCanvas.height = 64;

      const ctx = texCanvas.getContext('2d');
      const center = 32;
      const radius = 30;

      const gradient = ctx.createRadialGradient(center, center, 0, center, center, radius);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      gradient.addColorStop(0.25, 'rgba(235, 240, 255, 0.75)');
      gradient.addColorStop(0.6, 'rgba(168, 85, 247, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(center, center, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      return new THREE.CanvasTexture(texCanvas);
    }

    const starTexture = createStarTexture();

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.34,
      map: starTexture,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const starMesh = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starMesh);

    camera.position.z = 20;

    // Advanced Dynamic Meteor Wave System
    const meteors = [];

    function spawnMeteorWave() {
      // Random count: 1 to 3 meteors per wave
      const count = Math.floor(Math.random() * 3) + 1;
      const isSameDirection = Math.random() > 0.4;

      const baseDirX = Math.random() > 0.5 ? (Math.random() * 0.3 - 0.75) : (Math.random() * 0.3 + 0.45);
      const baseDirY = -(Math.random() * 0.3 + 0.35);

      for (let c = 0; c < count; c++) {
        const geometry = new THREE.BufferGeometry();
        const tailPoints = 22;

        const dirX = isSameDirection
          ? baseDirX
          : (Math.random() > 0.5 ? (Math.random() * 0.3 - 0.75) : (Math.random() * 0.3 + 0.45));
        const dirY = isSameDirection ? baseDirY : -(Math.random() * 0.3 + 0.35);
        
        // Random speed multiplier per meteor (1.1x to 2.3x)
        const speed = Math.random() * 1.2 + 1.1;

        // Position spawn origin relative to direction
        const startX = dirX < 0 ? (Math.random() * 30 + 5) : (Math.random() * -30 - 5);
        const startY = Math.random() * 18 + 8;
        const startZ = (Math.random() - 0.5) * 12;

        const positions = new Float32Array(tailPoints * 3);
        for (let i = 0; i < tailPoints; i++) {
          positions[i * 3] = startX + i * (dirX * 0.45);
          positions[i * 3 + 1] = startY + i * (dirY * 0.45);
          positions[i * 3 + 2] = startZ + i * (-0.08 * 0.45);
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const colorChoice = Math.random();
        const color = colorChoice < 0.45 ? 0x38bdf8 : colorChoice < 0.85 ? 0xc084fc : 0xf59e0b;

        const material = new THREE.LineBasicMaterial({
          color: color,
          transparent: true,
          opacity: 1.0,
          linewidth: 3,
          blending: THREE.AdditiveBlending,
        });

        const line = new THREE.Line(geometry, material);
        scene.add(line);

        meteors.push({
          mesh: line,
          vx: dirX * speed * 1.3,
          vy: dirY * speed * 1.3,
          vz: -0.08 * speed,
          life: 1.0,
          fadeSpeed: Math.random() * 0.012 + 0.018,
        });
      }
    }

    // Initial spawn wave, then random interval between 5000ms and 10000ms
    spawnMeteorWave();
    let lastMeteorSpawn = Date.now();
    let nextMeteorInterval = Math.random() * 5000 + 5000;

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentInfluenceX = 0;
    let currentInfluenceY = 0;
    let isMouseActive = false;
    let inactivityTimer = null;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event) => {
      targetMouseX = (event.clientX - windowHalfX) * 0.00025;
      targetMouseY = (event.clientY - windowHalfY) * 0.00025;
      isMouseActive = true;

      if (inactivityTimer) clearTimeout(inactivityTimer);

      inactivityTimer = setTimeout(() => {
        isMouseActive = false;
      }, 900);
    };

    const handleResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    let isTabVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastMeteorSpawn = Date.now();
      }
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let animationFrameId;

    const animate = () => {
      if (isTabVisible) {
        const now = Date.now();

        // Dynamic spawn timer (5 - 10 seconds)
        if (now - lastMeteorSpawn > nextMeteorInterval) {
          spawnMeteorWave();
          lastMeteorSpawn = now;
          nextMeteorInterval = Math.random() * 5000 + 5000;
        }

        // Update active meteors
        for (let i = meteors.length - 1; i >= 0; i--) {
          const m = meteors[i];
          m.mesh.position.x += m.vx;
          m.mesh.position.y += m.vy;
          m.mesh.position.z += m.vz;
          m.life -= m.fadeSpeed;
          m.mesh.material.opacity = m.life;

          if (m.life <= 0) {
            scene.remove(m.mesh);
            m.mesh.geometry.dispose();
            m.mesh.material.dispose();
            meteors.splice(i, 1);
          }
        }

        const activeFactor = isMouseActive ? 1.0 : 0.0;

        currentInfluenceX += (targetMouseX * activeFactor - currentInfluenceX) * 0.06;
        currentInfluenceY += (targetMouseY * activeFactor - currentInfluenceY) * 0.06;

        starMesh.rotation.y += 0.00005 + currentInfluenceX;
        starMesh.rotation.x += 0.000025 + currentInfluenceY;

        renderer.render(scene, camera);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      meteors.forEach((m) => {
        scene.remove(m.mesh);
        m.mesh.geometry.dispose();
        m.mesh.material.dispose();
      });
      starsGeometry.dispose();
      starsMaterial.dispose();
      starTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef} />;
}
