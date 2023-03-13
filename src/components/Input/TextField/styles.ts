import {css} from '@emotion/react';
import {COLORS} from "@/constants/STYLE";

export const TextField = css`
  width: 100%;
  height: 45px;
  
  padding: 0 15px;
  
  border: 1px solid ${COLORS.gray_1};
  border-radius: 4px;
  
  font-size: 16px;
  transition: all .2s;
  
  &:focus {
    border-color: ${COLORS.sage_4};
  }
  
  &::placeholder {
    color: #aaa;
  }
`;
