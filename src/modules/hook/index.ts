import { useCallbackState } from '@fipnooone/hooks';
import { ReactNode, useCallback, useEffect, useMemo } from 'react';

import { createModal } from '../component';
import { ModalStyles } from '../component/types';

export const useModal = (options: ModalStyles) => {
    const [isOpen, setOpen] = useCallbackState(false);
    const [content, setContent] = useCallbackState<ReactNode>();

    const close = () => setOpen(false);

    const set = useCallback(
        (contentNode: ReactNode | ((prevContent: ReactNode, prevOpen: boolean) => ReactNode | [ReactNode, boolean])) => {
            if (typeof contentNode === 'function') {
                const result = contentNode(content, isOpen);

                const [newContent, newOpen] = Array.isArray(result) ? result : [result, true];

                setContent(newContent);
                setOpen(newOpen);

                return;
            }

            setContent(contentNode);
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
