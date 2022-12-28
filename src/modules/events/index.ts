const fire = (name: string, value: boolean) => document.dispatchEvent(new CustomEvent(name, { detail: { open: value } }));

export type ModalOpenEvent = CustomEvent<{ open: boolean }>;

const name = 'f-modal-event:';

export const names = {
    open: `${name}${close}`,
};

export const events = {
    close: () => fire(names.open, false),
    open: (value = true) => fire(names.open, value),
};
