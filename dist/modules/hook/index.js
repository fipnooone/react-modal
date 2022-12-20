var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useCallbackState } from '@fipnooone/hooks';
import { useCallback, useEffect, useMemo } from 'react';
import { createModal } from '../component';
export var useModal = function (options) {
    var _a = useCallbackState(false), isOpen = _a[0], setOpen = _a[1];
    var _b = useCallbackState(), content = _b[0], setContent = _b[1];
    var close = function (callback) { return setOpen(false, callback); };
    var set = useCallback(function (contentNode, callback) {
        if (typeof contentNode === 'function') {
            var result = contentNode(content, isOpen);
            var _a = Array.isArray(result) ? result : [result, true], newContent = _a[0], newOpen = _a[1];
            setContent(newContent, callback);
            setOpen(newOpen);
            return;
        }
        setContent(contentNode, callback);
        setOpen(true);
    }, [isOpen, content]);
    useEffect(function () {
        var listener = function (event) {
            switch (event.code) {
                case 'Escape':
                    close();
                    break;
            }
        };
        document.addEventListener('keydown', listener);
        return function () {
            document.removeEventListener('keydown', listener);
        };
    }, []);
    var Modal = useMemo(function () {
        var newModal = createModal(__assign(__assign({}, options), { handleClose: close }));
        newModal.defaultProps = {
            children: content,
            isOpen: isOpen,
        };
        return newModal;
    }, [isOpen, content]);
    return [Modal, set, setOpen, close];
};
//# sourceMappingURL=index.js.map