var fire = function (name, value) { return document.dispatchEvent(new CustomEvent("f-modal-event", { detail: { open: value } })); };
var name = 'f-modal-event:';
export var names = {
    open: "".concat(name).concat(close),
};
export var events = {
    close: function () { return fire(names.open, false); },
    open: function (value) {
        if (value === void 0) { value = true; }
        return fire(names.open, value);
    },
};
//# sourceMappingURL=index.js.map