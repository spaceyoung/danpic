import { useShallow } from 'zustand/react/shallow';
import { useTheme, css } from '@emotion/react';
import useThemeStore from '@stores/useThemeStore';
import { formatDateWithDayofWeek } from '@utils/formattingText';
import { mediaQuery } from '@styles/breakpoints';
import logoLight from '@assets/logo-light.svg';
import logoDark from '@assets/logo-dark.svg';

function BannerHeader() {
  const theme = useTheme();
  const [themeMode] = useThemeStore(useShallow((state) => [state.themeMode]));

  const dateOfToday = formatDateWithDayofWeek();

  return (
    <div
      css={css`
        margin-bottom: 0.75rem;
      `}
    >
      <span
        css={css`
          display: block;
          margin-bottom: 0.25rem;
          color: ${theme.color.text.label};
        `}
      >
        {dateOfToday}
      </span>
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 0.625rem;
        `}
      >
        <figure>
          <img
            src={themeMode === 'light' ? logoLight : logoDark}
            alt="단픽"
            css={css`
              width: 1.75rem;
              margin-bottom: 0.125rem;
              ${mediaQuery[1]} {
                width: 1.625rem;
              }
            `}
          />
        </figure>
        <h2
          css={css`
            color: ${theme.color.text.title};
            ${theme.typography.title1}
          `}
        >
          화제의{' '}
          <em
            css={css`
              color: ${theme.color.emphasis.primary};
            `}
          >
            단픽
          </em>
        </h2>
      </div>
    </div>
  );
}

export default BannerHeader;
