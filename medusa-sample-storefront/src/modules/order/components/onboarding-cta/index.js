"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var actions_1 = require("app/actions");
var OnboardingCta = function (_a) {
    var orderId = _a.orderId;
    return (<ui_1.Container className="max-w-4xl h-full bg-ui-bg-subtle w-full">
      <div className="flex flex-col gap-y-4 center p-4 md:items-center">
        <ui_1.Text className="text-ui-fg-base text-xl">
          Your test order was successfully created! 🎉
        </ui_1.Text>
        <ui_1.Text className="text-ui-fg-subtle text-small-regular">
          You can now complete setting up your store in the admin.
        </ui_1.Text>
        <ui_1.Button className="w-fit" size="xlarge" onClick={function () { return (0, actions_1.resetOnboardingState)(orderId); }}>
          Complete setup in admin
        </ui_1.Button>
      </div>
    </ui_1.Container>);
};
exports.default = OnboardingCta;
