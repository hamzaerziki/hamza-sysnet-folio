import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Minimal accent dot + lagging ring cursor.
 * - 8px solid accent dot tracks the mouse 1:1
 * - 24px ring follows with subtle lag (~6 frames behind via lerp)
 * - Ring expands to 44px and dot fades on interactive hover
 */
export const CursorFollower = () => {
  const isMobile = useIsMobile();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (isMobile) return;
    document.body.classList.add('has-custom-cursor');

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest('a, button, input, textarea, [role="button"], [data-cursor="hover"]');
      setHovering(interactive);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    let raf = 0;
    const tick = () => {
      // Dot: 1:1
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`;
      }
      // Ring: lerp toward target (≈0.18 → ~6 frame lag)
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [isMobile, visible]);

  if (isMobile) return null;

  return (
    <>
      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border"
        style={{
          width: hovering ? 44 : 24,
          height: hovering ? 44 : 24,
          borderColor: 'hsl(var(--primary))',
          borderWidth: hovering ? 1 : 1.25,
          opacity: visible ? (hovering ? 0.9 : 0.7) : 0,
          transition: 'width 220ms cubic-bezier(0.16,1,0.3,1), height 220ms cubic-bezier(0.16,1,0.3,1), opacity 200ms ease, border-width 200ms ease',
          willChange: 'transform, width, height',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          width: 8,
          height: 8,
          background: 'hsl(var(--primary))',
          opacity: visible ? (hovering ? 0 : 1) : 0,
          transition: 'opacity 180ms ease',
          willChange: 'transform, opacity',
        }}
      />
    </>
  );
};
