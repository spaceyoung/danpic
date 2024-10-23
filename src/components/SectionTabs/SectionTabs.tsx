import { SectionTabList, ArticleList } from '@components/SectionTabs';
import { css } from '@emotion/react';

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
      <ArticleList />
    </div>
  );
}

export default SectionTabs;
