import { useTheme, css } from '@emotion/react';
import useTranslate from '@hooks/useTranslate';
import Translation from '@common/Translation/Translation';
import TranslateButton from '@common/Button/TranslateButton';

function Article({ publishDate, headline }) {
  const [
    isTranslated,
    isTranslateLoading,
    translateError,
    translationText,
    translate,
  ] = useTranslate();

  const theme = useTheme();

  const formattedPublishDate = publishDate.substring(0, 10);

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
        background-color: ${theme.color.background.article};
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
          css={css`
            color: ${theme.color.text.detail};
          `}
        />
      </div>
      <div
        css={css`
          align-self: flex-end;
          color: ${theme.color.emphasis.secondary};
        `}
      >
        <TranslateButton
          headline={headline}
          isTranslated={isTranslated}
          translate={translate}
        />
      </div>
    </article>
  );
}

export default Article;
