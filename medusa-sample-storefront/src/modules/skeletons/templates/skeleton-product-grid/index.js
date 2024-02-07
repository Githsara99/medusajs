"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repeat_1 = require("@lib/util/repeat");
var skeleton_product_preview_1 = require("@modules/skeletons/components/skeleton-product-preview");
var SkeletonProductGrid = function () {
    return (<ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1">
      {(0, repeat_1.default)(8).map(function (index) { return (<li key={index}>
          <skeleton_product_preview_1.default />
        </li>); })}
    </ul>);
};
exports.default = SkeletonProductGrid;
