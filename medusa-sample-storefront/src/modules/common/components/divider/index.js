"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var Divider = function (_a) {
    var className = _a.className;
    return (<div className={(0, ui_1.clx)("h-px w-full border-b border-gray-200 mt-1", className)}/>);
};
exports.default = Divider;
