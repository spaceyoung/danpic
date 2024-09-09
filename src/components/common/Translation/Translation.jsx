import { useTheme, css } from '@emotion/react';

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
        <hr
          css={css`
            width: 40%;
            height: 1px;
            margin: 20px 0 12px;
            border: 0;
            background-color: ${theme.color.border.banner};
          `}
        />
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
        <hr
          css={css`
            width: 40%;
            height: 1px;
            margin: 20px 0 12px;
            border: 0;
            background-color: ${theme.color.border.banner};
          `}
        />
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
          <hr
            css={css`
              width: 40%;
              height: 1px;
              margin: 20px 0 12px;
              border: 0;
              background-color: ${theme.color.border.banner};
            `}
          />
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
