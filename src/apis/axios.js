import axios from 'axios';
import { BASE_URL } from '../constants/api';

export const axiosNYT = axios.create({
  baseURL: BASE_URL.NYT,
  params: {
    'api-key': import.meta.env.VITE_NYT_API_KEY,
  },
});

export const axiosGoogleTranslate = axios.create({
  baseURL: BASE_URL.GOOGLE_TRANSLATE,
  params: {
    key: import.meta.env.VITE_GOOGLE_API_KEY,
    target: 'ko',
  },
});

axiosNYT.interceptors.response.use((response) => {
  // 배너 기사
  if (response.data.results) {
    const randomNumber = Math.floor(
      Math.random() * response.data.results.length
    );
    const article = response.data.results[randomNumber];
    // 기사 section 이름의 첫 글자를 대문자로 변환(us인 경우 모든 글자를 대문자로 변환)
    article.section = article.section.replace(/(\bus\b)|(\b\w)/g, (str) =>
      str.toUpperCase()
    );
    return article;
  }

  // 메인 콘텐츠 기사 목록
  else if (response.data.response) {
    const articleList = response.data.response.docs;
    return articleList;
  }
});

axiosGoogleTranslate.interceptors.response.use((response) => {
  const translatedText = response.data.data.translations[0].translatedText;
  return translatedText;
});
