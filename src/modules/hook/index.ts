import { useCallbackState } from '@fipnooone/hooks';
import { ReactNode, useCallback, useEffect, useMemo } from 'react';

import { createModal } from '../component';
import { Close, Set, UseModal } from './types';

export const useModal: UseModal = (options) => {
    const [isOpen, setOpen] = useCallbackState(false);
    const [content, setContent] = useCallbackState<ReactNode>();

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

        document.addEventListener('keydown', listener);

        return () => {
            document.removeEventListener('keydown', listener);
        };
    }, []);

    const Modal = useMemo(() => {
        const newModal = createModal({ ...options, handleClose: close });

        newModal.defaultProps = {
            children: content,
            isOpen,
        };

        return newModal;
    }, [isOpen, content]);

    return [Modal, set, setOpen, close];
};
