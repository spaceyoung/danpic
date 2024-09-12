import { useTheme, css } from '@emotion/react';
import {
  useActiveSectionTab,
  useSetActiveSectionTab,
} from '@contexts/ActiveSectionTabContext';
import sectionTabList from '@constants/sectionTabList';

function SectionTabList() {
  const activeSectionTab = useActiveSectionTab();
  const setActiveSectionTab = useSetActiveSectionTab();

  const theme = useTheme();

  return (
    <ul
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
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
            onClick={() =>
              setActiveSectionTab(
                (prevSectionTab) => (prevSectionTab = sectionTab)
              )
            }
            css={css`
              height: 48px;
              padding: 0 24px;
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
