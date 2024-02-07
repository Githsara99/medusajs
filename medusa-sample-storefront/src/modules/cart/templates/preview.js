"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var item_1 = require("@modules/cart/components/item");
var skeleton_line_item_1 = require("@modules/skeletons/components/skeleton-line-item");
var ItemsPreviewTemplate = function (_a) {
    var items = _a.items, region = _a.region;
    var hasOverflow = items && items.length > 4;
    return (<div className={(0, ui_1.clx)({
            "pl-[1px] overflow-y-scroll overflow-x-hidden no-scrollbar max-h-[420px]": hasOverflow,
        })}>
      <ui_1.Table>
        <ui_1.Table.Body>
          {items && region
            ? items
                .sort(function (a, b) {
                return a.created_at > b.created_at ? -1 : 1;
            })
                .map(function (item) {
                return (<item_1.default key={item.id} item={item} region={region} type="preview"/>);
            })
            : Array.from(Array(5).keys()).map(function (i) {
                return <skeleton_line_item_1.default key={i}/>;
            })}
        </ui_1.Table.Body>
      </ui_1.Table>
    </div>);
};
exports.default = ItemsPreviewTemplate;
