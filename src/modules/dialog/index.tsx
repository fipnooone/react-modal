import React from 'react';
import { FC, useMemo } from 'react';

import { useContext } from '../context';
import { DialogProps } from './types';

export const Dialog: FC<DialogProps> = ({ children }) => {
    const modal = useContext();

    const content = useMemo(() => {
        if (typeof children === 'function') return children(modal);

        return children;
    }, [children]);

    return <>{content}</>;
};
