import { useTheme, css } from '@emotion/react';
import { MdGTranslate, MdOpenInNew } from 'react-icons/md';

function BannerArticle() {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 24px;
        min-height: 200px;
        padding: 20px 32px;
        border-radius: 8px;
        background-color: ${theme.color.background.banner};
        box-shadow: 3px 3px 10px 3px ${theme.color.shadow.default};
      `}
    >
      <div>
        <span
          css={css`
            display: block;
            margin-bottom: 8px;
            ${theme.typograhpy.bannerSection}
          `}
        >
          기사 섹션
        </span>
        <p
          css={css`
            ${theme.typograhpy.bannerTitle}
            color: ${theme.color.text.title};
          `}
        >
          기사 제목
        </p>
      </div>
      <div
        css={css`
          ${theme.typograhpy.bannerButton}
          display: flex;
          align-self: flex-end;
          gap: 24px;
          color: ${theme.color.button.banner};
        `}
      >
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
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
          `}
        >
          <MdOpenInNew />
          기사 보러가기
        </a>
      </div>
    </div>
  );
}

export default BannerArticle;
