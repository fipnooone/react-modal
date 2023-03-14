import React, { useCallback } from 'react';

import { useContext } from '../context';
import S from './styles.module.css';
import { ModalProps } from './types';

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(({ children }, ref) => {
    const { close, isOpen, styles = {} } = useContext();

    const handleClose = useCallback(() => close(), [close]);

    return (
        <div className={`modal ${S.block}` + (isOpen ? ` ${S.open} open` : '')} style={styles.block} ref={ref}>
            <div className={`modal__overlay ${S.overlay}`} onClick={handleClose} style={styles.overlay} />
            <div className={`modal__window ${S.window}`} style={styles.window}>
                {children}
            </div>
        </div>
    );
});
