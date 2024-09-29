import { useState, useEffect, useCallback } from 'react';
import { axiosNYT } from '@apis/axios';

const useFetchData = (
  requestURL: string,
  section: string = '',
  pageNumber: number = 0,
  deps: [string, number] | [] = []
) => {
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [fetchedData, setFetchedData] = useState([]);

  // section 값을 전달받았다면(섹션 탭 panel 기사) 해당하는 쿼리 파라미터를
  // 그렇지 않으면(배너 기사) 빈 값을 생성 후
  // .toString() 메서드를 통해 쿼리 파라미터를 문자열로 변환
  const searchParams = new URLSearchParams(
    section
      ? {
          fq: `section_name:("${section}")`,
          page: `${pageNumber}`,
          sort: 'newest',
        }
      : ''
  ).toString();

  const fetchData = useCallback(async () => {
    setIsFetchLoading(true);
    setFetchError(null);
    try {
      const response = await axiosNYT.get(`${requestURL}?${searchParams}`);
      // 섹션 탭 panel 기사 목록을 조회하는 경우에만 응답 결과를 누적
      setFetchedData(section ? fetchedData.concat(response) : response);
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
