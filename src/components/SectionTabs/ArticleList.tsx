import { useState, useEffect, useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { css } from '@emotion/react';
import useActiveTabStore from '@stores/useActiveTabStore';
import useFetchStore from '@stores/useFetchStore';
import useFetchData from '@hooks/useFetchData';
import { NYT_REQUEST_URL } from '@constants/api';
import { LoadingMessage } from '@components/common';
import { Article, ViewMoreButton } from '@components/SectionTabs';

function ArticleList() {
  const [clickCount, setClickCount] = useState<number>(0);

  const [activeSectionTab] = useActiveTabStore(
    useShallow((state) => [state.activeSectionTab])
  );
  const [articleList] = useFetchStore(
    useShallow((state) => [state.articleList])
  );

  const { isFetchLoading } = useFetchData(
    NYT_REQUEST_URL.SEARCH,
    // activeSectionTab이 Business일 경우 해당하는 검색 쿼리를 위해 Business Day로 값을 재할당
    activeSectionTab === 'Business' ? 'Business Day' : activeSectionTab,
    clickCount,
    [activeSectionTab, clickCount]
  );

  // 다른 섹션 탭으로 이동하는 경우 저장된 기존 기사 목록을 초기화
  const resetArticleList = useCallback(() => {
    articleList.splice(0);
  }, [activeSectionTab]);

  useEffect(() => {
    resetArticleList();
  }, [resetArticleList]);

  if (isFetchLoading && articleList.length === 0)
    return <LoadingMessage type={'유용한'} />;
  if (articleList.length === 0) return null;

  return (
    <>
      <div
        css={css`
          padding: 1.5rem 0;
        `}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 567: 1, 568: 2 }}>
          <Masonry
            css={css`
              display: flex;
              margin-bottom: 1.5rem;
              > *:not(:last-child) {
                margin-right: 1.25rem;
              }
              > * > *:not(:last-child) {
                margin-bottom: 1.25rem;
              }
            `}
          >
            {articleList.map((article: SectionTabsArticle) => (
              <Article
                key={article._id}
                publishDate={article.pub_date}
                headline={article.headline.main}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <ViewMoreButton
          isFetchLoading={isFetchLoading}
          setClickCount={setClickCount}
        />
      </div>
    </>
  );
}

export default ArticleList;
