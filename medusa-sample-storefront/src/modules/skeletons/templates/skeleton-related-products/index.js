"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repeat_1 = require("@lib/util/repeat");
var skeleton_product_preview_1 = require("@modules/skeletons/components/skeleton-product-preview");
var SkeletonRelatedProducts = function () {
    return (<div className="product-page-constraint">
      <div className="flex flex-col gap-8 items-center text-center mb-8">
        <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
        <div className="flex flex-col gap-4 items-center text-center mb-16">
          <div className="w-96 h-10 animate-pulse bg-gray-100"></div>
          <div className="w-48 h-10 animate-pulse bg-gray-100"></div>
        </div>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1">
        {(0, repeat_1.default)(3).map(function (index) { return (<li key={index}>
            <skeleton_product_preview_1.default />
          </li>); })}
      </ul>
    </div>);
};
exports.default = SkeletonRelatedProducts;
