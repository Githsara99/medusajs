"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prices_1 = require("@lib/util/prices");
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var react_1 = require("react");
var CartTotals = function (_a) {
    var data = _a.data;
    var subtotal = data.subtotal, discount_total = data.discount_total, gift_card_total = data.gift_card_total, tax_total = data.tax_total, shipping_total = data.shipping_total, total = data.total;
    var getAmount = function (amount) {
        return (0, prices_1.formatAmount)({
            amount: amount || 0,
            region: data.region,
            includeTaxes: false,
        });
    };
    return (<div>
      <div className="flex flex-col gap-y-2 txt-medium text-ui-fg-subtle ">
        <div className="flex items-center justify-between">
          <span className="flex gap-x-1 items-center">
            Subtotal
            <ui_1.Tooltip content="Cart total excluding shipping and taxes.">
              <icons_1.InformationCircleSolid color="var(--fg-muted)"/>
            </ui_1.Tooltip>
          </span>
          <span>{getAmount(subtotal)}</span>
        </div>
        {!!discount_total && (<div className="flex items-center justify-between">
            <span>Discount</span>
            <span className="text-ui-fg-interactive">
              - {getAmount(discount_total)}
            </span>
          </div>)}
        {!!gift_card_total && (<div className="flex items-center justify-between">
            <span>Gift card</span>
            <span className="text-ui-fg-interactive">
              - {getAmount(gift_card_total)}
            </span>
          </div>)}
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>{getAmount(shipping_total)}</span>
        </div>
        <div className="flex justify-between">
          <span className="flex gap-x-1 items-center ">Taxes</span>
          <span>{getAmount(tax_total)}</span>
        </div>
      </div>
      <div className="h-px w-full border-b border-gray-200 my-4"/>
      <div className="flex items-center justify-between text-ui-fg-base mb-2 txt-medium ">
        <span>Total</span>
        <span className="txt-xlarge-plus">{getAmount(total)}</span>
      </div>
      <div className="h-px w-full border-b border-gray-200 mt-4"/>
    </div>);
};
exports.default = CartTotals;
