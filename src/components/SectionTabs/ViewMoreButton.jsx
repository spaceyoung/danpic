import { useTheme, css } from '@emotion/react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

function ViewMoreButton() {
  const theme = useTheme();

  return (
    <button
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        width: 100%;
        margin: 0 auto;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 500;
        background-color: ${theme.color.background.viewMoreButton};
        box-shadow: 3px 3px 10px 3px ${theme.color.shadow.default};
      `}
    >
      <MdOutlineAddCircleOutline />더 보기
    </button>
  );
}

export default ViewMoreButton;
