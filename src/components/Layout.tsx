import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="app-shell">
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
