import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';
export var createModal = function (_a) {
    var block = _a.block, overlay = _a.overlay, window = _a.window, handleClose = _a.handleClose;
    return React.forwardRef(function (_a, ref) {
        var children = _a.children, isOpen = _a.isOpen;
        var getRoot = function () {
            var root = document.getElementById('root');
            if (root)
                return root;
            return document.body;
        };
        return ReactDOM.createPortal(React.createElement("div", { className: "modal ".concat(styles.block) + (isOpen ? " ".concat(styles.open) : ''), style: block, ref: ref },
            React.createElement("div", { className: "modal__overlay ".concat(styles.overlay), onClick: handleClose, style: overlay }),
            React.createElement("div", { className: "modal__window ".concat(styles.window), style: window }, children)), getRoot());
    });
};
//# sourceMappingURL=index.js.map