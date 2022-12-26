/// <reference types="react" />
import { Close, Set, SetOpen } from '../hook/types';
export interface ContextValue {
    set: Set;
    open: SetOpen;
    close: Close;
}
export interface ProviderProps {
    children?: React.ReactNode;
    modal: ContextValue;
}
