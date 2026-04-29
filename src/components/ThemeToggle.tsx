import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-solid hover:bg-surface-offset transition-colors"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-foreground" />
      ) : (
        <Moon className="h-4 w-4 text-foreground" />
      )}
    </button>
  );
};
