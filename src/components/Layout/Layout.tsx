import React from 'react';
import * as S from './styles';

interface Props {
    children?: React.ReactNode;
    nav?: boolean;
}

function Layout({children}: Props) {
    return (
        <section css={S.Layout}>
            {children}
        </section>
    )
}

export default Layout;
