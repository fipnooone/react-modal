import { useCallbackState } from '@fipnooone/hooks';
import React from 'react';
import { ReactNode, useCallback, useEffect, useMemo } from 'react';

import { Provider } from '../context';
import { ModalOpenEvent, names } from '../events';
import { Callback, Close, Set, StateNode, UseModal } from './types';

export const useModal: UseModal = (options) => {
    const [isOpen, setOpen] = useCallbackState(false);
    const [content, setContent] = useCallbackState<ReactNode>();

    const close: Close = (callback) => setOpen(false, callback);

    const __setState = (options: StateNode, callback: Callback | undefined) => {
        const [newContent, newOpen] = Array.isArray(options) && typeof options[1] === 'boolean' ? options : [options, true];

        setContent(newContent, callback);
        setOpen(newOpen);
    };

    const set: Set = useCallback(
        (contentNode, callback) => __setState(typeof contentNode === 'function' ? contentNode(content, isOpen) : contentNode, callback),
        [isOpen, content]
    );

    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            switch (event.code) {
                case 'Escape':
                    close();
                    break;
            }
        };

        const handleOpen = ((event: ModalOpenEvent) => setOpen(event.detail.open)) as EventListener;

        document.addEventListener('keydown', listener);
        document.addEventListener(names.open, handleOpen);

        return () => {
            document.removeEventListener('keydown', listener);
            document.removeEventListener(names.open, handleOpen);
        };
    }, []);

    const Modal = useMemo(() => <Provider modal={{ close, isOpen, open: setOpen, set, styles: options }} />, [isOpen, content]);

    return [Modal, { set, open: setOpen, close, isOpen }];
};
