"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var skeleton_order_confirmed_header_1 = require("@modules/skeletons/components/skeleton-order-confirmed-header");
var skeleton_order_information_1 = require("@modules/skeletons/components/skeleton-order-information");
var skeleton_order_items_1 = require("@modules/skeletons/components/skeleton-order-items");
var SkeletonOrderConfirmed = function () {
    return (<div className="bg-gray-50 py-6 min-h-[calc(100vh-64px)] animate-pulse">
      <div className="content-container flex justify-center">
        <div className="max-w-4xl h-full bg-white w-full p-10">
          <skeleton_order_confirmed_header_1.default />

          <skeleton_order_items_1.default />

          <skeleton_order_information_1.default />
        </div>
      </div>
    </div>);
};
exports.default = SkeletonOrderConfirmed;
