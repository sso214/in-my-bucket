import React, {InputHTMLAttributes} from 'react';
import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    line?: boolean;
    style?: React.CSSProperties;
}

function TextField({style, line, ...rest}: Props) {
    return (
        <input
            style={{...style}}
            css={[S.TextField, line && S.LineTextField]}
            {...rest} />
    )
}

export default TextField;
