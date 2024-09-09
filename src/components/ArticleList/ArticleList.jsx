import { useState, useEffect } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
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

  if (isFetchLoading) return <LoadingMessage type={'유용한'} />;
  if (fetchError) return <ErrorMessage />;

  return (
    <>
      {articleList && (
        <div
          css={css`
            padding: 24px 0;
          `}
        >
          <Masonry
            breakpointCols={2}
            css={css`
              display: flex;
              > *:not(:last-child) {
                margin-right: 24px;
              }
              > * > *:not(:last-child) {
                margin-bottom: 24px;
              }
            `}
          >
            {articleList.map((article) => (
              <Article
                key={article._id}
                publishDate={article.pub_date}
                headline={article.headline.main}
              />
            ))}
          </Masonry>
        </div>
      )}
    </>
  );
}

export default ArticleList;
