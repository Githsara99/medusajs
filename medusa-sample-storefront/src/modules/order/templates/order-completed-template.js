"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var headers_1 = require("next/headers");
var cart_totals_1 = require("@modules/common/components/cart-totals");
var help_1 = require("@modules/order/components/help");
var items_1 = require("@modules/order/components/items");
var onboarding_cta_1 = require("@modules/order/components/onboarding-cta");
var order_details_1 = require("@modules/order/components/order-details");
var shipping_details_1 = require("@modules/order/components/shipping-details");
var payment_details_1 = require("@modules/order/components/payment-details");
function OrderCompletedTemplate(_a) {
    var _b;
    var order = _a.order;
    var isOnboarding = ((_b = (0, headers_1.cookies)().get("_medusa_onboarding")) === null || _b === void 0 ? void 0 : _b.value) === "true";
    return (<div className="py-6 min-h-[calc(100vh-64px)]">
      <div className="content-container flex flex-col justify-center items-center gap-y-10 max-w-4xl h-full w-full">
        {isOnboarding && <onboarding_cta_1.default orderId={order.id}/>}
        <div className="flex flex-col gap-4 max-w-4xl h-full bg-white w-full py-10">
          <ui_1.Heading level="h1" className="flex flex-col gap-y-3 text-ui-fg-base text-3xl mb-4">
            <span>Thank you!</span>
            <span>Your order was placed successfully.</span>
          </ui_1.Heading>
          <order_details_1.default order={order}/>
          <ui_1.Heading level="h2" className="flex flex-row text-3xl-regular">
            Summary
          </ui_1.Heading>
          <items_1.default items={order.items} region={order.region}/>
          <cart_totals_1.default data={order}/>
          <shipping_details_1.default order={order}/>
          <payment_details_1.default order={order}/>
          <help_1.default />
        </div>
      </div>
    </div>);
}
exports.default = OrderCompletedTemplate;
