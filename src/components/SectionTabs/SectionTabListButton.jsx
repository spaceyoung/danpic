import { useRef } from 'react';
import { useTheme, css } from '@emotion/react';
import useActiveTabStore from '@stores/useActiveTabStore';
import { mediaQuery } from '@styles/breakpoints';

function SectionTabListButton({
  sectionTab,
  isScrolling,
  scrollStartClientX,
  scrollEndClientX,
}) {
  const scrollToFocusRef = useRef(null);

  const theme = useTheme();
  const { activeSectionTab, setActiveSectionTab } = useActiveTabStore();

  const handleTabListButtonClick = (tabListButton) => {
    if (scrollStartClientX == scrollEndClientX) {
      setActiveSectionTab(tabListButton);
      scrollToFocusRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  return (
    <button
      ref={scrollToFocusRef}
      onClick={() => handleTabListButtonClick(sectionTab)}
      css={css`
        height: 3rem;
        padding: 0 1.5rem;
        color: ${sectionTab === activeSectionTab
          ? theme.color.emphasis.primary
          : theme.color.text.disabled};
        scroll-margin-left: 2rem;
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
  );
}

export default SectionTabListButton;
