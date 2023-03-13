import React, {InputHTMLAttributes} from 'react';
import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'checkbox' | 'radio';
    disabled?: boolean;
    style?: React.CSSProperties;
}

function Checkbox({style, type = 'checkbox', onClick, disabled, ...rest}: Props) {
    const isRadio = type === 'radio';
    return (
        <label css={S.Wrap}>
            <input
                type={type || 'checkbox'}
                disabled={disabled}
                css={[S.Input, isRadio ? S.Radio : S.Checkbox]}
                onClick={(e) => {
                    e?.stopPropagation();
                    onClick && onClick(e);
                }}
                {...rest}
            />
            <span css={S.Mark}/>
        </label>
    )
}

export default Checkbox;
