import React, { ReactNode } from "react";

export interface ModalContext {
    current: ReactNode | undefined;
    isOpen: boolean;
    set: (dialog?: ReactNode) => Promise<ReactNode>;
    open: (value?: boolean) => Promise<boolean>;
    close: () => Promise<boolean>;
}

export interface ProviderProps {
    children?: ReactNode;
}

export type StateValue<T> = T | ((value: T) => T); 

export interface ModalContentProps {
    block?: React.CSSProperties;
    window?: React.CSSProperties;
    overlay?: React.CSSProperties;
}