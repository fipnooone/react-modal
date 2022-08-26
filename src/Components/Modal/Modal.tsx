import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export type ModalProps = {
    children?: React.ReactNode;
};

const ModalContext = createContext<{ content: React.ReactNode; set: (cn: React.ReactNode) => void; close: () => void; open: () => void } | null>(null);

const ModalConsumer: React.FC<ModalProps> = (props) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                (modalRef.current?.getElementsByClassName('form')[0] as HTMLFormElement)?.requestSubmit();
            }
        };

        const handleOpenEvent = () => {
            setOpen(true);
        };
        const handleCloseEvent = () => {
            setOpen(false);
        };

        document.addEventListener('keydown', listener);

        document.addEventListener('openModal', handleOpenEvent);
        document.addEventListener('closeModal', handleCloseEvent);

        return () => {
            document.removeEventListener('openModal', handleOpenEvent);
            document.removeEventListener('closeModal', handleCloseEvent);
            document.removeEventListener('keydown', listener);
        };
    }, []);

    useEffect(() => {
        if (isOpen) modalRef.current?.classList.add('open');
        else modalRef.current?.classList.remove('open');
    }, [isOpen]);

    return (
        <ModalContext.Consumer>
            {(value) => (
                <div className="modal" ref={modalRef}>
                    <div className="modal__mib" onClick={() => setOpen(false)} />
                    <div className="modal__window">{isOpen && value?.content ? value.content : <></>}</div>
                </div>
            )}
        </ModalContext.Consumer>
    );
};

const ModalProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [content, setContent] = useState<React.ReactNode | null>(null);

    const set = (cn: React.ReactNode) => {
        setContent(cn);
        Modal.open();
    };

    const close = Modal.close;

    const open = Modal.open;

    return (
        <>
            <ModalContext.Provider value={{ content, set, close, open }}>
                <ModalConsumer />
                {children}
            </ModalContext.Provider>
        </>
    );
};

export class Modal {
    public static Provider = ModalProvider;

    public static open() {
        document.dispatchEvent(new CustomEvent('openModal'));
    }
    public static close() {
        document.dispatchEvent(new CustomEvent('closeModal'));
    }

    public static use = () => useContext(ModalContext);
}

