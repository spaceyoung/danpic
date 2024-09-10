import { useTheme, css } from '@emotion/react';

const sectionTabList = [
  'World',
  'Business',
  'Politics',
  'Lifestyle',
  'Tech',
  'Science',
  'Health',
];

function SectionTabList() {
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
