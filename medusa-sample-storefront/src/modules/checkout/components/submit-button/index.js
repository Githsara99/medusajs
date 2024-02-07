"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitButton = void 0;
var ui_1 = require("@medusajs/ui");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
function SubmitButton(_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, className = _a.className;
    var pending = (0, react_dom_1.useFormStatus)().pending;
    return (<ui_1.Button size="large" className={className} type="submit" isLoading={pending} variant={variant}>
      {children}
    </ui_1.Button>);
}
exports.SubmitButton = SubmitButton;
