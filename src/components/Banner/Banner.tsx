import { useRef, useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { ErrorBoundary } from 'react-error-boundary';
import { useTheme, css } from '@emotion/react';
import useScrollStore from '@stores/useScrollStore';
import { ApiErrorFallback } from '@components/common';
import { BannerHeader, BannerArticle } from '@components/Banner';

function Banner() {
  const target = useRef<HTMLElement>(null);

  const theme = useTheme();
  const [setIsScrolled] = useScrollStore(
    useShallow((state) => [state.setIsScrolled])
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsScrolled(!entries[0].isIntersecting),
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
        margin-bottom: 2rem;
        padding: 1rem 0;
      `}
    >
      <BannerHeader />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
          min-height: 200px;
          padding: 1.25rem 2rem;
          border-radius: 0.5rem;
          background-color: ${theme.color.background.banner};
          box-shadow: 0.2rem 0.2rem 0.625rem 0.2rem
            ${theme.color.shadow.default};
        `}
      >
        <ErrorBoundary
          fallbackRender={(props) => <ApiErrorFallback {...props} />}
        >
          <BannerArticle />
        </ErrorBoundary>
      </div>
    </section>
  );
}

export default Banner;
