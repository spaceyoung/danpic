import { useTheme, css } from '@emotion/react';
import BannerHeader from './BannerHeader';
import BannerArticle from './BannerArticle';

function Banner() {
  const theme = useTheme();

  return (
    <section
      css={css`
        padding: 16px 0;
      `}
    >
      <BannerHeader />
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
        <BannerArticle />
      </div>
    </section>
  );
}

export default Banner;
