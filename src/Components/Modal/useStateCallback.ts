import { useCallback, useEffect, useRef, useState } from 'react';
import { StateValue } from './types';

interface ISetState<T> {
    (value: StateValue<T>): Promise<T>;
}

interface UseStatePromise {
    <T>(initialValue: T): [T, ISetState<T>];
    <T = undefined>(initialValue?: T | undefined): [T | undefined, ISetState<T>];
}

export const useStatePromise: UseStatePromise = (initialValue = undefined) => {
    type S = typeof initialValue;

    const [state, setState] = useState(initialValue);
    const resolveRef = useRef<((value: S | PromiseLike<S> | undefined) => void) | undefined>(undefined);

    const set = useCallback((value: S) => {
        setState(value);

        return new Promise<S>((resolve) => {
            resolveRef.current = resolve;
        });
    }, [])

    useEffect(() => {
        if (!resolveRef.current) return;

        resolveRef.current(state);
        resolveRef.current = undefined;
    }, [state])

    return [state, set];
}