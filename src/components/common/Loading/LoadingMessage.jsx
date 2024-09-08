import { css } from '@emotion/react';

function LoadingMessage() {
  return (
    <p
      css={css`
        margin: auto;
        text-align: center;
      `}
    >
      화제가 된 단픽 스크랩하는 중... 📰
    </p>
  );
}

export default LoadingMessage;
