import { ReactNode } from 'react';
import { ContextValue } from '../context/types';
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
export declare type ModalLogic = ContextValue;
