import React from 'react';
import { jsx } from "@emotion/react";

interface Props {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

function Title({as = 'h1', style, children}: Props) {
    const typeStyle = {
        h1: { fontSize: '30px', fontWeight:'bold' },
        h2: { fontSize: '30px', fontWeight:'bold' },
        h3: { fontSize: '30px', fontWeight:'bold' },
        h4: { fontSize: '30px', fontWeight:'bold' },
        h5: { fontSize: '15px', fontWeight:'bold', marginBottom: '10px' },
        h6: { fontSize: '30px', fontWeight:'bold' },
    }

    return jsx(as, {
        style: {...typeStyle[as], ...style},
        children,
    })
}

export default Title;
