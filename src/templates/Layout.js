import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
function Layout({ themeIcon, children, onToggleTheme }) {
  return (
    <>
      <Header themeIcon={themeIcon} onToggleTheme={onToggleTheme} />
      {children}
      <Footer />
    </>
  );
}
export { Layout };
