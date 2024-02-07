"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var cart_totals_1 = require("@modules/common/components/cart-totals");
var divider_1 = require("@modules/common/components/divider");
var discount_code_1 = require("@modules/checkout/components/discount-code");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var Summary = function (_a) {
    var cart = _a.cart;
    return (<div className="flex flex-col gap-y-4">
      <ui_1.Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Summary
      </ui_1.Heading>
      <discount_code_1.default cart={cart}/>
      <divider_1.default />
      <cart_totals_1.default data={cart}/>
      <localized_client_link_1.default href={"/checkout?step=" + cart.checkout_step}>
        <ui_1.Button className="w-full h-10">Go to checkout</ui_1.Button>
      </localized_client_link_1.default>
    </div>);
};
exports.default = Summary;
