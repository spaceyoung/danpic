import { useState, useEffect } from 'react';
import { axiosNYT } from '../apis/axios';

const useFetchData = (requestURL) => {
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetchLoading(true);
      try {
        const response = await axiosNYT.get(requestURL);
        setFetchedData(response);
      } catch (error) {
        console.log(`기사 조회 중 오류 발생 | ${error}`);
        setFetchError(error);
      }
      setIsFetchLoading(false);
    };

    fetchData();
  }, []);

  return [isFetchLoading, fetchError, fetchedData];
};

export default useFetchData;
