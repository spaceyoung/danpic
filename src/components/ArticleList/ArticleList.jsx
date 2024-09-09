import { css } from '@emotion/react';
import Article from './Article';

function ArticleList() {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        padding: 24px 0;
      `}
    >
      <Article />
      <Article />
      <Article />
    </div>
  );
}

export default ArticleList;
