import React from 'react';
import {APP_NAME} from "@/constants/APP_INFO";
import * as S from './styles';

interface Props {
    logo?: boolean;
    leftCont?: React.ReactNode;
    rightCont?: React.ReactNode;
}

function Header({logo, rightCont, leftCont}: Props) {
    return (
        <header css={S.Header}>
            {leftCont}
            {logo && (
                <a href='#'>
                    <img src='#' alt={APP_NAME}/>
                </a>)}
            {rightCont && (
                <div css={S.HeaderRight}>{rightCont}</div>
            )}
        </header>
    )
}

export default Header;
