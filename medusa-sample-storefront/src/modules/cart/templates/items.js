"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var item_1 = require("@modules/cart/components/item");
var skeleton_line_item_1 = require("@modules/skeletons/components/skeleton-line-item");
var ItemsTemplate = function (_a) {
    var items = _a.items, region = _a.region;
    return (<div>
      <div className="pb-3 flex items-center">
        <ui_1.Heading className="text-[2rem] leading-[2.75rem]">Cart</ui_1.Heading>
      </div>
      <ui_1.Table>
        <ui_1.Table.Header className="border-t-0">
          <ui_1.Table.Row className="text-ui-fg-subtle txt-medium-plus">
            <ui_1.Table.HeaderCell className="!pl-0">Item</ui_1.Table.HeaderCell>
            <ui_1.Table.HeaderCell></ui_1.Table.HeaderCell>
            <ui_1.Table.HeaderCell>Quantity</ui_1.Table.HeaderCell>
            <ui_1.Table.HeaderCell className="hidden small:table-cell">
              Price
            </ui_1.Table.HeaderCell>
            <ui_1.Table.HeaderCell className="!pr-0 text-right">
              Total
            </ui_1.Table.HeaderCell>
          </ui_1.Table.Row>
        </ui_1.Table.Header>
        <ui_1.Table.Body>
          {items && region
            ? items
                .sort(function (a, b) {
                return a.created_at > b.created_at ? -1 : 1;
            })
                .map(function (item) {
                return <item_1.default key={item.id} item={item} region={region}/>;
            })
            : Array.from(Array(5).keys()).map(function (i) {
                return <skeleton_line_item_1.default key={i}/>;
            })}
        </ui_1.Table.Body>
      </ui_1.Table>
    </div>);
};
exports.default = ItemsTemplate;
