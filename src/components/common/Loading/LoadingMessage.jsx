import { useTheme, css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';

function LoadingMessage() {
  const theme = useTheme();

  return (
    <div
      css={css`
        margin: auto;
        text-align: center;
      `}
    >
      <BeatLoader
        margin={8}
        size={12}
        speedMultiplier={0.5}
        color={theme.color.emphasis.primary}
      />
      화제가 된 단픽 스크랩하는 중... 📰
    </div>
  );
}

export default LoadingMessage;
