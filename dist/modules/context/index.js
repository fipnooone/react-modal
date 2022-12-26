import React from 'react';
var Context = React.createContext(null);
export var Provider = function (_a) {
    var children = _a.children, modal = _a.modal;
    return React.createElement(Context.Provider, { value: modal }, children);
};
export var useContext = function () {
    var modal = React.useContext(Context);
    if (!modal)
        throw new Error('Modal context/dialog usage ouside of modal hook');
    return modal;
};
//# sourceMappingURL=index.js.map