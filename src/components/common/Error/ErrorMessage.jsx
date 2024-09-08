import { css } from '@emotion/react';

function ErrorMessage() {
  return (
    <p
      css={css`
        margin: auto;
        text-align: center;
      `}
    >
      단픽을 스크랩하는 중 오류가 발생했어요😢
    </p>
  );
}

export default ErrorMessage;
