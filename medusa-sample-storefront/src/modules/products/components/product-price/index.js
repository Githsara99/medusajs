"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var get_product_price_1 = require("@lib/util/get-product-price");
function ProductPrice(_a) {
    var product = _a.product, variant = _a.variant, region = _a.region;
    var _b = (0, get_product_price_1.getProductPrice)({
        product: product,
        variantId: variant === null || variant === void 0 ? void 0 : variant.id,
        region: region,
    }), cheapestPrice = _b.cheapestPrice, variantPrice = _b.variantPrice;
    var selectedPrice = variant ? variantPrice : cheapestPrice;
    if (!selectedPrice) {
        return <div className="block w-32 h-9 bg-gray-100 animate-pulse"/>;
    }
    return (<div className="flex flex-col text-ui-fg-base">
      <span className={(0, ui_1.clx)("text-xl-semi", {
            "text-ui-fg-interactive": selectedPrice.price_type === "sale",
        })}>
        {!variant && "From "}
        {selectedPrice.calculated_price}
      </span>
      {selectedPrice.price_type === "sale" && (<>
          <p>
            <span className="text-ui-fg-subtle">Original: </span>
            <span className="line-through">{selectedPrice.original_price}</span>
          </p>
          <span className="text-ui-fg-interactive">
            -{selectedPrice.percentage_diff}%
          </span>
        </>)}
    </div>);
}
exports.default = ProductPrice;
