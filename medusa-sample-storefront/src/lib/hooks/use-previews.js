"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var sort_products_1 = require("@lib/util/sort-products");
var transform_product_preview_1 = require("@lib/util/transform-product-preview");
var usePreviews = function (_a) {
    var pages = _a.pages, region = _a.region, sortBy = _a.sortBy;
    var previews = (0, react_1.useMemo)(function () {
        if (!pages || !region) {
            return [];
        }
        var products = [];
        for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
            var page = pages_1[_i];
            products.push.apply(products, page.response.products);
        }
        var transformedProducts = products.map(function (p) {
            return (0, transform_product_preview_1.default)(p, region);
        });
        sortBy && (0, sort_products_1.default)(transformedProducts, sortBy);
        return transformedProducts;
    }, [pages, region, sortBy]);
    return previews;
};
exports.default = usePreviews;
