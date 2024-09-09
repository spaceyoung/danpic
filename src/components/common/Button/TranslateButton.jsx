import { css } from '@emotion/react';
import { MdGTranslate } from 'react-icons/md';

function TranslateButton({ translate }) {
  return (
    <button
      onClick={() => translate()}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
      `}
    >
      <MdGTranslate />
      번역하기
    </button>
  );
}

export default TranslateButton;
