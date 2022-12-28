import { useCallbackState } from '@fipnooone/hooks';
import { ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';

import { createModal } from '../component';
import { ModalOpenEvent, names } from '../events';
import { Close, Set, UseModal } from './types';

export const useModal: UseModal = (options) => {
    const [isOpen, setOpen] = useCallbackState(false);
    const [content, setContent] = useCallbackState<ReactNode>();
    const modalRef = useRef<HTMLDivElement>(null);

    const close: Close = (callback) => setOpen(false, callback);

    const set: Set = useCallback(
        (contentNode, callback) => {
            if (typeof contentNode === 'function') {
                const result = contentNode(content, isOpen);

                const [newContent, newOpen] = Array.isArray(result) ? result : [result, true];

                setContent(newContent, callback);
                setOpen(newOpen);

                return;
            }

            setContent(contentNode, callback);
            setOpen(true);
        },
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

    const Modal = useMemo(() => {
        const newModal = createModal({ ...options, close, open: setOpen, set });

        newModal.defaultProps = {
            children: content,
            isOpen,
            ref: modalRef,
        };

        return newModal;
    }, [isOpen, content]);

    return [Modal, { set, open: setOpen, close, isOpen }];
};
