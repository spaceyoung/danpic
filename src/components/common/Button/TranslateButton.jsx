import { css } from '@emotion/react';
import { MdGTranslate } from 'react-icons/md';

function TranslateButton({ isTranslated, translate }) {
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
      {isTranslated ? '번역 숨기기' : '번역하기'}
    </button>
  );
}

export default TranslateButton;
