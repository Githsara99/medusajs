"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = require("react-dom");
var login_template_1 = require("@modules/account/templates/login-template");
var input_1 = require("@modules/common/components/input");
var actions_1 = require("@modules/account/actions");
var error_message_1 = require("@modules/checkout/components/error-message");
var submit_button_1 = require("@modules/checkout/components/submit-button");
var Login = function (_a) {
    var setCurrentView = _a.setCurrentView;
    var _b = (0, react_dom_1.useFormState)(actions_1.logCustomerIn, null), message = _b[0], formAction = _b[1];
    return (<div className="max-w-sm w-full flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        Sign in to access an enhanced shopping experience.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <input_1.default label="Email" name="email" type="email" title="Enter a valid email address." autoComplete="email" required/>
          <input_1.default label="Password" name="password" type="password" autoComplete="current-password" required/>
        </div>
        <error_message_1.default error={message}/>
        <submit_button_1.SubmitButton className="w-full mt-6">Sign in</submit_button_1.SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Not a member?{" "}
        <button onClick={function () { return setCurrentView(login_template_1.LOGIN_VIEW.REGISTER); }} className="underline">
          Join us
        </button>
        .
      </span>
    </div>);
};
exports.default = Login;
