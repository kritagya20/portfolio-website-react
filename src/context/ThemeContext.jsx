import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const THEMES = [
  {
    id: 'cosmic',
    label: 'Cosmic',
    icon: '✨',
  },
  {
    id: 'midnight',
    label: 'Eclipse',
    icon: '🌓',
  },
  {
    id: 'daylight',
    label: 'Daylight',
    icon: '☀️',
  },
  {
    id: 'ocean',
    label: 'Moonlight',
    icon: '🌙',
  },
  {
    id: 'batman',
    label: 'Midnight',
    icon: '🌑',
  },
];

const STORAGE_KEY = 'ys-portfolio-theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'cosmic';
    }

    const savedTheme = localStorage.getItem(STORAGE_KEY);

    const isValidTheme = THEMES.some(
      (themeOption) => themeOption.id === savedTheme
    );

    return isValidTheme ? savedTheme : 'cosmic';
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme
    );

    localStorage.setItem(
      STORAGE_KEY,
      theme
    );
  }, [theme]);

  const cycleTheme = () => {
    const currentIndex = THEMES.findIndex(
      (themeOption) => themeOption.id === theme
    );

    const nextTheme =
      THEMES[
        (currentIndex + 1) %
        THEMES.length
      ];

    setTheme(nextTheme.id);
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      cycleTheme,
      themes: THEMES,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme must be used within ThemeProvider'
    );
  }

  return context;
}