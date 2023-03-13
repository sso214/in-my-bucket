import React from 'react';
import {APP_NAME} from "@/constants/APP_INFO";
import * as S from './styles';

interface Props {
    leftCont?: React.ReactNode;
    centerCont?: React.ReactNode;
    rightCont?: React.ReactNode;
}

function Header({rightCont, centerCont, leftCont}: Props) {
    return (
        <header css={S.Header}>
            {leftCont && (<div css={S.HeaderLeft}>{leftCont}</div>)}
            {centerCont && (<div css={S.HeaderCenter}>{centerCont}</div>)}
            {rightCont && (<div css={S.HeaderRight}>{rightCont}</div>)}
        </header>
    )
}

export default Header;
