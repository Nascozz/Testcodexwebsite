import { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from './ThemeProvider.jsx';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Basculer le thème">
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
}
