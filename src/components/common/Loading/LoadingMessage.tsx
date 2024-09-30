import { useTheme, css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';

interface LoadingMessageProps {
  type: string;
}

function LoadingMessage({ type }: LoadingMessageProps) {
  const theme = useTheme();

  return (
    <div
      css={css`
        margin: auto;
        text-align: center;
      `}
    >
      <BeatLoader
        margin={'0.5rem'}
        size={'0.75rem'}
        speedMultiplier={0.5}
        color={theme.color.emphasis.primary}
      />
      {type} 단픽 스크랩하는 중... 📰
    </div>
  );
}

export default LoadingMessage;
