import React from 'react';
import * as S from './styles';

interface Props {
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

function Item({style, children}: Props) {
    return (
        <li css={S.Item} style={{...style}}>
            {children}
        </li>
    )
}

export default Item;
