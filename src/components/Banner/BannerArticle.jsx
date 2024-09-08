import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme, css } from '@emotion/react';
import TranslateButton from '../common/Button/TranslateButton';
import ArticleLinkButton from '../common/Button/ArticleLinkButton';

function BannerArticle() {
  const [article, setArticle] = useState(null);

  const theme = useTheme();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`
        );
        const randomNum = Math.floor(
          Math.random() * response.data.results.length
        );
        setArticle(response.data.results[randomNum]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, []);

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
    </div>
  );
}

export default BannerArticle;
