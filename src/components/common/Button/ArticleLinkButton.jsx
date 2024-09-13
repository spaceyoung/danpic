import { css } from '@emotion/react';
import { MdOpenInNew } from 'react-icons/md';

function ArticleLinkButton({ articleLink }) {
  return (
    <a
      href={articleLink}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
      `}
    >
      <MdOpenInNew />
      기사 보러가기
    </a>
  );
}

export default ArticleLinkButton;
