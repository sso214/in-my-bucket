import {css} from '@emotion/react';
import {COLORS} from "@/constants/STYLE";

export const DataTable = css`
  width: 100%;

  table-layout: fixed;
  border-collapse: separate;
  border: 1px solid ${COLORS.gray_1};
  border-radius: 4px;
  
  tr {
    &:last-of-type th,
    &:last-of-type td {
      border-bottom: 0;
    }
  }

  th,
  td {
    height: 50px;
    padding-left: 10px;
    
    border-bottom: 1px solid ${COLORS.gray_1};
    border-right: 1px solid ${COLORS.gray_1};
    
    font-size: 15px;
    text-align: left;
  }

  th {
    font-weight: bold;
  }
  
  td {
    &:last-of-type {
      border-right: none;
    }
  }
`;
