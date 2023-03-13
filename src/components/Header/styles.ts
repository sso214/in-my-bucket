import {css} from '@emotion/react';
import {LAYOUT} from '@/constants/STYLE';

export const Header = css`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: ${LAYOUT.header_height};
  padding: 0 ${LAYOUT.px};

  display: flex;
  align-items: center;
  border: 1px solid red;
`;

export const HeaderLeft = css`
`;

export const HeaderCenter = css`
  margin: 0 auto;
  text-align: center;
`;

export const HeaderRight = css`
  margin-left: auto;
`;
