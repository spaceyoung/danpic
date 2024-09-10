import { useState } from 'react';
import axios from 'axios';
import { useTheme, css } from '@emotion/react';
import useFetchData from '../../hooks/useFetchData';
import { NYT_REQUEST_URL } from '../../constants/api';
import LoadingMessage from '../common/Loading/LoadingMessage';
import ErrorMessage from '../common/Error/ErrorMessage';
import Translation from '../common/Translation/Translation';
import TranslateButton from '../common/Button/TranslateButton';
import ArticleLinkButton from '../common/Button/ArticleLinkButton';

function BannerArticle() {
  const [isFetchLoading, fetchError, article] = useFetchData(
    NYT_REQUEST_URL.TOP_STORIES
  );

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

  if (isFetchLoading) return <LoadingMessage type={'화제가 된'} />;
  if (fetchError) return <ErrorMessage />;

  return (
    <>
      <div>
        <span
          css={css`
            display: block;
            margin-bottom: 8px;
            ${theme.typography.bannerSection}
          `}
        >
          {article && article.section}
        </span>
        <p
          css={css`
            color: ${theme.color.text.title};
            ${theme.typography.bannerTitle}
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
          display: flex;
          align-self: flex-end;
          gap: 24px;
          color: ${theme.color.button.banner};
          ${theme.typography.bannerButton}
        `}
      >
        <TranslateButton isTranslated={isTranslated} translate={translate} />
        <ArticleLinkButton articleLink={article && article.url} />
      </div>
    </>
  );
}

export default BannerArticle;
