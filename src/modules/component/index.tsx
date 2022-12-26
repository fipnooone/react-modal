import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from '../context';
import styles from './styles.module.css';
import { ModalOptions, ModalProps } from './types';

export const createModal = ({ block, overlay, window, close, open, set }: ModalOptions) =>
    React.forwardRef<HTMLDivElement, ModalProps>(({ children, isOpen }, ref) => {
        const getRoot = () => {
            const root = document.getElementById('root');

            if (root) return root;

            return document.body;
        };

        const handleClose = () => close();

        return ReactDOM.createPortal(
            <div className={`modal ${styles.block}` + (isOpen ? ` ${styles.open}` : '')} style={block} ref={ref}>
                <div className={`modal__overlay ${styles.overlay}`} onClick={handleClose} style={overlay} />
                <div className={`modal__window ${styles.window}`} style={window}>
                    <Provider modal={{ close, open, set }}>{children}</Provider>
                </div>
            </div>,
            getRoot()
        );
    });
