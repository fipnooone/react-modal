import { ModalStyles } from '../component/types';
import { Close, Set, SetOpen } from '../hook/types';

export interface ContextValue {
    set: Set;
    open: SetOpen;
    close: Close;
    isOpen: boolean;
    styles?: ModalStyles;
}

export interface ProviderProps {
    children?: React.ReactNode;
    modal: ContextValue;
}
