import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../GlobalStyles';
import { themeMode } from '../GlobalStyles';
import { Layout } from './Layout';
import { Intro } from '../components/Intro';
import { AboutMe } from '../components/AboutMe';
import { Skills } from '../components/Skills';
import { Portfolio } from '../components/Portfolio';
function App() {
  const [theme, setTheme] = React.useState(themeMode.light);
  const toggleTheme = () => {
    theme === themeMode.light
      ? setTheme(themeMode.dark)
      : setTheme(themeMode.light);
  };
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
