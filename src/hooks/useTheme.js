import React from 'react';
import { themeMode } from '../GlobalStyles';
function useThemeMode(initialState) {
  const [theme, setTheme] = React.useState(initialState);

  const saveTheme = () => {
    const stringify = JSON.stringify(theme);
    localStorage.setItem('theme', stringify);
  };

  const toggleTheme = () => {
    theme === themeMode.light
      ? setTheme(themeMode.dark)
      : setTheme(themeMode.light);
  };

  React.useEffect(() => {
    saveTheme();
  }, [theme]);

  return [theme, toggleTheme];
}

export { useThemeMode };
