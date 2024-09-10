import axios from 'axios';
import getRandomInt from '../utils/getRandomInt';
import {
  formatPublishDate,
  capitalizeFirstLetter,
} from '../utils/formattingText';
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
    const randomInt = getRandomInt(response.data.results.length);
    const article = response.data.results[randomInt]; // 응답 결과 기사 목록 중 랜덤한 기사 선택
    article.section = capitalizeFirstLetter(article.section); // 기사 section 이름의 첫 글자 대문자화
    return article;
  }

  // 메인 콘텐츠 기사 목록
  else if (response.data.response) {
    const articleList = response.data.response.docs;
    articleList.forEach((article) => formatPublishDate(article.pub_date)); // 기사 발행일을 yyyy-mm-dd 형식으로 변환
    return articleList;
  }
});

axiosGoogleTranslate.interceptors.response.use((response) => {
  const translatedText = response.data.data.translations[0].translatedText;
  return translatedText;
});
