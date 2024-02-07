"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var order_card_1 = require("../order-card");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var OrderOverview = function (_a) {
    var orders = _a.orders;
    if (orders === null || orders === void 0 ? void 0 : orders.length) {
        return (<div className="flex flex-col gap-y-8 w-full">
        {orders.map(function (o) { return (<div key={o.id} className="border-b border-gray-200 pb-6 last:pb-0 last:border-none">
            <order_card_1.default order={o}/>
          </div>); })}
      </div>);
    }
    return (<div className="w-full flex flex-col items-center gap-y-4">
      <h2 className="text-large-semi">Nothing to see here</h2>
      <p className="text-base-regular">
        You don&apos;t have any orders yet, let us change that {":)"}
      </p>
      <div className="mt-4">
        <localized_client_link_1.default href="/" passHref>
          <ui_1.Button>Continue shopping</ui_1.Button>
        </localized_client_link_1.default>
      </div>
    </div>);
};
exports.default = OrderOverview;
