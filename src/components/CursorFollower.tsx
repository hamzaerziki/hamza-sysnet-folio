import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const CursorFollower = () => {
  const isMobile = useIsMobile();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [isMobile, visible]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer glow */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-screen"
        style={{
          width: 40,
          height: 40,
          left: pos.x - 20,
          top: pos.y - 20,
          background: 'radial-gradient(circle, hsl(185 80% 45% / 0.15) 0%, transparent 70%)',
          transition: 'left 0.06s linear, top 0.06s linear',
          opacity: visible ? 1 : 0,
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          width: 8,
          height: 8,
          left: pos.x - 4,
          top: pos.y - 4,
          background: 'hsl(185 80% 55%)',
          boxShadow: '0 0 12px hsl(185 80% 45% / 0.5)',
          transition: 'left 0.05s ease-out, top 0.05s ease-out',
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
};
