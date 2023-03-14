import { ReactNode } from 'react';

import { ContextValue } from '../context/types';

export interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
}

export type ModalOptions = ModalStyles & ModalLogic;

export interface ModalStyles {
    block?: React.CSSProperties;
    window?: React.CSSProperties;
    overlay?: React.CSSProperties;
    closeDelay?: number;
}

export type ModalLogic = ContextValue;
