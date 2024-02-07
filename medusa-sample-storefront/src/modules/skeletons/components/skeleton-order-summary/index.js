"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var skeleton_button_1 = require("@modules/skeletons/components/skeleton-button");
var skeleton_cart_totals_1 = require("@modules/skeletons/components/skeleton-cart-totals");
var SkeletonOrderSummary = function () {
    return (<div className="grid-cols-1">
      <skeleton_cart_totals_1.default header={false}/>
      <div className="mt-4">
        <skeleton_button_1.default />
      </div>
    </div>);
};
exports.default = SkeletonOrderSummary;
