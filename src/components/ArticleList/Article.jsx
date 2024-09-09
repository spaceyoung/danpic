import { useTheme, css } from '@emotion/react';
import TranslateButton from '../common/Button/TranslateButton';

function Article() {
  const theme = useTheme();

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
          기사 발행일
        </span>
        <p
          css={css`
            ${theme.typography.articleTitle}
          `}
        >
          기사 제목
        </p>
      </div>
      <div
        css={css`
          align-self: flex-end;
          color: ${theme.color.emphasis.secondary};
        `}
      >
        <TranslateButton />
      </div>
    </article>
  );
}

export default Article;
