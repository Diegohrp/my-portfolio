import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../GlobalStyles';
import { themeMode } from '../GlobalStyles';
import { Layout } from './Layout';
import { Intro } from '../components/Intro';
import { AboutMe } from '../components/AboutMe';
import { Skills } from '../components/Skills';
import { Portfolio } from '../components/Portfolio';
import { useThemeMode } from '../hooks/useTheme';

function App() {
  const initialState =
    JSON.parse(localStorage.getItem('theme')) || themeMode.dark;

  const [theme, toggleTheme] = useThemeMode(initialState);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout themeIcon={theme.icon} onToggleTheme={toggleTheme}>
        <Intro />
        <AboutMe />
        <Skills />
        <Portfolio />
      </Layout>
    </ThemeProvider>
  );
}
export default App;
