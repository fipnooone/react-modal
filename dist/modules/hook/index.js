import { useCallbackState } from '@fipnooone/hooks';
import React from 'react';
import { useCallback, useEffect, useMemo } from 'react';
import { Provider } from '../context';
import { names } from '../events';
export var useModal = function (options) {
    var _a = useCallbackState(false), isOpen = _a[0], setOpen = _a[1];
    var _b = useCallbackState(), content = _b[0], setContent = _b[1];
    var close = useCallback(function (callback) {
        setOpen(false, callback);
        if (options && options.closeDelay) {
            setTimeout(function () {
                setContent(null);
            }, options.closeDelay);
        }
        else {
            setContent(null);
        }
    }, []);
    var __setState = useCallback(function (options, callback) {
        var _a = Array.isArray(options) && typeof options[1] === 'boolean' ? options : [options, true], newContent = _a[0], newOpen = _a[1];
        setContent(newContent, callback);
        setOpen(newOpen);
    }, []);
    var set = useCallback(function (contentNode, callback) { return __setState(typeof contentNode === 'function' ? contentNode(content, isOpen) : contentNode, callback); }, [isOpen, content, __setState]);
    useEffect(function () {
        var listener = function (event) {
            switch (event.code) {
                case 'Escape':
                    close();
                    break;
            }
        };
        var handleOpen = (function (event) { return setOpen(event.detail.open); });
        document.addEventListener('keydown', listener);
        document.addEventListener(names.open, handleOpen);
        return function () {
            document.removeEventListener('keydown', listener);
            document.removeEventListener(names.open, handleOpen);
        };
    }, []);
    var Modal = useMemo(function () { return React.createElement(Provider, { modal: { close: close, isOpen: isOpen, open: setOpen, set: set, styles: options } }, content); }, [isOpen, content]);
    return [Modal, { set: set, open: setOpen, close: close, isOpen: isOpen }];
};
//# sourceMappingURL=index.js.map