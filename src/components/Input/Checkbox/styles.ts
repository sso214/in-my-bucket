import { css } from '@emotion/react';


export const Wrap = css`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const Input = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  & + span:before {
    content: '';
    width: 1.5rem;
    height: 1.5rem;

    display: inline-block;
    border: 2px solid #808080;
  }

  &:disabled {
    cursor: default;

    & + span:before {
      background: #EBEBEB;
      border-color: #E0E0E0;
    }
  }
`;

export const Checkbox = css`
  & + span:before {
    border-radius: 4px;
  }

  &:checked {
    & + span:before {
      background-color: #292929;
      background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 11L11 17L20 8" stroke="white" stroke-width="3" stroke-linecap="round" /></svg>');
      background-size: 1rem;
      background-repeat: no-repeat;
      background-position: center;
      border-color: #1F1F1F;
    }
  }

  &:disabled {
    &:checked + span:before {
      background-color: #EBEBEB;
      border-color: #E0E0E0;
    }
  }
`;

export const Radio = css`
  & + span:before {
    border-radius: 50%;
  }

  &:checked {
    & + span:before {
      border-width: 7px;
      border-color: #1F1F1F;
      background: none;
    }
  }

  &:disabled {
    &:checked + span:before {
      border-color: #EBEBEB;
    }
    &:checked + span:after {
      position: absolute;
      top: 0;
      left: 0;

      content: '';
      width: 100%;
      height: 100%;

      display: inline-block;
      border-radius: 50%;
      border: 2px solid #E0E0E0;
    }
  }
`;

export const Mark = css`
  display: flex;
  align-items: center;
  flex: none;
`;
