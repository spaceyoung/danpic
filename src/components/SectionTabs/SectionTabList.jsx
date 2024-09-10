import { useTheme, css } from '@emotion/react';
import { useSetActiveSectionTab } from '@contexts/ActiveSectionTabContext';
import sectionTabList from '@constants/sectionTabList';

function SectionTabList() {
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
              font-weight: 500;
              font-size: 20px;
              color: ${theme.color.text.disabled};
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
