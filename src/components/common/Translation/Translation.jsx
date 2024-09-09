import TranslationDivider from './TranslationDivider';

function Translation({
  isTranslated,
  isTranslateLoading,
  translateError,
  translationText,
}) {
  if (isTranslateLoading)
    return (
      <>
        <TranslationDivider />
        <p>번역 중...</p>
      </>
    );

  if (translateError)
    return (
      <>
        <TranslationDivider />
        <p>번역 중 오류가 발생했어요😢</p>
      </>
    );

  return (
    <>
      {isTranslated && (
        <>
          <TranslationDivider />
          <p>{translationText}</p>
        </>
      )}
    </>
  );
}

export default Translation;
