import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.css';
import { ModalOptions, ModalProps } from './types';

export const createModal = ({ block, overlay, window, handleClose }: ModalOptions) =>
    React.forwardRef<HTMLDivElement, ModalProps>(({ children, isOpen }, ref) => {
        const getRoot = () => {
            const root = document.getElementById('root');

            if (root) return root;

            return document.body;
        };

        return ReactDOM.createPortal(
            <div className={`modal ${styles.block}` + (isOpen ? ` ${styles.open}` : '')} style={block} ref={ref}>
                <div className={`modal__overlay ${styles.overlay}`} onClick={handleClose} style={overlay} />
                <div className={`modal__window ${styles.window}`} style={window}>
                    {children}
                </div>
            </div>,
            getRoot()
        );
    });
