import React from 'react';
export declare const Modal: {
    Provider: React.FC<{
        children?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    }>;
    open: () => boolean;
    close: () => boolean;
    use: () => {
        content: React.ReactElement | null;
        set: (cn: React.ReactElement) => void;
        close: () => void;
        open: () => void;
    } | null;
};
