"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var input_1 = require("@modules/common/components/input");
var account_info_1 = require("../account-info");
var actions_1 = require("@modules/account/actions");
var ProfileEmail = function (_a) {
    var customer = _a.customer;
    var _b = react_1.default.useState(false), successState = _b[0], setSuccessState = _b[1];
    var _c = (0, react_dom_1.useFormState)(actions_1.updateCustomerEmail, {
        error: false,
        success: false,
    }), state = _c[0], formAction = _c[1];
    var clearState = function () {
        setSuccessState(false);
    };
    (0, react_1.useEffect)(function () {
        setSuccessState(state.success);
    }, [state]);
    return (<form action={formAction} className="w-full">
      <account_info_1.default label="Email" currentInfo={"".concat(customer.email)} isSuccess={successState} isError={!!state.error} errorMessage={state.error} clearState={clearState}>
        <div className="grid grid-cols-1 gap-y-2">
          <input_1.default label="Email" name="email" type="email" autoComplete="email" required defaultValue={customer.email}/>
        </div>
      </account_info_1.default>
    </form>);
};
exports.default = ProfileEmail;
