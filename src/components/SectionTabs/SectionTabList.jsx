import { useState } from 'react';
import { useTheme, css } from '@emotion/react';
import {
  useActiveSectionTab,
  useSetActiveSectionTab,
} from '@contexts/ActiveSectionTabContext';
import sectionTabList from '@constants/sectionTabList';
import { mediaQuery } from '@styles/breakpoints';

function SectionTabList() {
  const [isScrolling, setIsScrolling] = useState(false); // 탭 목록을 스크롤 중인지
  const [scrollStartPositionX, setScrollStartPositionX] = useState(0); // 기존에 스크롤 된 위치를 포함한 스크롤 시작 위치 x좌표
  const [scrollStartClientX, setScrollStartClientX] = useState(0); // 브라우저 뷰포트 기준 스크롤 시작 위치 x좌표
  const [scrollEndClientX, setScrollEndClientX] = useState(0); // 브라우저 뷰포트 기준 스크롤 끝난 위치 x좌표

  const activeSectionTab = useActiveSectionTab();
  const setActiveSectionTab = useSetActiveSectionTab();
  const theme = useTheme();

  const handleScrollStart = (e) => {
    setIsScrolling(true);
    setScrollStartPositionX(e.clientX + e.currentTarget.scrollLeft);
    setScrollStartClientX(e.clientX);
  };

  const handleScrollMove = (e) => {
    if (isScrolling)
      e.currentTarget.scrollLeft = scrollStartPositionX - e.clientX;
  };

  const handleScrollEnd = (e) => {
    if (isScrolling) {
      setScrollEndClientX(e.clientX);
      setIsScrolling(false);
    }
  };

  const handleTabClick = (tab) => {
    if (scrollStartClientX == scrollEndClientX) setActiveSectionTab(tab);
  };

  return (
    <ul
      onMouseDown={handleScrollStart}
      onMouseMove={isScrolling ? handleScrollMove : null}
      onMouseUp={handleScrollEnd}
      onMouseLeave={handleScrollEnd}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        ::-webkit-scrollbar {
          display: none;
        }
        ${mediaQuery[2]} {
          justify-content: flex-start;
          overflow-x: auto;
        }
      `}
    >
      {sectionTabList.map((sectionTab) => (
        <li
          key={sectionTab}
          css={css`
            display: flex;
            align-items: center;
            position: relative;
          `}
        >
          <button
            onClick={() => handleTabClick(sectionTab)}
            css={css`
              height: 3rem;
              padding: 0 1.5rem;
              color: ${sectionTab === activeSectionTab
                ? theme.color.emphasis.primary
                : theme.color.text.disabled};
              transition: all 0.2s;
              ${theme.typography.label1}
              ::after {
                content: '';
                width: 100%;
                height: 3px;
                border-radius: 2px;
                background-color: ${theme.color.emphasis.primary};
                position: absolute;
                left: 0;
                bottom: 0;
                transform: scale(${sectionTab === activeSectionTab ? 1 : 0});
                transition: all 0.2s;
              }
              :hover {
                color: ${theme.color.emphasis.primary};
              }
              ${mediaQuery[2]} {
                padding: 0 1.25rem;
              }
              ${mediaQuery[1]} {
                padding: 0 1rem;
              }
            `}
          >
            {sectionTab}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SectionTabList;
