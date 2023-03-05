import {css} from '@emotion/react';
import {LAYOUT} from '@/constants/STYLE';

export const Nav = css`
  position: fixed;
  bottom: 0;
  left: 0;
  
  width: 100%;
  height: ${LAYOUT.nav_height};
  padding: 0 ${LAYOUT.px};

  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 1px solid red;

  button {
    width: 44px;
    height: 44px;

    border-radius: 50%;
  }

  p {
    font-size: 12px;
    font-weight: 500;
  }
`;

