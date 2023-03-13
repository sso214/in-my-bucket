import React, {InputHTMLAttributes} from 'react';
import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    style?: React.CSSProperties;
}

function TextField({style, ...rest}: Props) {
    return (
        <input css={S.TextField} style={{...style}} {...rest} />
    )
}

export default TextField;
