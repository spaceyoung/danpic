import { useTheme, css } from '@emotion/react';
import useFetchData from '@hooks/useFetchData';
import useTranslate from '@hooks/useTranslate';
import { NYT_REQUEST_URL } from '@constants/api';
import LoadingMessage from '@common/Loading/LoadingMessage';
import ErrorMessage from '@common/Error/ErrorMessage';
import Translation from '@common/Translation/Translation';
import TranslateButton from '@common/Button/TranslateButton';
import ArticleLinkButton from '@common/Button/ArticleLinkButton';

function BannerArticle() {
  const [isFetchLoading, fetchError, article] = useFetchData(
    NYT_REQUEST_URL.TOP_STORIES
  );
  const [
    isTranslated,
    isTranslateLoading,
    translateError,
    translationText,
    translate,
  ] = useTranslate();

  const theme = useTheme();

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
        <TranslateButton
          headline={article && article.title}
          isTranslated={isTranslated}
          translate={translate}
        />
        <ArticleLinkButton articleLink={article && article.url} />
      </div>
    </>
  );
}

export default BannerArticle;
