export const formatDateWithDayofWeek = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[today.getDay()];

  const formattedDate = `${year}-${month}-${day} (${dayOfWeek})`;

  return formattedDate;
};

export const formatPublishDate = (date: string): string => {
  const formattedPublishDate = date.substring(0, 10);
  return formattedPublishDate;
};

// 기사 section 이름의 첫 글자를 대문자로 변환(us인 경우 모든 글자를 대문자로 변환)
export const capitalizeFirstLetter = (string: string): string => {
  const capitalizedFirstLetter = string.replace(/(\bus\b)|(\b\w)/g, (str) =>
    str.toUpperCase()
  );
  return capitalizedFirstLetter;
};
