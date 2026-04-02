type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <div className="logo-lockup" aria-label="Ubuntu Wear KE">
      <div className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <defs>
            <linearGradient id="logo-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#c8a24d" />
              <stop offset="100%" stopColor="#05876c" />
            </linearGradient>
          </defs>
          <path
            d="M18 18c4-8 24-8 28 0l-5 4c-2-4-16-4-18 0l17 18v9h-5V42H29v7h-5v-9l17-18-5-4-2 2H20l-2-2Z"
            fill="none"
            stroke="url(#logo-gradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M22 53h20" stroke="#c8a24d" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      </div>
      {!compact && (
        <div>
          <p className="logo-title">Ubuntu Wear</p>
          <p className="logo-subtitle">KE</p>
        </div>
      )}
    </div>
  );
}
