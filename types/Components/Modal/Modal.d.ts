import React from 'react';
export declare type ModalProps = {
    children?: React.ReactNode;
};
export declare class Modal {
    static Provider: React.FC<{
        children?: any;
    }>;
    static open(): void;
    static close(): void;
    static use: () => {
        content: any;
        set: (cn: any) => void;
        close: () => void;
        open: () => void;
    } | null;
}
