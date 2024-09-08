import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme, css } from '@emotion/react';
import TranslateButton from '../common/Button/TranslateButton';
import ArticleLinkButton from '../common/Button/ArticleLinkButton';

function BannerArticle() {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState(null);

  const theme = useTheme();

  useEffect(() => {
    const fetchArticle = async () => {
      setIsloading(true);
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`
        );
        const randomNum = Math.floor(
          Math.random() * response.data.results.length
        );
        setArticle(response.data.results[randomNum]);
      } catch (error) {
        console.log(`기사 조회 중 오류 발생 | ${error}`);
        setError(error);
      }
      setIsloading(false);
    };
    fetchArticle();
  }, []);

  if (isLoading)
    return (
      <p
        css={css`
          margin: auto;
          text-align: center;
        `}
      >
        화제가 된 단픽 스크랩하는 중... 📰
      </p>
    );

  if (error)
    return (
      <p
        css={css`
          margin: auto;
          text-align: center;
        `}
      >
        단픽을 스크랩하는 중 오류가 발생했어요😢
      </p>
    );

  return (
    <>
      <div>
        <span
          css={css`
            display: block;
            margin-bottom: 8px;
            ${theme.typograhpy.bannerSection}
          `}
        >
          {article && article.section}
        </span>
        <p
          css={css`
            ${theme.typograhpy.bannerTitle}
            color: ${theme.color.text.title};
          `}
        >
          {article && article.title}
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
        <ArticleLinkButton articleLink={article && article.url} />
      </div>
    </>
  );
}

export default BannerArticle;
