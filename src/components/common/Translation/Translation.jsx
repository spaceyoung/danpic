function Translation({
  isTranslated,
  isTranslateLoading,
  translateError,
  translationText,
}) {
  if (isTranslateLoading)
    return (
      <>
        <hr />
        <p>번역 중...</p>
      </>
    );

  if (translateError)
    return (
      <>
        <hr />
        <p>번역 중 오류가 발생했어요😢</p>
      </>
    );

  return (
    <>
      {isTranslated && (
        <>
          <hr />
          <p>{translationText}</p>
        </>
      )}
    </>
  );
}

export default Translation;
