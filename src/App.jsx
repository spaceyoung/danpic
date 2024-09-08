import { Global } from '@emotion/react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import globalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider>
      <Global styles={globalStyle} />
      <Header />
    </ThemeProvider>
  );
}

export default App;
