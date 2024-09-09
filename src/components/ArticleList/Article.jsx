import { useState } from 'react';
import axios from 'axios';
import { useTheme, css } from '@emotion/react';
import Translation from '../common/Translation/Translation';
import TranslateButton from '../common/Button/TranslateButton';

function Article({ publishDate, headline }) {
  const [isTranslated, setIsTranslated] = useState(false);
  const [isTranslateLoading, setIsTranslateLoading] = useState(false);
  const [translateError, setTranslateError] = useState(null);
  const [translationText, setTranslationText] = useState(null);

  const theme = useTheme();

  const formattedPublishDate = publishDate.substring(0, 10);

  const translate = async () => {
    if (!translationText) {
      setIsTranslateLoading(true);
      try {
        const response = await axios.post(
          `https://translation.googleapis.com/language/translate/v2?&key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
          { q: headline, target: 'ko' }
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

  return (
    <article
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;
        min-height: 120px;
        padding: 16px 20px 14px;
        border-radius: 8px;
        box-shadow: 3px 3px 10px 3px ${theme.color.shadow.default};
      `}
    >
      <div>
        <span
          css={css`
            display: block;
            margin-bottom: 4px;
            color: ${theme.color.text.label};
            ${theme.typography.articleDate}
          `}
        >
          {formattedPublishDate}
        </span>
        <p
          css={css`
            ${theme.typography.articleTitle}
          `}
        >
          {headline}
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
          align-self: flex-end;
          color: ${theme.color.emphasis.secondary};
        `}
      >
        <TranslateButton isTranslated={isTranslated} translate={translate} />
      </div>
    </article>
  );
}

export default Article;
