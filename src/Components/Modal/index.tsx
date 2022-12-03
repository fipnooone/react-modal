import * as context from './context';
import * as events from './events';


type ModalL = typeof context.Component & {
    Close: typeof events.close;
    Open: typeof events.open;
    Provider: typeof context.Provider;
    Use: typeof context.Use;
}

export const Modal = context.Component as ModalL;

Modal.Close = events.close;
Modal.Open = events.open;
Modal.Provider = context.Provider;
Modal.Use = context.Use;