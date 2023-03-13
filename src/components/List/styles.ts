import {css} from '@emotion/react';
import {COLORS} from "@/constants/STYLE";

export const List = css`
`;

export const Item = css`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  margin-bottom: 10px;

  border: 1px solid ${COLORS.gray_1};
  border-radius: 4px;
  
  font-size: 15px;
  
  &:last-child {
    margin-bottom:0;
  }
  
  a {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
