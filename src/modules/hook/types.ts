import { StateValue } from '@fipnooone/hooks/types/types';
import { ReactNode } from 'react';

import { ModalProps, ModalStyles } from '../component/types';

export type Set = (
    contentNode: ReactNode | ((prevContent: ReactNode, prevOpen: boolean) => ReactNode | [ReactNode, boolean]),
    callback?: (content: ReactNode) => void
) => void;

export type Close = (callback?: (isOpen: boolean) => void) => void;

export type SetOpen = (value: StateValue<boolean>, callback?: (isOpen: boolean) => void) => void;

export type UseModal = (options: ModalStyles) => [React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>, Set, SetOpen, Close];
