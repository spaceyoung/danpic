import { useTheme, css } from '@emotion/react';

function TranslationDivider() {
  const theme = useTheme();

  return (
    <hr
      css={css`
        width: 40%;
        height: 1px;
        margin: 20px 0 12px;
        border: 0;
        background-color: ${theme.color.border.banner};
      `}
    />
  );
}

export default TranslationDivider;
