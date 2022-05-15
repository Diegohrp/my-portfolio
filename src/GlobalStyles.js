import { createGlobalStyle } from 'styled-components';

const titles = 'Poppins, sans-serif';
const texts = 'Raleway, sans-serif';
const themeMode = {
  light: {
    primaryColor: '#04c2c9',
    backgroundColor: '#fafafd', //'#f5f5f5',
    titleColor: '#444649',
    textColor: '#616161',
    accentColor: '#00A5E0', //'#e31b6d' (magenta),
    menuColor: '#f2f5f5', //'#dfdee2',
    icon: 'light',
  },
  dark: {
    primaryColor: '#14253d',
    backgroundColor: '#0d192b', //'#f5f5f5',
    titleColor: '#eff3f8',
    textColor: '#8bacda',
    accentColor: '#04c2c9', //'#00fff7',
    menuColor: '#14253d',
    icon: 'dark',
  },
};

const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: ${texts};
    font-weight: 500;
    overflow-x: hidden;
  }
  body{
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export { GlobalStyles, themeMode, titles, texts };