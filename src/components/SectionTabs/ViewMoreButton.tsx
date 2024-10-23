import React from 'react';
import { useTheme, css } from '@emotion/react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { LoadingMessage } from '@components/common';

interface ViewMoreButtonProps {
  isFetchLoading: boolean;
  setClickCount: React.Dispatch<React.SetStateAction<number>>;
}

function ViewMoreButton({
  isFetchLoading,
  setClickCount,
}: ViewMoreButtonProps) {
  const theme = useTheme();

  const increaseClickCount = () => {
    setClickCount((prevClickCount) => prevClickCount + 1);
  };

  if (isFetchLoading) return <LoadingMessage type={'유용한'} />;

  return (
    <button
      onClick={increaseClickCount}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        width: 100%;
        margin: 0 auto;
        padding: 0.75rem 1.25rem;
        border-radius: 0.5rem;
        background-color: ${theme.color.background.viewMoreButton};
        box-shadow: 0.2rem 0.2rem 0.625rem 0.2rem ${theme.color.shadow.default};
        ${theme.typography.label2}
      `}
    >
      <MdOutlineAddCircleOutline />더 보기
    </button>
  );
}

export default ViewMoreButton;
