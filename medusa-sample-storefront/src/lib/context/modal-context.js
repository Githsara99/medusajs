"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = exports.ModalProvider = void 0;
var react_1 = require("react");
var ModalContext = (0, react_1.createContext)(null);
var ModalProvider = function (_a) {
    var children = _a.children, close = _a.close;
    return (<ModalContext.Provider value={{
            close: close,
        }}>
      {children}
    </ModalContext.Provider>);
};
exports.ModalProvider = ModalProvider;
var useModal = function () {
    var context = (0, react_1.useContext)(ModalContext);
    if (context === null) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
exports.useModal = useModal;
