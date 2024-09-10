import Masonry from 'react-masonry-css';
import { css } from '@emotion/react';
import { useActiveSectionTab } from '@contexts/ActiveSectionTabContext';
import useFetchData from '@hooks/useFetchData';
import { NYT_REQUEST_URL } from '@constants/api';
import { LoadingMessage, ErrorMessage } from '@components/common';
import { Article } from '@components/SectionTabs';

function ArticleList() {
  const activeSectionTab = useActiveSectionTab();

  const [isFetchLoading, fetchError, articleList] = useFetchData(
    NYT_REQUEST_URL.SEARCH,
    activeSectionTab,
    [activeSectionTab]
  );

  if (isFetchLoading) return <LoadingMessage type={'유용한'} />;
  if (fetchError) return <ErrorMessage />;
  if (!articleList) return null;

  return (
    <>
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
    </>
  );
}

export default ArticleList;
