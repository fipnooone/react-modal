export declare type ModalOpenEvent = CustomEvent<{
    open: boolean;
}>;
export declare const names: {
    open: string;
};
export declare const events: {
    close: () => boolean;
    open: (value?: boolean) => boolean;
};
