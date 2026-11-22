import { useEffect } from 'react';

/**
 * Universal background scroll lock hook.
 * Locks body and document scrolling cleanly across all viewports without disrupting DOM layout or viewport mouse coordinates.
 * 
 * @param {boolean} isLocked - Whether background scroll should be locked
 */
export function useScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [isLocked]);
}

export default useScrollLock;

