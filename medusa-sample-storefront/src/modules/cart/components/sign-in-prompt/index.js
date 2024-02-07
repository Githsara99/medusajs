"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var SignInPrompt = function () {
    return (<div className="bg-white flex items-center justify-between">
      <div>
        <ui_1.Heading level="h2" className="txt-xlarge">
          Already have an account?
        </ui_1.Heading>
        <ui_1.Text className="txt-medium text-ui-fg-subtle mt-2">
          Sign in for a better experience.
        </ui_1.Text>
      </div>
      <div>
        <localized_client_link_1.default href="/account">
          <ui_1.Button variant="secondary" className="h-10">
            Sign in
          </ui_1.Button>
        </localized_client_link_1.default>
      </div>
    </div>);
};
exports.default = SignInPrompt;
