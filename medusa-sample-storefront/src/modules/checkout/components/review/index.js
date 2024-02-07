"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var payment_button_1 = require("../payment-button");
var navigation_1 = require("next/navigation");
var Review = function (_a) {
    var cart = _a.cart;
    var searchParams = (0, navigation_1.useSearchParams)();
    var isOpen = searchParams.get("step") === "review";
    var previousStepsCompleted = cart.shipping_address &&
        cart.shipping_methods.length > 0 &&
        cart.payment_session;
    return (<div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <ui_1.Heading level="h2" className={(0, ui_1.clx)("flex flex-row text-3xl-regular gap-x-2 items-baseline", {
            "opacity-50 pointer-events-none select-none": !isOpen,
        })}>
          Review
        </ui_1.Heading>
      </div>
      {isOpen && previousStepsCompleted && (<>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">
                By clicking the Place Order button, you confirm that you have
                read, understand and accept our Terms of Use, Terms of Sale and
                Returns Policy and acknowledge that you have read Medusa
                Store&apos;s Privacy Policy.
              </ui_1.Text>
            </div>
          </div>
          <payment_button_1.default cart={cart}/>
        </>)}
    </div>);
};
exports.default = Review;
