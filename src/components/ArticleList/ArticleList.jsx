import Masonry from 'react-masonry-css';
import { css } from '@emotion/react';
import useFetchData from '../../hooks/useFetchData';
import { NYT_REQUEST_URL } from '../../constants/api';
import LoadingMessage from '../common/Loading/LoadingMessage';
import ErrorMessage from '../common/Error/ErrorMessage';
import Article from './Article';

function ArticleList() {
  const [isFetchLoading, fetchError, articleList] = useFetchData(
    NYT_REQUEST_URL.SEARCH
  );

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
