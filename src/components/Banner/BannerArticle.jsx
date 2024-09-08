import { useTheme, css } from '@emotion/react';
import TranslateButton from '../common/Button/TranslateButton';
import ArticleLinkButton from '../common/Button/ArticleLinkButton';

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
        <TranslateButton />
        <ArticleLinkButton />
      </div>
    </div>
  );
}

export default BannerArticle;
