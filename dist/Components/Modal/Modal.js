import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
var ModalContext = createContext(null);
var ModalConsumer = function (props) {
    var modalRef = useRef(null);
    var _a = useState(false), isOpen = _a[0], setOpen = _a[1];
    useEffect(function () {
        var listener = function (event) {
            var _a, _b;
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                (_b = (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByClassName('form')[0]) === null || _b === void 0 ? void 0 : _b.requestSubmit();
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
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.open = function () {
        document.dispatchEvent(new CustomEvent('openModal'));
    };
    Modal.close = function () {
        document.dispatchEvent(new CustomEvent('closeModal'));
    };
    Modal.Provider = ModalProvider;
    Modal.use = function () { return useContext(ModalContext); };
    return Modal;
}());
export { Modal };
//# sourceMappingURL=Modal.js.map