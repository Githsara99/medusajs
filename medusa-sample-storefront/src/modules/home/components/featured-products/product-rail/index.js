"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var interactive_link_1 = require("@modules/common/components/interactive-link");
var product_preview_1 = require("@modules/products/components/product-preview");
function ProductRail(_a) {
    var collection = _a.collection, region = _a.region;
    var products = collection.products;
    if (!products) {
        return null;
    }
    return (<div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <ui_1.Text className="txt-xlarge">{collection.title}</ui_1.Text>
        <interactive_link_1.default href={"/collections/".concat(collection.handle)}>
          View all
        </interactive_link_1.default>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
        {products &&
            products.map(function (product) { return (<li key={product.id}>
              <product_preview_1.default productPreview={product} region={region} isFeatured/>
            </li>); })}
      </ul>
    </div>);
}
exports.default = ProductRail;
