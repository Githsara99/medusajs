"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var prices_1 = require("@lib/util/prices");
var divider_1 = require("@modules/common/components/divider");
var ShippingDetails = function (_a) {
    var _b, _c;
    var order = _a.order;
    return (<div>
      <ui_1.Heading level="h2" className="flex flex-row text-3xl-regular my-6">
        Delivery
      </ui_1.Heading>
      <div className="flex items-start gap-x-8">
        <div className="flex flex-col w-1/3">
          <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">
            Shipping Address
          </ui_1.Text>
          <ui_1.Text className="txt-medium text-ui-fg-subtle">
            {order.shipping_address.first_name}{" "}
            {order.shipping_address.last_name}
          </ui_1.Text>
          <ui_1.Text className="txt-medium text-ui-fg-subtle">
            {order.shipping_address.address_1}{" "}
            {order.shipping_address.address_2}
          </ui_1.Text>
          <ui_1.Text className="txt-medium text-ui-fg-subtle">
            {order.shipping_address.postal_code}, {order.shipping_address.city}
          </ui_1.Text>
          <ui_1.Text className="txt-medium text-ui-fg-subtle">
            {(_b = order.shipping_address.country_code) === null || _b === void 0 ? void 0 : _b.toUpperCase()}
          </ui_1.Text>
        </div>

        <div className="flex flex-col w-1/3 ">
          <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">Contact</ui_1.Text>
          <ui_1.Text className="txt-medium text-ui-fg-subtle">
            {order.shipping_address.phone}
          </ui_1.Text>
          <ui_1.Text className="txt-medium text-ui-fg-subtle">{order.email}</ui_1.Text>
        </div>

        <div className="flex flex-col w-1/3">
          <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">Method</ui_1.Text>
          <ui_1.Text className="txt-medium text-ui-fg-subtle">
            {(_c = order.shipping_methods[0].shipping_option) === null || _c === void 0 ? void 0 : _c.name} (
            {(0, prices_1.formatAmount)({
            amount: order.shipping_methods[0].price,
            region: order.region,
            includeTaxes: false,
        })
            .replace(/,/g, "")
            .replace(/\./g, ",")}
            )
          </ui_1.Text>
        </div>
      </div>
      <divider_1.default className="mt-8"/>
    </div>);
};
exports.default = ShippingDetails;
