import { create } from 'zustand';

interface FetchState {
  article: any;
  setArticle: (fetchedData: any) => void;
  articleList: any;
  setArticleList: (fetchedData: any) => void;
}

const useFetchStore = create<FetchState>((set) => ({
  article: [],
  setArticle: (fetchedData) =>
    set((state) => ({ article: state.article.concat(fetchedData) })),
  articleList: [],
  setArticleList: (fetchedData) =>
    set((state) => ({ articleList: state.articleList.concat(fetchedData) })),
}));

export default useFetchStore;
