import React, { FC } from 'react';

import { ContextValue, ProviderProps } from './types';

const Context = React.createContext<ContextValue | null>(null);

export const Provider: FC<ProviderProps> = ({ children, modal }) => <Context.Provider value={modal}>{children}</Context.Provider>;

export const useContext = () => {
    const modal = React.useContext(Context);

    if (!modal) throw new Error('Modal context/dialog usage ouside of modal hook');

    return modal;
};
