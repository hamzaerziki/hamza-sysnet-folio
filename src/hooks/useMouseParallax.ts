import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const useMouseParallax = (intensity: number = 1) => {
  const isMobile = useIsMobile();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2 * intensity;
      const y = (e.clientY / window.innerHeight - 0.5) * 2 * intensity;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [isMobile, intensity]);

  return offset;
};
