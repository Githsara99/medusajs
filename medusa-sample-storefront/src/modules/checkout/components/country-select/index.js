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
var react_1 = require("react");
var native_select_1 = require("@modules/common/components/native-select");
var CountrySelect = (0, react_1.forwardRef)(function (_a, ref) {
    var _b = _a.placeholder, placeholder = _b === void 0 ? "Country" : _b, region = _a.region, defaultValue = _a.defaultValue, props = __rest(_a, ["placeholder", "region", "defaultValue"]);
    var innerRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, function () { return innerRef.current; });
    var countryOptions = (0, react_1.useMemo)(function () {
        if (!region) {
            return [];
        }
        return region.countries.map(function (country) { return ({
            value: country.iso_2,
            label: country.display_name,
        }); });
    }, [region]);
    return (<native_select_1.default ref={innerRef} placeholder={placeholder} defaultValue={defaultValue} {...props}>
      {countryOptions.map(function (_a, index) {
            var value = _a.value, label = _a.label;
            return (<option key={index} value={value}>
          {label}
        </option>);
        })}
    </native_select_1.default>);
});
CountrySelect.displayName = "CountrySelect";
exports.default = CountrySelect;
