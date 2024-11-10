import React, { useState} from 'react';
import { CopyButton } from '../../components';
import { Heroimg } from '../../assets';
  

const Hero = () => {

  //code to tilt the image
  const [transform, setTransform] = useState('perspective(100px) scale(1.01) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const multiplier = 4; // Reduced for a very subtle tilt

    const xRotate = multiplier * ((x - width / 2) / width);
    const yRotate = -multiplier * ((y - height / 2) / height);

    setTransform(`perspective(100px) scale(1.01) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`);
  };

  const handleMouseOut = () => {
    setTransform('perspective(100px) scale(1.01) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <>
      <section className="hero lg:pt-[12vh] pt-4 pl-8 min-h-screen" id="home">
        <div className="hero__inner flex flex-col-reverse gap-[10vh] justify-around md:flex-row md:gap-12 md:justify-between md:items-center">
          <div className="flex flex-col sm:justify-center sm:items-center lg:items-start md:pt-20">
            <h1 className="font-h name text-6xl font-semibold text-[var(--light)] uppercase mb-2 z-10 sm:text-center md:text-left">
              Kritagya Singh Chouhan
            </h1>
            <h6 className="font-p text-xl font-semibold text-[var(--green)] capitalize mb-2 sm:text-center md:text-left">
              Full Stack Developer
            </h6>
            <p className="text-[var(--light)] font-p max-w-prose tracking-wider md:max-w-[55ch] md:mt-4 z-10 sm:text-center md:text-left">
              I'm a software developer specializing in building exceptional digital experiences. At Present, I’m focused on building scalable, user-centered products at Jio.
            </p>
            <div className="mt-[5vh] cursor-pointer">
              <CopyButton />
            </div>
          </div>
          <div className="grid place-items-center">
            <div
              className="tilt transition-all duration-100 ease-in cursor-pointer"
              style={{ transform }}
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            >
              <img
                className="tilt__content border-solid border-4 rounded-full border-[var(--light3)] z-10 max-w-[28rem] w-[30vw] min-w-[12rem] mt-4 md:mt-0"
                src={Heroimg}
                alt="Kritagya Singh Chouhan Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
