import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { ModalContentProps, ModalContext, ProviderProps, StateValue } from "./types";
import { useStatePromise } from "./useStateCallback";
import * as events from './events';
import styles from './styles.module.css';

const Context = React.createContext<ModalContext | null>(null);

const Provider: FC<ProviderProps> = ({ children }) => {
    const [content, setContent] = useStatePromise<ReactNode>();
    const [isOpen, setOpen] = useStatePromise(false);

    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            switch (event.code) {
                // case 'Enter':
                // case 'NumpadEnter':
                //     (modalRef.current?.getElementsByClassName('form')[0] as HTMLFormElement)?.requestSubmit();
                //     break;
                case 'Escape':
                    setOpen(false);
                    break;

            }
        };

        const handleOpenEvent = () => setOpen(true);
        const handleCloseEvent = () => setOpen(false);

        document.addEventListener('keydown', listener);

        document.addEventListener(events.names.close, handleOpenEvent);
        document.addEventListener(events.names.open, handleCloseEvent);

        return () => {
            document.removeEventListener(events.names.close, handleOpenEvent);
            document.removeEventListener(events.names.open, handleCloseEvent);
            document.removeEventListener('keydown', listener);
        };
    }, []);

    useEffect(() => {
        if (!isOpen) setContent(undefined);
    }, [isOpen])

    const set = (dialog?: ReactNode) => setContent(dialog);

    const open = (value: StateValue<boolean> = true) => setOpen((prev) => {
        if (typeof value === 'function') return value(prev);
        return value;
    });

    const close = () => setOpen(false);

    return (
        <Context.Provider value={{ current: content, close, open, set, isOpen }}>
            {children}
        </Context.Provider>
    );
}

const Component: FC<ModalContentProps> = ({ block, overlay, window }) => {
    const modal = Use();

    const handleClose = () => events.close();

    return (
        <div className={`modal ${styles.block}`} style={block}>
            <div className={`modal__overlay ${styles.overlay}`} onClick={handleClose} style={overlay} />
            <div className={`modal__window ${styles.window}`} style={window}>{modal?.current}</div>
        </div>
    );
}

const Use = () => React.useContext(Context);

export { Component, Provider, Use };