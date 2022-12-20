import React from 'react';
import { ModalOptions, ModalProps } from './types';
export declare const createModal: ({ block, overlay, window, handleClose }: ModalOptions) => React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
