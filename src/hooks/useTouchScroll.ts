import React, { RefObject, useState } from 'react';
import throttle from '@utils/throttle';

const useTouchScroll = (
  scrollRef: RefObject<HTMLUListElement>
): [
  boolean,
  number,
  number,
  React.MouseEventHandler<HTMLUListElement>,
  React.MouseEventHandler<HTMLUListElement>,
  React.MouseEventHandler<HTMLUListElement>,
] => {
  const [isScrolling, setIsScrolling] = useState(false); // 대상을 스크롤 중인지
  const [scrollStartPositionX, setScrollStartPositionX] = useState(0); // 기존에 스크롤 된 위치를 포함한 스크롤 시작 위치 x좌표
  const [scrollStartClientX, setScrollStartClientX] = useState(0); // 브라우저 뷰포트 기준 스크롤 시작 위치 x좌표
  const [scrollEndClientX, setScrollEndClientX] = useState(0); // 브라우저 뷰포트 기준 스크롤 끝난 위치 x좌표

  const handleScrollStart = (e: React.MouseEvent<HTMLUListElement>): void => {
    if (scrollRef.current) {
      setIsScrolling(true);
      setScrollStartPositionX(e.clientX + scrollRef.current!.scrollLeft);
      setScrollStartClientX(e.clientX);
    }
  };

  const handleScrollMove = throttle<[React.MouseEvent<HTMLUListElement>]>(
    (e) => {
      if (scrollRef.current && isScrolling)
        scrollRef.current.scrollLeft = scrollStartPositionX - e.clientX;
    },
    100
  );

  const handleScrollEnd = (e: React.MouseEvent<HTMLUListElement>): void => {
    if (isScrolling) {
      setScrollEndClientX(e.clientX);
      setIsScrolling(false);
    }
  };

  return [
    isScrolling,
    scrollStartClientX,
    scrollEndClientX,
    handleScrollStart,
    handleScrollMove,
    handleScrollEnd,
  ];
};

export default useTouchScroll;
