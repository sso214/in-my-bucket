import React from 'react';
import * as S from './styles';

interface Props {
    children?: React.ReactNode;
    col?: string[];
}

function DataTable({ children, col }: Props) {
    return (
        <table css={S.DataTable}>
            {col && (
                <colgroup>
                    {col.map((v, i) => (
                        <col key={i} width={v} />
                    ))}
                </colgroup>
            )}
            <tbody>
            {children}
            </tbody>
        </table>
    )
}

export default DataTable;
