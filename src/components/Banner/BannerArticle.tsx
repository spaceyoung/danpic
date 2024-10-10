import { useTheme, css } from '@emotion/react';
import useFetchData from '@hooks/useFetchData';
import useTranslate from '@hooks/useTranslate';
import { NYT_REQUEST_URL } from '@constants/api';
import {
  LoadingMessage,
  ErrorMessage,
  Translation,
  TranslateButton,
  ArticleLinkButton,
} from '@components/common';

function BannerArticle() {
  const theme = useTheme();

  const {
    isFetchLoading,
    fetchError,
    fetchedData: article,
  } = useFetchData(NYT_REQUEST_URL.TOP_STORIES);

  const {
    isTranslated,
    isTranslateLoading,
    translateError,
    translationText,
    translate,
  } = useTranslate();

  if (isFetchLoading) return <LoadingMessage type={'화제가 된'} />;
  if (fetchError) return <ErrorMessage />;
  if (!article) return null;

  return (
    <>
      <div>
        <span
          css={css`
            display: block;
            margin-bottom: 0.5rem;
            ${theme.typography.detail1}
          `}
        >
          {article[0]?.section}
        </span>
        <p
          css={css`
            color: ${theme.color.text.title};
            ${theme.typography.title2}
          `}
        >
          {article[0]?.title}
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
          gap: 1.5rem;
          color: ${theme.color.button.banner};
          ${theme.typography.label2}
        `}
      >
        <TranslateButton
          headline={article[0]?.title}
          isTranslated={isTranslated}
          translate={translate}
        />
        <ArticleLinkButton articleLink={article[0]?.url} />
      </div>
    </>
  );
}

export default BannerArticle;
