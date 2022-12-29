import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from '../component';
import { getBlock } from '../dom';
var Context = React.createContext(null);
export var Provider = function (_a) {
    var modal = _a.modal, children = _a.children;
    return ReactDOM.createPortal(React.createElement(Context.Provider, { value: modal },
        React.createElement(Modal, null, children)), getBlock());
};
export var useContext = function () {
    var modal = React.useContext(Context);
    if (!modal)
        throw new Error('Modal context/dialog usage ouside of modal hook');
    return modal;
};
//# sourceMappingURL=index.js.map