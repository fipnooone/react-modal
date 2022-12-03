const eventName = 'modal-event';

const names = {
    close: `${eventName}-close`,
    open: `${eventName}-open`,
}

const close = () => document.dispatchEvent(new Event(names.close));
const open = () => document.dispatchEvent(new Event(names.open));

export { close, open, names };