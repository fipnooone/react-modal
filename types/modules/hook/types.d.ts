import { StateValue } from '@fipnooone/hooks/types/types';
import { ReactNode } from 'react';
import { ModalStyles } from '../component/types';
export declare type Callback = (content: ReactNode) => void;
export declare type StateNode = [ReactNode, boolean] | ReactNode;
export declare type Set = (contentNode: StateNode | ((prevContent: ReactNode, prevOpen: boolean) => StateNode), callback?: Callback) => void;
export declare type Close = (callback?: (isOpen: boolean) => void) => void;
export declare type SetOpen = (value: StateValue<boolean>, callback?: (isOpen: boolean) => void) => void;
export interface ModalControls {
    set: Set;
    open: SetOpen;
    close: Close;
    isOpen: boolean;
}
export declare type UseModal = (options?: ModalStyles) => [ReactNode, ModalControls];
