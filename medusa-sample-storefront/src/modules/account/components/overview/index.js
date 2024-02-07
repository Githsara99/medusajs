"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var prices_1 = require("@lib/util/prices");
var chevron_down_1 = require("@modules/common/icons/chevron-down");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var Overview = function (_a) {
    var _b;
    var customer = _a.customer, orders = _a.orders;
    return (<div>
      <div className="hidden small:block">
        <div className="text-xl-semi flex justify-between items-center mb-4">
          <span>Hello {customer === null || customer === void 0 ? void 0 : customer.first_name}</span>
          <span className="text-small-regular text-ui-fg-base">
            Signed in as:{" "}
            <span className="font-semibold">{customer === null || customer === void 0 ? void 0 : customer.email}</span>
          </span>
        </div>
        <div className="flex flex-col py-8 border-t border-gray-200">
          <div className="flex flex-col gap-y-4 h-full col-span-1 row-span-2 flex-1">
            <div className="flex items-start gap-x-16 mb-6">
              <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi">Profile</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-3xl-semi leading-none">
                    {getProfileCompletion(customer)}%
                  </span>
                  <span className="uppercase text-base-regular text-ui-fg-subtle">
                    Completed
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi">Addresses</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-3xl-semi leading-none">
                    {((_b = customer === null || customer === void 0 ? void 0 : customer.shipping_addresses) === null || _b === void 0 ? void 0 : _b.length) || 0}
                  </span>
                  <span className="uppercase text-base-regular text-ui-fg-subtle">
                    Saved
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-large-semi">Recent orders</h3>
              </div>
              <ul className="flex flex-col gap-y-4">
                {orders && orders.length > 0 ? (orders.slice(0, 5).map(function (order) {
            return (<li key={order.id}>
                        <localized_client_link_1.default href={"/account/orders/details/".concat(order.id)}>
                          <ui_1.Container className="bg-gray-50 flex justify-between items-center p-4">
                            <div className="grid grid-cols-3 grid-rows-2 text-small-regular gap-x-4 flex-1">
                              <span className="font-semibold">Date placed</span>
                              <span className="font-semibold">
                                Order number
                              </span>
                              <span className="font-semibold">
                                Total amount
                              </span>
                              <span>
                                {new Date(order.created_at).toDateString()}
                              </span>
                              <span>#{order.display_id}</span>
                              <span>
                                {(0, prices_1.formatAmount)({
                    amount: order.total,
                    region: order.region,
                    includeTaxes: false,
                })}
                              </span>
                            </div>
                            <button className="flex items-center justify-between">
                              <span className="sr-only">
                                Go to order #{order.display_id}
                              </span>
                              <chevron_down_1.default className="-rotate-90"/>
                            </button>
                          </ui_1.Container>
                        </localized_client_link_1.default>
                      </li>);
        })) : (<span>No recent orders</span>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
var getProfileCompletion = function (customer) {
    var count = 0;
    if (!customer) {
        return 0;
    }
    if (customer.email) {
        count++;
    }
    if (customer.first_name && customer.last_name) {
        count++;
    }
    if (customer.phone) {
        count++;
    }
    if (customer.billing_address) {
        count++;
    }
    return (count / 4) * 100;
};
exports.default = Overview;
