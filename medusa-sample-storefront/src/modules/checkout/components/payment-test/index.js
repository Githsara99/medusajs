"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var PaymentTest = function (_a) {
    var className = _a.className;
    return (<ui_1.Badge color="orange" className={className}>
      <span className="font-semibold">Attention:</span> For testing purposes
      only.
    </ui_1.Badge>);
};
exports.default = PaymentTest;
