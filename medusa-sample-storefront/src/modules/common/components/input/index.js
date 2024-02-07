"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var react_1 = require("react");
var eye_1 = require("@modules/common/icons/eye");
var eye_off_1 = require("@modules/common/icons/eye-off");
var Input = react_1.default.forwardRef(function (_a, ref) {
    var type = _a.type, name = _a.name, label = _a.label, touched = _a.touched, required = _a.required, topLabel = _a.topLabel, props = __rest(_a, ["type", "name", "label", "touched", "required", "topLabel"]);
    var inputRef = react_1.default.useRef(null);
    var _b = (0, react_1.useState)(false), showPassword = _b[0], setShowPassword = _b[1];
    var _c = (0, react_1.useState)(type), inputType = _c[0], setInputType = _c[1];
    (0, react_1.useEffect)(function () {
        if (type === "password" && showPassword) {
            setInputType("text");
        }
        if (type === "password" && !showPassword) {
            setInputType("password");
        }
    }, [type, showPassword]);
    (0, react_1.useImperativeHandle)(ref, function () { return inputRef.current; });
    return (<div className="flex flex-col w-full">
        {topLabel && (<ui_1.Label className="mb-2 txt-compact-medium-plus">{topLabel}</ui_1.Label>)}
        <div className="flex relative z-0 w-full txt-compact-medium">
          <input type={inputType} name={name} placeholder=" " required={required} className="pt-4 pb-1 block w-full h-11 px-4 mt-0 bg-ui-bg-field border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover" {...props} ref={inputRef}/>
          <label htmlFor={name} onClick={function () { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }} className="flex items-center justify-center mx-3 px-1 transition-all absolute duration-300 top-3 -z-1 origin-0 text-ui-fg-subtle">
            {label}
            {required && <span className="text-rose-500">*</span>}
          </label>
          {type === "password" && (<button type="button" onClick={function () { return setShowPassword(!showPassword); }} className="text-ui-fg-subtle px-4 focus:outline-none transition-all duration-150 outline-none focus:text-ui-fg-base absolute right-0 top-3">
              {showPassword ? <eye_1.default /> : <eye_off_1.default />}
            </button>)}
        </div>
      </div>);
});
Input.displayName = "Input";
exports.default = Input;
