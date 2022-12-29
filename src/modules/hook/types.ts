import { StateValue } from '@fipnooone/hooks/types/types';
import { ReactNode } from 'react';

import { ModalStyles } from '../component/types';

export type Callback = (content: ReactNode) => void;
export type StateNode = [ReactNode, boolean] | ReactNode;

export type Set = (contentNode: StateNode | ((prevContent: ReactNode, prevOpen: boolean) => StateNode), callback?: Callback) => void;

export type Close = (callback?: (isOpen: boolean) => void) => void;

export type SetOpen = (value: StateValue<boolean>, callback?: (isOpen: boolean) => void) => void;

export interface ModalControls {
    set: Set;
    open: SetOpen;
    close: Close;
    isOpen: boolean;
}

export type UseModal = (options?: ModalStyles) => [ReactNode, ModalControls];
