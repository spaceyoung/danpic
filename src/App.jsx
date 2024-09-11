import { Global } from '@emotion/react';
import { ThemeProvider } from '@contexts/ThemeContext';
import { IsBorderActiveProvider } from '@contexts/IsBorderActiveContext';
import { ActiveSectionTabProvider } from '@contexts/ActiveSectionTabContext';
import { Header } from '@components/Header';
import { Layout } from '@components/Layout';
import { Banner } from '@components/Banner';
import { SectionTabList, ArticleList } from '@components/SectionTabs';
import globalStyle from '@styles/global';

function App() {
  return (
    <ThemeProvider>
      <IsBorderActiveProvider>
        <Global styles={globalStyle} />
        <Header />
        <Layout>
          <Banner />
          <ActiveSectionTabProvider>
            <SectionTabList />
            <ArticleList />
          </ActiveSectionTabProvider>
        </Layout>
      </IsBorderActiveProvider>
    </ThemeProvider>
  );
}

export default App;
