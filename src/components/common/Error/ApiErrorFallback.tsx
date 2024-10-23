import { FallbackProps } from 'react-error-boundary';
import { useTheme, css } from '@emotion/react';
import { BsEmojiTear } from 'react-icons/bs';

function ApiErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const theme = useTheme();

  return (
    <div
      css={css`
        margin: auto;
        text-align: center;
      `}
    >
      <BsEmojiTear
        css={css`
          width: 4rem;
          height: 4rem;
          margin-bottom: 1rem;
          color: ${theme.color.emphasis.primary};
        `}
      />
      <p
        css={css`
          margin-bottom: 1.25rem;
        `}
      >
        <span
          css={css`
            display: block;
          `}
        >
          단픽을 스크랩하는 중 문제가 발생했어요😢
        </span>
        잠시 후에 다시 시도해 주세요.
      </p>
      <button
        css={css`
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          color: ${theme.color.button.retryButton};
          background-color: ${theme.color.background.retryButton};
        `}
      >
        다시 시도하기
      </button>
    </div>
  );
}

export default ApiErrorFallback;
