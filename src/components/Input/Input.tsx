import React, {InputHTMLAttributes} from 'react';
import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    style?: React.CSSProperties;
}

function Input({style, ...rest}: Props) {
    return (
        <input css={S.Input} style={{...style}} {...rest} />
    )
}

export default Input;
