import React from 'react';
import { useMemo } from 'react';
import { useContext } from '../context';
export var Dialog = function (_a) {
    var children = _a.children;
    var modal = useContext();
    var content = useMemo(function () {
        if (typeof children === 'function')
            return children(modal);
        return children;
    }, [children]);
    return React.createElement(React.Fragment, null, content);
};
//# sourceMappingURL=index.js.map