import { useState, useEffect } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import LoadingMessage from '../common/Loading/LoadingMessage';
import ErrorMessage from '../common/Error/ErrorMessage';
import Article from './Article';

function ArticleList() {
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [articleList, setArticleList] = useState(null);

  useEffect(() => {
    const fetchArticleList = async () => {
      setIsFetchLoading(true);
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`
        );
        setArticleList(response.data.response.docs);
      } catch (error) {
        console.log(`기사 조회 중 오류 발생 | ${error}`);
        setFetchError(error);
      }
      setIsFetchLoading(false);
    };
    fetchArticleList();
  }, []);

  if (isFetchLoading) return <LoadingMessage />;
  if (fetchError) return <ErrorMessage />;

  return (
    <>
      {articleList && (
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            padding: 24px 0;
          `}
        >
          {articleList.map((article) => (
            <Article
              key={article._id}
              publishDate={article.pub_date}
              headline={article.headline.main}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ArticleList;
