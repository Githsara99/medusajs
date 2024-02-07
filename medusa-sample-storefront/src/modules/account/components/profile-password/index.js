"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var input_1 = require("@modules/common/components/input");
var account_info_1 = require("../account-info");
var actions_1 = require("@modules/account/actions");
var react_dom_1 = require("react-dom");
var ProfileName = function (_a) {
    var customer = _a.customer;
    var _b = react_1.default.useState(false), successState = _b[0], setSuccessState = _b[1];
    var _c = (0, react_dom_1.useFormState)(actions_1.updateCustomerPassword, {
        customer: customer,
        success: false,
        error: false,
    }), state = _c[0], formAction = _c[1];
    var clearState = function () {
        setSuccessState(false);
    };
    (0, react_1.useEffect)(function () {
        setSuccessState(state.success);
    }, [state]);
    return (<form action={formAction} onReset={function () { return clearState(); }} className="w-full">
      <account_info_1.default label="Password" currentInfo={<span>The password is not shown for security reasons</span>} isSuccess={successState} isError={!!state.error} errorMessage={state.error} clearState={clearState}>
        <div className="grid grid-cols-2 gap-4">
          <input_1.default label="Old password" name="old_password" required type="password"/>
          <input_1.default label="New password" type="password" name="new_password" required/>
          <input_1.default label="Confirm password" type="password" name="confirm_password" required/>
        </div>
      </account_info_1.default>
    </form>);
};
exports.default = ProfileName;
