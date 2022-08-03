import { createGlobalStyle } from 'styled-components';

const titles = 'Poppins, sans-serif';
const texts = 'Raleway, sans-serif';
const themeMode = {
  light: {
    scrollColor: '#a9def1',
    backgroundColor: '#fafafd', //'#f5f5f5',
    titleColor: '#444649',
    textColor: '#616161',
    accentColor: '#00A5E0', //'#e31b6d' (magenta),
    menuColor: '#f2f5f5', //'#dfdee2',
    footerColor: '#f4f4f9',
    icon: 'light',
  },
  dark: {
    scrollColor: '#cdfbfd',
    backgroundColor: '#0d192b', //'#f5f5f5',
    titleColor: '#eff3f8',
    textColor: '#8bacda',
    accentColor: '#04c2c9', //'#00fff7',
    menuColor: '#14253d',
    footerColor: '#12111a',
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
    scroll-behavior: smooth;
  }
  body{
    background-color: ${(props) => props.theme.backgroundColor};
    section[id]{
      scroll-margin-top: 50px;
      
    }
  }
`;

export { GlobalStyles, themeMode, titles, texts };
