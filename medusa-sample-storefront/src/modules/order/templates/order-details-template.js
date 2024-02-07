"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@medusajs/icons");
var react_1 = require("react");
var help_1 = require("@modules/order/components/help");
var items_1 = require("@modules/order/components/items");
var order_details_1 = require("@modules/order/components/order-details");
var order_summary_1 = require("@modules/order/components/order-summary");
var shipping_details_1 = require("@modules/order/components/shipping-details");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var OrderDetailsTemplate = function (_a) {
    var order = _a.order;
    return (<div className="flex flex-col justify-center gap-y-4">
      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-2xl-semi">Order details</h1>
        <localized_client_link_1.default href="/account/orders" className="flex gap-2 items-center text-ui-fg-subtle hover:text-ui-fg-base">
          <icons_1.XMark /> Back to overview
        </localized_client_link_1.default>
      </div>
      <div className="flex flex-col gap-4 h-full bg-white w-full">
        <order_details_1.default order={order} showStatus/>
        <items_1.default items={order.items} region={order.region}/>
        <shipping_details_1.default order={order}/>
        <order_summary_1.default order={order}/>
        <help_1.default />
      </div>
    </div>);
};
exports.default = OrderDetailsTemplate;
