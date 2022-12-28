import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from '../context';
import styles from './styles.module.css';
var getRoot = function () {
    var root = document.getElementById('root');
    if (root)
        return root;
    return document.body;
};
var getBlock = function () {
    var root = getRoot();
    var block = document.getElementById('modals');
    if (block)
        return block;
    var newBlock = document.createElement('div');
    newBlock.id = 'modals';
    root.appendChild(newBlock);
    return newBlock;
};
export var createModal = function (_a) {
    var block = _a.block, overlay = _a.overlay, window = _a.window, close = _a.close, open = _a.open, set = _a.set;
    return React.forwardRef(function (_a, ref) {
        var children = _a.children, isOpen = _a.isOpen;
        var handleClose = function () { return close(); };
        return ReactDOM.createPortal(React.createElement("div", { className: "modal ".concat(styles.block) + (isOpen ? " ".concat(styles.open, " open") : ''), style: block, ref: ref },
            React.createElement("div", { className: "modal__overlay ".concat(styles.overlay), onClick: handleClose, style: overlay }),
            React.createElement("div", { className: "modal__window ".concat(styles.window), style: window },
                React.createElement(Provider, { modal: { close: close, open: open, set: set } }, children))), getBlock());
    });
};
//# sourceMappingURL=index.js.map