import {css} from '@emotion/react';
import {LAYOUT} from '@/constants/STYLE';

export const Nav = css`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;

  width: 100%;
  height: ${LAYOUT.nav_height};
  padding: 0 ${LAYOUT.px};

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border-top: 1px solid #ddd;

  a {
    width: 44px;
    height: 44px;

    flex: 1;
    border-radius: 50%;
    text-align: center;
  }
  
  svg {
    width: 28px;
    height: 28px;
  }

  p {
    margin-top: 4px;
    
    font-size: 1px;
    font-weight: 500;
  }
`;

