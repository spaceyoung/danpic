import { ErrorBoundary } from 'react-error-boundary';
import { css } from '@emotion/react';
import { SectionTabList, ArticleList } from '@components/SectionTabs';
import { ApiErrorFallback } from '@components/common';

function SectionTabs() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      `}
    >
      <SectionTabList />
      <ErrorBoundary
        fallbackRender={(props) => <ApiErrorFallback {...props} />}
      >
        <ArticleList />
      </ErrorBoundary>
    </div>
  );
}

export default SectionTabs;
