import { Global } from '@emotion/react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Banner from './components/Banner/Banner';
import globalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider>
      <Global styles={globalStyle} />
      <Header />
      <Layout>
        <Banner />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
