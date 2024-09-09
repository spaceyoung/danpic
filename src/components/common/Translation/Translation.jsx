import { useTheme, css } from '@emotion/react';
import TranslationDivider from './TranslationDivider';

function Translation({
  isTranslated,
  isTranslateLoading,
  translateError,
  translationText,
}) {
  const theme = useTheme();

  if (isTranslateLoading)
    return (
      <>
        <TranslationDivider />
        <p
          css={css`
            ${theme.typograhpy.bannerTranslation}
          `}
        >
          번역 중...
        </p>
      </>
    );

  if (translateError)
    return (
      <>
        <TranslationDivider />
        <p
          css={css`
            ${theme.typograhpy.bannerTranslation}
          `}
        >
          번역 중 오류가 발생했어요😢
        </p>
      </>
    );

  return (
    <>
      {isTranslated && (
        <>
          <TranslationDivider />
          <p
            css={css`
              ${theme.typograhpy.bannerTranslation}
            `}
          >
            {translationText}
          </p>
        </>
      )}
    </>
  );
}

export default Translation;
