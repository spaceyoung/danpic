import { create } from 'zustand';
import sectionTabList from '@constants/sectionTabList';

interface FetchState {
  section: string;
  setSection: (sectionTab: string) => void;
  article: any;
  setArticle: (fetchedData: any) => void;
  articleList: any;
  setArticleList: (fetchedData: any) => void;
}

const useFetchStore = create<FetchState>((set) => ({
  section: sectionTabList[0],
  setSection: (sectionTab) => set({ section: sectionTab }),
  article: [],
  setArticle: (fetchedData) =>
    set((state) => ({ article: state.article.concat(fetchedData) })),
  articleList: [],
  setArticleList: (fetchedData) =>
    set((state) => ({ articleList: state.articleList.concat(fetchedData) })),
}));

export default useFetchStore;
