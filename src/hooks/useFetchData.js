import { useState, useEffect, useCallback } from 'react';
import { axiosNYT } from '@apis/axios';

const useFetchData = (requestURL, section = null, deps = []) => {
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  // section 값을 전달받았다면(섹션 탭 panel 기사) 해당하는 쿼리 파라미터를
  // 그렇지 않으면(배너 기사) 빈 값을 생성 후
  // .toString() 메서드를 통해 쿼리 파라미터를 문자열로 변환
  const searchParams = new URLSearchParams(
    section ? { fq: `section_name:("${section}")` } : ''
  ).toString();

  const fetchData = useCallback(async () => {
    setIsFetchLoading(true);
    try {
      const response = await axiosNYT.get(`${requestURL}?${searchParams}`);
      setFetchedData(response);
    } catch (error) {
      console.log(`기사 조회 중 오류 발생 | ${error}`);
      setFetchError(error);
    }
    setIsFetchLoading(false);
  }, deps);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [isFetchLoading, fetchError, fetchedData];
};

export default useFetchData;
