import {css} from '@emotion/react';
import {LAYOUT} from '@/constants/STYLE';

export const Layout = css`
  width: 100%;
  min-height: calc(100vh - ${LAYOUT.header_height} - ${LAYOUT.nav_height});
  
  padding: ${LAYOUT.header_height} 5% ${LAYOUT.nav_height};
  border: 1px solid red;
`;
