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
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var react_1 = require("react");
var NativeSelect = (0, react_1.forwardRef)(function (_a, ref) {
    var _b;
    var _c = _a.placeholder, placeholder = _c === void 0 ? "Select..." : _c, defaultValue = _a.defaultValue, className = _a.className, children = _a.children, props = __rest(_a, ["placeholder", "defaultValue", "className", "children"]);
    var innerRef = (0, react_1.useRef)(null);
    var _d = (0, react_1.useState)(false), isPlaceholder = _d[0], setIsPlaceholder = _d[1];
    (0, react_1.useImperativeHandle)(ref, function () { return innerRef.current; });
    (0, react_1.useEffect)(function () {
        if (innerRef.current && innerRef.current.value === "") {
            setIsPlaceholder(true);
        }
        else {
            setIsPlaceholder(false);
        }
    }, [(_b = innerRef.current) === null || _b === void 0 ? void 0 : _b.value]);
    return (<div>
        <div onFocus={function () { var _a; return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }} onBlur={function () { var _a; return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur(); }} className={(0, ui_1.clx)("relative flex items-center text-base-regular border border-ui-border-base bg-ui-bg-subtle rounded-md hover:bg-ui-bg-field-hover", className, {
            "text-ui-fg-muted": isPlaceholder,
        })}>
          <select ref={innerRef} defaultValue={defaultValue} {...props} className="appearance-none flex-1 bg-transparent border-none px-4 py-2.5 transition-colors duration-150 outline-none ">
            <option disabled value="">
              {placeholder}
            </option>
            {children}
          </select>
          <span className="absolute right-4 inset-y-0 flex items-center pointer-events-none ">
            <icons_1.ChevronUpDown />
          </span>
        </div>
      </div>);
});
NativeSelect.displayName = "NativeSelect";
exports.default = NativeSelect;
