"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var line_item_options_1 = require("@modules/common/components/line-item-options");
var line_item_price_1 = require("@modules/common/components/line-item-price");
var line_item_unit_price_1 = require("@modules/common/components/line-item-unit-price");
var thumbnail_1 = require("@modules/products/components/thumbnail");
var Item = function (_a) {
    var item = _a.item, region = _a.region;
    return (<ui_1.Table.Row className="w-full">
      <ui_1.Table.Cell className="!pl-0 p-4 w-24">
        <div className="flex w-16">
          <thumbnail_1.default thumbnail={item.thumbnail} size="square"/>
        </div>
      </ui_1.Table.Cell>

      <ui_1.Table.Cell className="text-left">
        <ui_1.Text className="txt-medium-plus text-ui-fg-base">{item.title}</ui_1.Text>
        <line_item_options_1.default variant={item.variant}/>
      </ui_1.Table.Cell>

      <ui_1.Table.Cell className="!pr-0">
        <span className="!pr-0 flex flex-col items-end h-full justify-center">
          <span className="flex gap-x-1 ">
            <ui_1.Text className="text-ui-fg-muted">{item.quantity}x </ui_1.Text>
            <line_item_unit_price_1.default item={item} region={region} style="tight"/>
          </span>

          <line_item_price_1.default item={item} region={region} style="tight"/>
        </span>
      </ui_1.Table.Cell>
    </ui_1.Table.Row>);
};
exports.default = Item;
