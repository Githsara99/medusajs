"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = require("react-dom");
var input_1 = require("@modules/common/components/input");
var login_template_1 = require("@modules/account/templates/login-template");
var actions_1 = require("@modules/account/actions");
var error_message_1 = require("@modules/checkout/components/error-message");
var submit_button_1 = require("@modules/checkout/components/submit-button");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var Register = function (_a) {
    var setCurrentView = _a.setCurrentView;
    var _b = (0, react_dom_1.useFormState)(actions_1.signUp, null), message = _b[0], formAction = _b[1];
    return (<div className="max-w-sm flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">
        Become a Medusa Store Member
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Create your Medusa Store Member profile, and get access to an enhanced
        shopping experience.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <input_1.default label="First name" name="first_name" required autoComplete="given-name"/>
          <input_1.default label="Last name" name="last_name" required autoComplete="family-name"/>
          <input_1.default label="Email" name="email" required type="email" autoComplete="email"/>
          <input_1.default label="Phone" name="phone" type="tel" autoComplete="tel"/>
          <input_1.default label="Password" name="password" required type="password" autoComplete="new-password"/>
        </div>
        <error_message_1.default error={message}/>
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          By creating an account, you agree to Medusa Store&apos;s{" "}
          <localized_client_link_1.default href="/content/privacy-policy" className="underline">
            Privacy Policy
          </localized_client_link_1.default>{" "}
          and{" "}
          <localized_client_link_1.default href="/content/terms-of-use" className="underline">
            Terms of Use
          </localized_client_link_1.default>
          .
        </span>
        <submit_button_1.SubmitButton className="w-full mt-6">Join</submit_button_1.SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Already a member?{" "}
        <button onClick={function () { return setCurrentView(login_template_1.LOGIN_VIEW.SIGN_IN); }} className="underline">
          Sign in
        </button>
        .
      </span>
    </div>);
};
exports.default = Register;
