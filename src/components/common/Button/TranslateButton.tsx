import { css } from '@emotion/react';
import { MdGTranslate } from 'react-icons/md';

interface TranslateButtonProps {
  headline: string;
  isTranslated: boolean;
  translate: (originalText: string) => void;
}

function TranslateButton({
  headline,
  isTranslated,
  translate,
}: TranslateButtonProps) {
  return (
    <button
      onClick={() => translate(headline)}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
      `}
    >
      <MdGTranslate />
      {isTranslated ? '번역 숨기기' : '번역하기'}
    </button>
  );
}

export default TranslateButton;
