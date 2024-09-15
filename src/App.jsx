import { useShallow } from 'zustand/react/shallow';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import useThemeStore from '@stores/useThemeStore';
import { IsBorderActiveProvider } from '@contexts/IsBorderActiveContext';
import { ActiveSectionTabProvider } from '@contexts/ActiveSectionTabContext';
import { Header } from '@components/Header';
import { Layout } from '@components/Layout';
import { Banner } from '@components/Banner';
import { SectionTabList, ArticleList } from '@components/SectionTabs';
import globalStyle from '@styles/global';
import { lightTheme, darkTheme } from '@styles/theme';

function App() {
  const [themeMode] = useThemeStore(useShallow((state) => [state.themeMode]));

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
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
