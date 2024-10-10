import { useState, useEffect, useCallback } from 'react';
import { axiosNYT } from '@apis/axios';

const useFetchData = (
  requestURL: string,
  section: string = '',
  pageNumber: number = 0,
  deps: [string, number] | [] = []
) => {
  const [isFetchLoading, setIsFetchLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<any>(null);
  const [fetchedData, setFetchedData] = useState<any>([]);

  const searchParams = {
    fq: `section_name:("${section}")`,
    page: `${pageNumber}`,
    sort: 'newest',
  };
  const searchParamsString = new URLSearchParams(searchParams).toString();

  const fetchData = useCallback(async () => {
    setIsFetchLoading(true);
    setFetchError(null);
    try {
      // section 값을 전달받았다면(섹션 탭 panel 기사) 생성한 searchParamsString 쿼리 파라미터를
      // 그렇지 않으면(배너 기사) 빈 문자열을 입력
      const response = await axiosNYT.get(
        `${requestURL}?${section ? searchParamsString : ''}`
      );
      setFetchedData(fetchedData.concat(response));
    } catch (error) {
      console.log(`기사 조회 중 오류 발생 | ${error}`);
      setFetchError(error);
    }
    setIsFetchLoading(false);
  }, deps);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isFetchLoading, fetchError, fetchedData };
};

export default useFetchData;
