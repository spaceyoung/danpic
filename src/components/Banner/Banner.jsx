import { useRef, useEffect } from 'react';
import { useTheme, css } from '@emotion/react';
import { useSetIsBorderActive } from '@contexts/IsBorderActiveContext';
import { BannerHeader, BannerArticle } from '@components/Banner';

function Banner() {
  const target = useRef(null);

  const setIsBorderActive = useSetIsBorderActive();
  const theme = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        setIsBorderActive(
          (prevIsActiveBorder) =>
            (prevIsActiveBorder = entries[0].isIntersecting)
        ),
      { threshold: 1.0 } // target 요소가 100% 보이는 경우에만 observer 실행
    );
    if (target.current) observer.observe(target.current); // 관찰하는 target 요소가 있을 경우에만 실행
    return () => {
      if (target.current) observer.unobserve(target.current);
    };
  }, []);

  return (
    <section
      ref={target}
      css={css`
        margin-bottom: 32px;
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
