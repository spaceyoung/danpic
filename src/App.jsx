import { useShallow } from 'zustand/react/shallow';
import { ThemeProvider, Global } from '@emotion/react';
import useThemeStore from '@stores/useThemeStore';
import { Header } from '@components/Header';
import { MainLayout } from '@components/Layout';
import { Banner } from '@components/Banner';
import { SectionTabList, ArticleList } from '@components/SectionTabs';
import { ScrollToTopButton } from '@components/common';
import globalStyle from '@styles/global';
import { lightTheme, darkTheme } from '@styles/theme';

function App() {
  const [themeMode] = useThemeStore(useShallow((state) => [state.themeMode]));

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <Global styles={globalStyle} />
      <Header />
      <MainLayout>
        <Banner />
        <SectionTabList />
        <ArticleList />
        <ScrollToTopButton />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
