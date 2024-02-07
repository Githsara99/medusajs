"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var input_1 = require("@modules/common/components/input");
var native_select_1 = require("@modules/common/components/native-select");
var account_info_1 = require("../account-info");
var react_dom_1 = require("react-dom");
var actions_1 = require("@modules/account/actions");
var ProfileBillingAddress = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var customer = _a.customer, regions = _a.regions;
    var regionOptions = (0, react_1.useMemo)(function () {
        return ((regions === null || regions === void 0 ? void 0 : regions.map(function (region) {
            return region.countries.map(function (country) { return ({
                value: country.iso_2,
                label: country.display_name,
            }); });
        }).flat()) || []);
    }, [regions]);
    var _l = react_1.default.useState(false), successState = _l[0], setSuccessState = _l[1];
    var _m = (0, react_dom_1.useFormState)(actions_1.updateCustomerBillingAddress, {
        error: false,
        success: false,
    }), state = _m[0], formAction = _m[1];
    var clearState = function () {
        setSuccessState(false);
    };
    (0, react_1.useEffect)(function () {
        setSuccessState(state.success);
    }, [state]);
    var currentInfo = (0, react_1.useMemo)(function () {
        var _a, _b;
        if (!customer.billing_address) {
            return "No billing address";
        }
        var country = ((_a = regionOptions === null || regionOptions === void 0 ? void 0 : regionOptions.find(function (country) { return country.value === customer.billing_address.country_code; })) === null || _a === void 0 ? void 0 : _a.label) || ((_b = customer.billing_address.country_code) === null || _b === void 0 ? void 0 : _b.toUpperCase());
        return (<div className="flex flex-col font-semibold">
        <span>
          {customer.billing_address.first_name}{" "}
          {customer.billing_address.last_name}
        </span>
        <span>{customer.billing_address.company}</span>
        <span>
          {customer.billing_address.address_1}
          {customer.billing_address.address_2
                ? ", ".concat(customer.billing_address.address_2)
                : ""}
        </span>
        <span>
          {customer.billing_address.postal_code},{" "}
          {customer.billing_address.city}
        </span>
        <span>{country}</span>
      </div>);
    }, [customer, regionOptions]);
    return (<form action={formAction} onReset={function () { return clearState(); }} className="w-full">
      <account_info_1.default label="Billing address" currentInfo={currentInfo} isSuccess={successState} isError={!!state.error} clearState={clearState}>
        <div className="grid grid-cols-1 gap-y-2">
          <div className="grid grid-cols-2 gap-x-2">
            <input_1.default label="First name" name="billing_address.first_name" defaultValue={((_b = customer.billing_address) === null || _b === void 0 ? void 0 : _b.first_name) || undefined} required/>
            <input_1.default label="Last name" name="billing_address.last_name" defaultValue={((_c = customer.billing_address) === null || _c === void 0 ? void 0 : _c.last_name) || undefined} required/>
          </div>
          <input_1.default label="Company" name="billing_address.company" defaultValue={((_d = customer.billing_address) === null || _d === void 0 ? void 0 : _d.company) || undefined}/>
          <input_1.default label="Address" name="billing_address.address_1" defaultValue={((_e = customer.billing_address) === null || _e === void 0 ? void 0 : _e.address_1) || undefined} required/>
          <input_1.default label="Apartment, suite, etc." name="billing_address.address_2" defaultValue={((_f = customer.billing_address) === null || _f === void 0 ? void 0 : _f.address_2) || undefined}/>
          <div className="grid grid-cols-[144px_1fr] gap-x-2">
            <input_1.default label="Postal code" name="billing_address.postal_code" defaultValue={((_g = customer.billing_address) === null || _g === void 0 ? void 0 : _g.postal_code) || undefined} required/>
            <input_1.default label="City" name="billing_address.city" defaultValue={((_h = customer.billing_address) === null || _h === void 0 ? void 0 : _h.city) || undefined} required/>
          </div>
          <input_1.default label="Province" name="billing_address.province" defaultValue={((_j = customer.billing_address) === null || _j === void 0 ? void 0 : _j.province) || undefined}/>
          <native_select_1.default name="billing_address.country_code" defaultValue={((_k = customer.billing_address) === null || _k === void 0 ? void 0 : _k.country_code) || undefined} required>
            <option value="">-</option>
            {regionOptions.map(function (option, i) {
            return (<option key={i} value={option.value}>
                  {option.label}
                </option>);
        })}
          </native_select_1.default>
        </div>
      </account_info_1.default>
    </form>);
};
var mapBillingAddressToFormData = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var customer = _a.customer;
    return {
        billing_address: {
            first_name: ((_b = customer.billing_address) === null || _b === void 0 ? void 0 : _b.first_name) || undefined,
            last_name: ((_c = customer.billing_address) === null || _c === void 0 ? void 0 : _c.last_name) || undefined,
            company: ((_d = customer.billing_address) === null || _d === void 0 ? void 0 : _d.company) || undefined,
            address_1: ((_e = customer.billing_address) === null || _e === void 0 ? void 0 : _e.address_1) || undefined,
            address_2: ((_f = customer.billing_address) === null || _f === void 0 ? void 0 : _f.address_2) || undefined,
            city: ((_g = customer.billing_address) === null || _g === void 0 ? void 0 : _g.city) || undefined,
            province: ((_h = customer.billing_address) === null || _h === void 0 ? void 0 : _h.province) || undefined,
            postal_code: ((_j = customer.billing_address) === null || _j === void 0 ? void 0 : _j.postal_code) || undefined,
            country_code: ((_k = customer.billing_address) === null || _k === void 0 ? void 0 : _k.country_code) || undefined,
        },
    };
};
exports.default = ProfileBillingAddress;
