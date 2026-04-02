type ThemeToggleProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" onClick={onToggle} type="button" aria-label="Toggle theme">
      <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
      <strong>{theme === 'light' ? 'Mode' : 'Mode'}</strong>
    </button>
  );
}
