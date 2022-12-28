import { StateValue } from '@fipnooone/hooks/types/types';
import { ReactNode } from 'react';
import { ModalProps, ModalStyles } from '../component/types';
export declare type Set = (contentNode: ReactNode | ((prevContent: ReactNode, prevOpen: boolean) => ReactNode | [ReactNode, boolean]), callback?: (content: ReactNode) => void) => void;
export declare type Close = (callback?: (isOpen: boolean) => void) => void;
export declare type SetOpen = (value: StateValue<boolean>, callback?: (isOpen: boolean) => void) => void;
export interface ModalControls {
    set: Set;
    open: SetOpen;
    close: Close;
    isOpen: boolean;
}
export declare type UseModal = (options?: ModalStyles) => [React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>, ModalControls];
