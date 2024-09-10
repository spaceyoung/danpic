import { Global } from '@emotion/react';
import { ThemeProvider } from '@contexts/ThemeContext';
import { Header } from '@components/Header';
import { Layout } from '@components/Layout';
import { Banner } from '@components/Banner';
import { SectionTabList } from '@components/SectionTabs';
import { ArticleList } from '@components/ArticleList';
import globalStyle from '@styles/global';

function App() {
  return (
    <ThemeProvider>
      <Global styles={globalStyle} />
      <Header />
      <Layout>
        <Banner />
        <SectionTabList />
        <ArticleList />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
