import { css } from '@emotion/react';
import BannerHeader from './BannerHeader';
import BannerArticle from './BannerArticle';

function Banner() {
  return (
    <section
      css={css`
        padding: 16px 0;
      `}
    >
      <BannerHeader />
      <BannerArticle />
    </section>
  );
}

export default Banner;
