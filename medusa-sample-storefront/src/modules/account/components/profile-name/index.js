"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var input_1 = require("@modules/common/components/input");
var actions_1 = require("@modules/account/actions");
var account_info_1 = require("../account-info");
var ProfileName = function (_a) {
    var customer = _a.customer;
    var _b = react_1.default.useState(false), successState = _b[0], setSuccessState = _b[1];
    var _c = (0, react_dom_1.useFormState)(actions_1.updateCustomerName, {
        error: false,
        success: false,
    }), state = _c[0], formAction = _c[1];
    var clearState = function () {
        setSuccessState(false);
    };
    (0, react_1.useEffect)(function () {
        setSuccessState(state.success);
    }, [state]);
    return (<form action={formAction} className="w-full overflow-visible">
      <account_info_1.default label="Name" currentInfo={"".concat(customer.first_name, " ").concat(customer.last_name)} isSuccess={successState} isError={!!(state === null || state === void 0 ? void 0 : state.error)} clearState={clearState}>
        <div className="grid grid-cols-2 gap-x-4">
          <input_1.default label="First name" name="first_name" required defaultValue={customer.first_name}/>
          <input_1.default label="Last name" name="last_name" required defaultValue={customer.last_name}/>
        </div>
      </account_info_1.default>
    </form>);
};
exports.default = ProfileName;
