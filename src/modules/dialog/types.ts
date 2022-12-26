import { ReactNode } from 'react';

import { Close, Set, SetOpen } from '@/modules/hook/types';

export interface DialogProps {
    children?: ReactNode | (({ set, close, open }: { set: Set; close: Close; open: SetOpen }) => ReactNode);
}
