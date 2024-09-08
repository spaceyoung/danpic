import { css } from '@emotion/react';
import { MdGTranslate } from 'react-icons/md';

function TranslateButton() {
  return (
    <button
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
