"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var image_gallery_1 = require("@modules/products/components/image-gallery");
var product_actions_1 = require("@modules/products/components/product-actions");
var product_onboarding_cta_1 = require("@modules/products/components/product-onboarding-cta");
var product_tabs_1 = require("@modules/products/components/product-tabs");
var related_products_1 = require("@modules/products/components/related-products");
var product_info_1 = require("@modules/products/templates/product-info");
var skeleton_related_products_1 = require("@modules/skeletons/templates/skeleton-related-products");
var navigation_1 = require("next/navigation");
var product_actions_wrapper_1 = require("./product-actions-wrapper");
var ProductTemplate = function (_a) {
    var product = _a.product, region = _a.region, countryCode = _a.countryCode;
    if (!product || !product.id) {
        return (0, navigation_1.notFound)();
    }
    return (<>
      <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
          <product_info_1.default product={product}/>
          <product_tabs_1.default product={product}/>
        </div>
        <div className="block w-full relative">
          <image_gallery_1.default images={(product === null || product === void 0 ? void 0 : product.images) || []}/>
        </div>
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
          <product_onboarding_cta_1.default />
          <react_1.Suspense fallback={<product_actions_1.default product={product} region={region}/>}>
            <product_actions_wrapper_1.default id={product.id} region={region}/>
          </react_1.Suspense>
        </div>
      </div>
      <div className="content-container my-16 small:my-32">
        <react_1.Suspense fallback={<skeleton_related_products_1.default />}>
          <related_products_1.default product={product} countryCode={countryCode}/>
        </react_1.Suspense>
      </div>
    </>);
};
exports.default = ProductTemplate;
