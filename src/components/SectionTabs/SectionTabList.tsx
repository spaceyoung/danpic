import { useRef } from 'react';
import { css } from '@emotion/react';
import useTouchScroll from '@hooks/useTouchScroll';
import sectionTabList from '@constants/sectionTabList';
import { SectionTabListButton } from '@components/SectionTabs';
import { mediaQuery } from '@styles/breakpoints';

function SectionTabList() {
  const scrollRef = useRef<HTMLUListElement>(null);

  const {
    isScrolling,
    scrollStartClientX,
    scrollEndClientX,
    handleScrollStart,
    handleScrollMove,
    handleScrollEnd,
  } = useTouchScroll(scrollRef);

  return (
    <ul
      ref={scrollRef}
      onMouseDown={handleScrollStart}
      onMouseMove={isScrolling ? handleScrollMove : undefined}
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
          <SectionTabListButton
            sectionTab={sectionTab}
            isScrolling={isScrolling}
            scrollStartClientX={scrollStartClientX}
            scrollEndClientX={scrollEndClientX}
          />
        </li>
      ))}
    </ul>
  );
}

export default SectionTabList;
