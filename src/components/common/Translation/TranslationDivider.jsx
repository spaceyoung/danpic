import { useTheme, css } from '@emotion/react';

function TranslationDivider() {
  const theme = useTheme();

  return (
    <hr
      css={css`
        width: 40%;
        height: 1px;
        margin: 1.25rem 0 0.75rem;
        border: 0;
        background-color: ${theme.color.border.default};
      `}
    />
  );
}

export default TranslationDivider;
