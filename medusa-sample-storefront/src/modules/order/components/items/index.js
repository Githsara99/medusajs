"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var divider_1 = require("@modules/common/components/divider");
var item_1 = require("@modules/order/components/item");
var skeleton_line_item_1 = require("@modules/skeletons/components/skeleton-line-item");
var Items = function (_a) {
    var items = _a.items, region = _a.region;
    return (<div className="flex flex-col">
      <divider_1.default className="!mb-0"/>
      <ui_1.Table>
        <ui_1.Table.Body>
          {(items === null || items === void 0 ? void 0 : items.length) && region
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
exports.default = Items;
