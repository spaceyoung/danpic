import { TranslationDivider } from '@components/common';

interface TranslationProps {
  isTranslated: boolean;
  isTranslateLoading: boolean;
  translateError: string;
  translationText: string;
  css?: any;
}

function Translation({
  isTranslated,
  isTranslateLoading,
  translateError,
  translationText,
  ...args
}: TranslationProps) {
  if (isTranslateLoading)
    return (
      <>
        <TranslationDivider />
        <p {...args}>번역 중...</p>
      </>
    );

  if (translateError)
    return (
      <>
        <TranslationDivider />
        <p {...args}>번역 중 오류가 발생했어요😢</p>
      </>
    );

  return (
    <>
      {isTranslated && (
        <>
          <TranslationDivider />
          <p {...args}>{translationText}</p>
        </>
      )}
    </>
  );
}

export default Translation;
