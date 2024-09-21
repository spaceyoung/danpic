import { useShallow } from 'zustand/react/shallow';
import { useTheme, css } from '@emotion/react';
import { MdArrowUpward } from 'react-icons/md';
import useScrollStore from '@stores/useScrollStore';

function ScrollToTopButton() {
  const theme = useTheme();
  const [isScrolled] = useScrollStore(
    useShallow((state) => [state.isScrolled])
  );

  return (
    <aside
      css={css`
        position: fixed;
        right: 1.25rem;
        bottom: ${isScrolled ? '1.25rem' : '-2.75rem'};
        transition: bottom 0.4s;
      `}
    >
      <button
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 100%;
          color: ${theme.color.button.scrollToTopButton};
          background-color: ${theme.color.background.scrollToTopButton};
          box-shadow: 0.2rem 0.2rem 0.625rem 0.2rem
            ${theme.color.shadow.default};
          ${theme.typography.label1}
          @keyframes updown {
            0% {
              transform: translateY(0.125rem);
            }
            50% {
              transform: translateY(-0.125rem);
            }
            100% {
              transform: translateY(0.125rem);
            }
          }
          :hover > * {
            animation: updown 1.5s infinite;
          }
        `}
      >
        <MdArrowUpward />
      </button>
    </aside>
  );
}

export default ScrollToTopButton;
