import { useTheme, css } from '@emotion/react';
import useTranslate from '@hooks/useTranslate';
import { Translation, TranslateButton } from '@components/common';

function Article({ publishDate, headline }) {
  const theme = useTheme();
  const [
    isTranslated,
    isTranslateLoading,
    translateError,
    translationText,
    translate,
  ] = useTranslate();

  const formattedPublishDate = publishDate.substring(0, 10);

  return (
    <article
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        min-height: 120px;
        padding: 1rem 1.25rem 0.875rem;
        border-radius: 0.5rem;
        background-color: ${theme.color.background.article};
        box-shadow: 0.2rem 0.2rem 0.625rem 0.2rem ${theme.color.shadow.default};
      `}
    >
      <div>
        <span
          css={css`
            display: block;
            margin-bottom: 0.25rem;
            color: ${theme.color.text.label};
            ${theme.typography.detail2}
          `}
        >
          {formattedPublishDate}
        </span>
        <p
          css={css`
            ${theme.typography.title3}
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
