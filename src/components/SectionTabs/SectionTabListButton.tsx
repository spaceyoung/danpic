import { useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useTheme, css } from '@emotion/react';
import useFetchStore from '@stores/useFetchStore';
import { mediaQuery } from '@styles/breakpoints';

interface SectionTabListButtonProps {
  sectionTab: string;
  isScrolling: boolean;
  scrollStartClientX: number;
  scrollEndClientX: number;
}

function SectionTabListButton({
  sectionTab,
  isScrolling,
  scrollStartClientX,
  scrollEndClientX,
}: SectionTabListButtonProps) {
  const scrollToFocusRef = useRef<HTMLButtonElement>(null);

  const theme = useTheme();
  const [section, setSection] = useFetchStore(
    useShallow((state) => [state.section, state.setSection])
  );

  const handleSectionTabListButtonClick = (sectionTab: string) => {
    if (scrollToFocusRef.current && scrollStartClientX === scrollEndClientX) {
      setSection(sectionTab);
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
      onClick={() => handleSectionTabListButtonClick(sectionTab)}
      css={css`
        height: 3rem;
        padding: 0 1.5rem;
        color: ${sectionTab === section
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
          transform: scale(${sectionTab === section ? 1 : 0});
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
