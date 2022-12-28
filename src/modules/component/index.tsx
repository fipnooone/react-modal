import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from '../context';
import styles from './styles.module.css';
import { ModalOptions, ModalProps } from './types';

const getRoot = () => {
    const root = document.getElementById('root');

    if (root) return root;

    return document.body;
};

const getBlock = () => {
    const root = getRoot();

    const block = document.getElementById('modals');

    if (block) return block;

    const newBlock = document.createElement('div');
    newBlock.id = 'modals';

    root.appendChild(newBlock);

    return newBlock;
};

export const createModal = ({ block, overlay, window, close, open, set }: ModalOptions) =>
    React.forwardRef<HTMLDivElement, ModalProps>(({ children, isOpen }, ref) => {
        const handleClose = () => close();

        return ReactDOM.createPortal(
            <div className={`modal ${styles.block}` + (isOpen ? ` ${styles.open} open` : '')} style={block} ref={ref}>
                <div className={`modal__overlay ${styles.overlay}`} onClick={handleClose} style={overlay} />
                <div className={`modal__window ${styles.window}`} style={window}>
                    <Provider modal={{ close, open, set }}>{children}</Provider>
                </div>
            </div>,
            getBlock()
        );
    });
