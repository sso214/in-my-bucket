import React from 'react';
import * as S from './styles';

interface Props {
    children?: React.ReactNode;
}

function List({children}: Props) {
    return (
        <ol css={S.List}>{children}</ol>
    );
}

export default List;
