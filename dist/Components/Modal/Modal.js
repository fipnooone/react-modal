import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
var ModalContext = createContext(null);
var ModalConsumer = function () {
    var modalRef = useRef(null);
    var _a = useState(false), isOpen = _a[0], setOpen = _a[1];
    useEffect(function () {
        var listener = function (event) {
            var _a, _b;
            switch (event.code) {
                case 'Enter':
                case 'NumpadEnter':
                    (_b = (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByClassName('form')[0]) === null || _b === void 0 ? void 0 : _b.requestSubmit();
                    break;
                case 'Escape':
                    setOpen(false);
                    break;
            }
        };
        var handleOpenEvent = function () {
            setOpen(true);
        };
        var handleCloseEvent = function () {
            setOpen(false);
        };
        document.addEventListener('keydown', listener);
        document.addEventListener('openModal', handleOpenEvent);
        document.addEventListener('closeModal', handleCloseEvent);
        return function () {
            document.removeEventListener('openModal', handleOpenEvent);
            document.removeEventListener('closeModal', handleCloseEvent);
            document.removeEventListener('keydown', listener);
        };
    }, []);
    useEffect(function () {
        var _a, _b;
        if (isOpen)
            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.classList.add('open');
        else
            (_b = modalRef.current) === null || _b === void 0 ? void 0 : _b.classList.remove('open');
    }, [isOpen]);
    return (React.createElement(ModalContext.Consumer, null, function (value) { return (React.createElement("div", { className: "modal", ref: modalRef },
        React.createElement("div", { className: "modal__mib", onClick: function () { return setOpen(false); } }),
        React.createElement("div", { className: "modal__window" }, isOpen && (value === null || value === void 0 ? void 0 : value.content) ? value.content : React.createElement(React.Fragment, null)))); }));
};
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(null), content = _b[0], setContent = _b[1];
    var set = function (cn) {
        setContent(cn);
        Modal.open();
    };
    var close = Modal.close;
    var open = Modal.open;
    return (React.createElement(React.Fragment, null,
        React.createElement(ModalContext.Provider, { value: { content: content, set: set, close: close, open: open } },
            React.createElement(ModalConsumer, null),
            children)));
};
export var Modal = {
    Provider: ModalProvider,
    open: function () { return document.dispatchEvent(new CustomEvent('openModal')); },
    close: function () { return document.dispatchEvent(new CustomEvent('closeModal')); },
    use: function () { return useContext(ModalContext); }
};
// export class Modal {
//     public static Provider = ModalProvider;
//     public static open() {
//         document.dispatchEvent(new CustomEvent('openModal'));
//     }
//     public static close() {
//         document.dispatchEvent(new CustomEvent('closeModal'));
//     }
//     public static use = () => useContext(ModalContext);
// }
//# sourceMappingURL=Modal.js.map