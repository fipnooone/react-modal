import React from 'react';
import { useContext } from '../context';
import S from './styles.module.css';
export var Modal = React.forwardRef(function (_a, ref) {
    var children = _a.children;
    var _b = useContext(), close = _b.close, isOpen = _b.isOpen, _c = _b.styles, styles = _c === void 0 ? {} : _c;
    var handleClose = function () { return close(); };
    return (React.createElement("div", { className: "modal ".concat(S.block) + (isOpen ? " ".concat(S.open, " open") : ''), style: styles.block, ref: ref },
        React.createElement("div", { className: "modal__overlay ".concat(S.overlay), onClick: handleClose, style: styles.overlay }),
        React.createElement("div", { className: "modal__window ".concat(S.window), style: styles.window }, children)));
});
//# sourceMappingURL=index.js.map