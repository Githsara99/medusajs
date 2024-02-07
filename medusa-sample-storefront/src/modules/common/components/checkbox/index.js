"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var react_1 = require("react");
var CheckboxWithLabel = function (_a) {
    var _b = _a.checked, checked = _b === void 0 ? true : _b, onChange = _a.onChange, label = _a.label, name = _a.name;
    return (<div className="flex items-center space-x-2 ">
      <ui_1.Checkbox className="text-base-regular flex items-center gap-x-2" id="checkbox" role="checkbox" type="button" checked={checked} aria-checked={checked} onClick={onChange} name={name}/>
      <ui_1.Label htmlFor="checkbox" className="!transform-none !txt-medium" size="large">
        {label}
      </ui_1.Label>
    </div>);
};
exports.default = CheckboxWithLabel;
