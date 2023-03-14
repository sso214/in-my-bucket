import React, {ButtonHTMLAttributes} from 'react';
import * as S from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

function Button({ children, style, ...rest }: Props) {
    return (
        <button css={S.Button} style={{...style}} {...rest}>
            {children}
        </button>
    )
}

export default Button;
