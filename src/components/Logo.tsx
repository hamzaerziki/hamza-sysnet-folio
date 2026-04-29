interface LogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

/**
 * Geometric HE monogram. Uses currentColor so it adapts to text color.
 * Drawn as overlapping H + E in a single stroke pass.
 */
export const Logo = ({ className = '', size = 32, animated = false }: LogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${animated ? 'stroke-draw' : ''}`}
    style={{ ['--draw-len' as string]: 220 }}
    aria-label="Hamza Erziki"
  >
    {/* H */}
    <line x1="6" y1="8" x2="6" y2="32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="6" y1="20" x2="18" y2="20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="18" y1="8" x2="18" y2="32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    {/* E */}
    <polyline
      points="34,8 22,8 22,32 34,32"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="22" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);
