import { ReactNode } from 'react';
import { ModalStyles } from '../component/types';
export declare const useModal: (options: ModalStyles) => (import("react").ForwardRefExoticComponent<import("../component/types").ModalProps & import("react").RefAttributes<HTMLDivElement>> | import("@fipnooone/hooks/types/useState/callback/types").ISetCallbackValue<boolean> | ((contentNode: ReactNode | ((prevContent: ReactNode, prevOpen: boolean) => ReactNode | [ReactNode, boolean])) => void))[];
