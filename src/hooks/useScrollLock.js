import { useEffect, useRef } from 'react';

/**
 * Universal background scroll lock hook.
 * Preserves exact scroll offset across desktop and mobile devices (including iOS Safari).
 * 
 * @param {boolean} isLocked - Whether background scroll should be locked
 */
export function useScrollLock(isLocked) {
  const scrollPosRef = useRef(0);

  useEffect(() => {
    if (!isLocked) return;

    // Record current scroll position
    scrollPosRef.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;

    // Apply fixed lock
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosRef.current}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      const restoreY = scrollPosRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.scrollTo(0, restoreY);
    };
  }, [isLocked]);
}

export default useScrollLock;

