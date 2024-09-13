import { useRef } from 'react';
import { useTheme, css } from '@emotion/react';
import {
  useActiveSectionTab,
  useSetActiveSectionTab,
} from '@contexts/ActiveSectionTabContext';
import useTouchScroll from '@hooks/useTouchScroll';
import sectionTabList from '@constants/sectionTabList';
import { mediaQuery } from '@styles/breakpoints';

function SectionTabList() {
  const scrollRef = useRef(null);

  const [
    isScrolling,
    scrollStartClientX,
    scrollEndClientX,
    handleScrollStart,
    handleScrollMove,
    handleScrollEnd,
  ] = useTouchScroll(scrollRef);

  const activeSectionTab = useActiveSectionTab();
  const setActiveSectionTab = useSetActiveSectionTab();
  const theme = useTheme();

  const handleTabClick = (tab) => {
    if (scrollStartClientX == scrollEndClientX) setActiveSectionTab(tab);
  };

  return (
    <ul
      ref={scrollRef}
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
              cursor: ${isScrolling ? 'grabbing' : null};
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
