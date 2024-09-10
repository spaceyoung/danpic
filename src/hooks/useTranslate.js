import { useState } from 'react';
import { axiosGoogleTranslate } from '../apis/axios';

const useTranslate = () => {
  const [isTranslated, setIsTranslated] = useState(false);
  const [isTranslateLoading, setIsTranslateLoading] = useState(false);
  const [translateError, setTranslateError] = useState(null);
  const [translationText, setTranslationText] = useState(null);

  const translate = async (originalText) => {
    if (!translationText) {
      setIsTranslateLoading(true);
      try {
        const response = await axiosGoogleTranslate.post('/', {
          q: originalText,
        });
        setTranslationText(response);
        setIsTranslated(!isTranslated);
      } catch (error) {
        console.log(`기사 번역 중 오류 발생 | ${error}`);
        setTranslateError(error);
      }
      setIsTranslateLoading(false);
    } else {
      // 이미 저장된 번역문이 있는 경우 API 재요청을 방지하고 토글 기능만 실행
      setIsTranslated(!isTranslated);
    }
  };

  return [
    isTranslated,
    isTranslateLoading,
    translateError,
    translationText,
    translate,
  ];
};

export default useTranslate;
