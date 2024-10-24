import { useState, useEffect, useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useErrorBoundary } from 'react-error-boundary';
import useFetchStore from '@stores/useFetchStore';
import { axiosNYT } from '@apis/axios';

const useFetchData = (
  requestURL: string,
  section: string = '',
  pageNumber: number = 0,
  deps: [string, number] | [] = []
) => {
  const [isFetchLoading, setIsFetchLoading] = useState<boolean>(false);

  const [setArticle, setArticleList] = useFetchStore(
    useShallow((state) => [state.setArticle, state.setArticleList])
  );

  const { showBoundary } = useErrorBoundary();

  const searchParams = {
    fq: `section_name:("${section}")`,
    page: `${pageNumber}`,
    sort: 'newest',
  };
  const searchParamsString = new URLSearchParams(searchParams).toString();

  const fetchData = useCallback(async () => {
    setIsFetchLoading(true);
    try {
      // section 값을 전달받았다면(섹션 탭 panel 기사) 생성한 searchParamsString 쿼리 파라미터를
      // 그렇지 않으면(배너 기사) 빈 문자열을 입력
      const response = await axiosNYT.get(
        `${requestURL}?${section ? searchParamsString : ''}`
      );
      if (section) setArticleList(response);
      else setArticle(response);
    } catch (error) {
      console.log(`기사 조회 중 오류 발생 | ${error}`);
      showBoundary(error);
    }
    setIsFetchLoading(false);
  }, deps);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isFetchLoading };
};

export default useFetchData;
