import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme, css } from '@emotion/react';
import LoadingMessage from '../common/Loading/LoadingMessage';
import ErrorMessage from '../common/Error/ErrorMessage';
import Translation from '../common/Translation/Translation';
import TranslateButton from '../common/Button/TranslateButton';
import ArticleLinkButton from '../common/Button/ArticleLinkButton';

function BannerArticle() {
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [article, setArticle] = useState(null);

  const [isTranslated, setIsTranslated] = useState(false);
  const [isTranslateLoading, setIsTranslateLoading] = useState(false);
  const [translateError, setTranslateError] = useState(null);
  const [translationText, setTranslationText] = useState(null);

  const theme = useTheme();

  const translate = async () => {
    if (!isTranslated) {
      setIsTranslateLoading(true);
      try {
        const response = await axios.post(
          `https://translation.googleapis.com/language/translate/v2?&key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
          { q: article.title, target: 'ko' }
        );
        setTranslationText(response.data.data.translations[0].translatedText);
        setIsTranslated(!isTranslated);
      } catch (error) {
        console.log(`기사 번역 중 오류 발생 | ${error}`);
        setTranslateError(error);
      }
      setIsTranslateLoading(false);
    } else {
      // 이미 저장된 번역문이 있는 경우 API 재요청을 방지하고 토글 기능만 실행
      setIsTranslated(!isTranslated);
    }
  };

  useEffect(() => {
    const fetchArticle = async () => {
      setIsFetchLoading(true);
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
        setFetchError(error);
      }
      setIsFetchLoading(false);
    };
    fetchArticle();
  }, []);

  if (isFetchLoading) return <LoadingMessage />;
  if (fetchError) return <ErrorMessage />;

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
        <Translation
          isTranslated={isTranslated}
          isTranslateLoading={isTranslateLoading}
          translateError={translateError}
          translationText={translationText}
        />
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
        <TranslateButton isTranslated={isTranslated} translate={translate} />
        <ArticleLinkButton articleLink={article && article.url} />
      </div>
    </>
  );
}

export default BannerArticle;
