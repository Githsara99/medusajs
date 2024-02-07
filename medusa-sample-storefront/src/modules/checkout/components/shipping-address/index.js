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
var checkbox_1 = require("@modules/common/components/checkbox");
var input_1 = require("@modules/common/components/input");
var address_select_1 = require("../address-select");
var country_select_1 = require("../country-select");
var ui_1 = require("@medusajs/ui");
var ShippingAddress = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var customer = _a.customer, cart = _a.cart, checked = _a.checked, onChange = _a.onChange, countryCode = _a.countryCode;
    var _l = (0, react_1.useState)({
        "shipping_address.first_name": ((_b = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _b === void 0 ? void 0 : _b.first_name) || "",
        "shipping_address.last_name": ((_c = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _c === void 0 ? void 0 : _c.last_name) || "",
        "shipping_address.address_1": ((_d = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _d === void 0 ? void 0 : _d.address_1) || "",
        "shipping_address.company": ((_e = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _e === void 0 ? void 0 : _e.company) || "",
        "shipping_address.postal_code": ((_f = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _f === void 0 ? void 0 : _f.postal_code) || "",
        "shipping_address.city": ((_g = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _g === void 0 ? void 0 : _g.city) || "",
        "shipping_address.country_code": ((_h = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _h === void 0 ? void 0 : _h.country_code) || countryCode || "",
        "shipping_address.province": ((_j = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _j === void 0 ? void 0 : _j.province) || "",
        email: (cart === null || cart === void 0 ? void 0 : cart.email) || "",
        "shipping_address.phone": ((_k = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _k === void 0 ? void 0 : _k.phone) || "",
    }), formData = _l[0], setFormData = _l[1];
    var countriesInRegion = (0, react_1.useMemo)(function () { return cart === null || cart === void 0 ? void 0 : cart.region.countries.map(function (c) { return c.iso_2; }); }, [cart === null || cart === void 0 ? void 0 : cart.region]);
    // check if customer has saved addresses that are in the current region
    var addressesInRegion = (0, react_1.useMemo)(function () {
        return customer === null || customer === void 0 ? void 0 : customer.shipping_addresses.filter(function (a) { return a.country_code && (countriesInRegion === null || countriesInRegion === void 0 ? void 0 : countriesInRegion.includes(a.country_code)); });
    }, [customer === null || customer === void 0 ? void 0 : customer.shipping_addresses, countriesInRegion]);
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        setFormData({
            "shipping_address.first_name": ((_a = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _a === void 0 ? void 0 : _a.first_name) || "",
            "shipping_address.last_name": ((_b = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _b === void 0 ? void 0 : _b.last_name) || "",
            "shipping_address.address_1": ((_c = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _c === void 0 ? void 0 : _c.address_1) || "",
            "shipping_address.company": ((_d = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _d === void 0 ? void 0 : _d.company) || "",
            "shipping_address.postal_code": ((_e = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _e === void 0 ? void 0 : _e.postal_code) || "",
            "shipping_address.city": ((_f = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _f === void 0 ? void 0 : _f.city) || "",
            "shipping_address.country_code": ((_g = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _g === void 0 ? void 0 : _g.country_code) || "",
            "shipping_address.province": ((_h = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _h === void 0 ? void 0 : _h.province) || "",
            email: (cart === null || cart === void 0 ? void 0 : cart.email) || "",
            "shipping_address.phone": ((_j = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _j === void 0 ? void 0 : _j.phone) || "",
        });
    }, [cart === null || cart === void 0 ? void 0 : cart.shipping_address, cart === null || cart === void 0 ? void 0 : cart.email]);
    var handleChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    return (<>
      {customer && ((addressesInRegion === null || addressesInRegion === void 0 ? void 0 : addressesInRegion.length) || 0) > 0 && (<ui_1.Container className="mb-6 flex flex-col gap-y-4 p-5">
          <p className="text-small-regular">
            {"Hi ".concat(customer.first_name, ", do you want to use one of your saved addresses?")}
          </p>
          <address_select_1.default addresses={customer.shipping_addresses} cart={cart}/>
        </ui_1.Container>)}
      <div className="grid grid-cols-2 gap-4">
        <input_1.default label="First name" name="shipping_address.first_name" autoComplete="given-name" value={formData["shipping_address.first_name"]} onChange={handleChange} required/>
        <input_1.default label="Last name" name="shipping_address.last_name" autoComplete="family-name" value={formData["shipping_address.last_name"]} onChange={handleChange} required/>
        <input_1.default label="Address" name="shipping_address.address_1" autoComplete="address-line1" value={formData["shipping_address.address_1"]} onChange={handleChange} required/>
        <input_1.default label="Company" name="shipping_address.company" value={formData["shipping_address.company"]} onChange={handleChange} autoComplete="organization"/>
        <input_1.default label="Postal code" name="shipping_address.postal_code" autoComplete="postal-code" value={formData["shipping_address.postal_code"]} onChange={handleChange} required/>
        <input_1.default label="City" name="shipping_address.city" autoComplete="address-level2" value={formData["shipping_address.city"]} onChange={handleChange} required/>
        <country_select_1.default name="shipping_address.country_code" autoComplete="country" region={cart === null || cart === void 0 ? void 0 : cart.region} value={formData["shipping_address.country_code"]} onChange={handleChange} required/>
        <input_1.default label="State / Province" name="shipping_address.province" autoComplete="address-level1" value={formData["shipping_address.province"]} onChange={handleChange}/>
      </div>
      <div className="my-8">
        <checkbox_1.default label="Same as billing address" name="same_as_billing" checked={checked} onChange={onChange}/>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input_1.default label="Email" name="email" type="email" title="Enter a valid email address." autoComplete="email" value={formData.email} onChange={handleChange} required/>
        <input_1.default label="Phone" name="shipping_address.phone" autoComplete="tel" value={formData["shipping_address.phone"]} onChange={handleChange}/>
      </div>
    </>);
};
exports.default = ShippingAddress;
