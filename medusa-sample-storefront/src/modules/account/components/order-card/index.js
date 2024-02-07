"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var react_1 = require("react");
var thumbnail_1 = require("@modules/products/components/thumbnail");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var prices_1 = require("@lib/util/prices");
var OrderCard = function (_a) {
    var order = _a.order;
    var numberOfLines = (0, react_1.useMemo)(function () {
        return order.items.reduce(function (acc, item) {
            return acc + item.quantity;
        }, 0);
    }, [order]);
    var numberOfProducts = (0, react_1.useMemo)(function () {
        return order.items.length;
    }, [order]);
    return (<div className="bg-white flex flex-col">
      <div className="uppercase text-large-semi mb-1">#{order.display_id}</div>
      <div className="flex items-center divide-x divide-gray-200 text-small-regular text-ui-fg-base">
        <span className="pr-2">
          {new Date(order.created_at).toDateString()}
        </span>
        <span className="px-2">
          {(0, prices_1.formatAmount)({
            amount: order.total,
            region: order.region,
            includeTaxes: false,
        })}
        </span>
        <span className="pl-2">{"".concat(numberOfLines, " ").concat(numberOfLines > 1 ? "items" : "item")}</span>
      </div>
      <div className="grid grid-cols-2 small:grid-cols-4 gap-4 my-4">
        {order.items.slice(0, 3).map(function (i) {
            return (<div key={i.id} className="flex flex-col gap-y-2">
              <thumbnail_1.default thumbnail={i.thumbnail} images={[]} size="full"/>
              <div className="flex items-center text-small-regular text-ui-fg-base">
                <span className="text-ui-fg-base font-semibold">{i.title}</span>
                <span className="ml-2">x</span>
                <span>{i.quantity}</span>
              </div>
            </div>);
        })}
        {numberOfProducts > 4 && (<div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-small-regular text-ui-fg-base">
              + {numberOfLines - 4}
            </span>
            <span className="text-small-regular text-ui-fg-base">more</span>
          </div>)}
      </div>
      <div className="flex justify-end">
        <localized_client_link_1.default href={"/account/orders/details/".concat(order.id)}>
          <ui_1.Button variant="secondary">See details</ui_1.Button>
        </localized_client_link_1.default>
      </div>
    </div>);
};
exports.default = OrderCard;
