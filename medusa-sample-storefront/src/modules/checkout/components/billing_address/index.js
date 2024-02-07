"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var input_1 = require("@modules/common/components/input");
var country_select_1 = require("../country-select");
var BillingAddress = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var cart = _a.cart, countryCode = _a.countryCode;
    var _l = (0, react_1.useState)({
        "billing_address.first_name": ((_b = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _b === void 0 ? void 0 : _b.first_name) || "",
        "billing_address.last_name": ((_c = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _c === void 0 ? void 0 : _c.last_name) || "",
        "billing_address.address_1": ((_d = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _d === void 0 ? void 0 : _d.address_1) || "",
        "billing_address.company": ((_e = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _e === void 0 ? void 0 : _e.company) || "",
        "billing_address.postal_code": ((_f = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _f === void 0 ? void 0 : _f.postal_code) || "",
        "billing_address.city": ((_g = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _g === void 0 ? void 0 : _g.city) || "",
        "billing_address.country_code": ((_h = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _h === void 0 ? void 0 : _h.country_code) || countryCode || "",
        "billing_address.province": ((_j = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _j === void 0 ? void 0 : _j.province) || "",
        "billing_address.phone": ((_k = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _k === void 0 ? void 0 : _k.phone) || "",
    }), formData = _l[0], setFormData = _l[1];
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        setFormData({
            "billing_address.first_name": ((_a = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _a === void 0 ? void 0 : _a.first_name) || "",
            "billing_address.last_name": ((_b = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _b === void 0 ? void 0 : _b.last_name) || "",
            "billing_address.address_1": ((_c = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _c === void 0 ? void 0 : _c.address_1) || "",
            "billing_address.company": ((_d = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _d === void 0 ? void 0 : _d.company) || "",
            "billing_address.postal_code": ((_e = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _e === void 0 ? void 0 : _e.postal_code) || "",
            "billing_address.city": ((_f = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _f === void 0 ? void 0 : _f.city) || "",
            "billing_address.country_code": ((_g = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _g === void 0 ? void 0 : _g.country_code) || "",
            "billing_address.province": ((_h = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _h === void 0 ? void 0 : _h.province) || "",
            "billing_address.phone": ((_j = cart === null || cart === void 0 ? void 0 : cart.billing_address) === null || _j === void 0 ? void 0 : _j.phone) || "",
        });
    }, [cart === null || cart === void 0 ? void 0 : cart.billing_address]);
    var handleChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    return (<>
      <div className="grid grid-cols-2 gap-4">
        <input_1.default label="First name" name="billing_address.first_name" autoComplete="given-name" value={formData["billing_address.first_name"]} onChange={handleChange} required/>
        <input_1.default label="Last name" name="billing_address.last_name" autoComplete="family-name" value={formData["billing_address.last_name"]} onChange={handleChange} required/>
        <input_1.default label="Address" name="billing_address.address_1" autoComplete="address-line1" value={formData["billing_address.address_1"]} onChange={handleChange} required/>
        <input_1.default label="Company" name="billing_address.company" value={formData["billing_address.company"]} onChange={handleChange} autoComplete="organization"/>
        <input_1.default label="Postal code" name="billing_address.postal_code" autoComplete="postal-code" value={formData["billing_address.postal_code"]} onChange={handleChange} required/>
        <input_1.default label="City" name="billing_address.city" autoComplete="address-level2" value={formData["billing_address.city"]} onChange={handleChange} required/>
        <country_select_1.default name="billing_address.country_code" autoComplete="country" region={cart === null || cart === void 0 ? void 0 : cart.region} value={formData["billing_address.country_code"]} onChange={handleChange} required/>
        <input_1.default label="State / Province" name="billing_address.province" autoComplete="address-level1" value={formData["billing_address.province"]} onChange={handleChange}/>
        <input_1.default label="Phone" name="billing_address.phone" autoComplete="tel" value={formData["billing_address.phone"]} onChange={handleChange}/>
      </div>
    </>);
};
exports.default = BillingAddress;
