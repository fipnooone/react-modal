import { ReactNode } from 'react';
export interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
}
export declare type ModalOptions = ModalStyles & ModalLogic;
export interface ModalStyles {
    block?: React.CSSProperties;
    window?: React.CSSProperties;
    overlay?: React.CSSProperties;
}
export interface ModalLogic {
    handleClose: () => void;
}
