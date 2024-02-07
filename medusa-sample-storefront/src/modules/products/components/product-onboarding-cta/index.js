"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var headers_1 = require("next/headers");
var ProductOnboardingCta = function () {
    var _a;
    var isOnboarding = ((_a = (0, headers_1.cookies)().get("_medusa_onboarding")) === null || _a === void 0 ? void 0 : _a.value) === "true";
    if (!isOnboarding) {
        return null;
    }
    return (<ui_1.Container className="max-w-4xl h-full bg-ui-bg-subtle w-full p-8">
      <div className="flex flex-col gap-y-4 center">
        <ui_1.Text className="text-ui-fg-base text-xl">
          Your demo product was successfully created! 🎉
        </ui_1.Text>
        <ui_1.Text className="text-ui-fg-subtle text-small-regular">
          You can now continue setting up your store in the admin.
        </ui_1.Text>
        <a href="http://localhost:7001/a/orders?onboarding_step=create_order_nextjs">
          <ui_1.Button className="w-full">Continue setup in admin</ui_1.Button>
        </a>
      </div>
    </ui_1.Container>);
};
exports.default = ProductOnboardingCta;
