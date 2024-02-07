"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductPrice = void 0;
var prices_1 = require("@lib/util/prices");
function getProductPrice(_a) {
    var product = _a.product, variantId = _a.variantId, region = _a.region;
    if (!product || !product.id) {
        throw new Error("No product provided");
    }
    var getPercentageDiff = function (original, calculated) {
        var diff = original - calculated;
        var decrease = (diff / original) * 100;
        return decrease.toFixed();
    };
    var cheapestPrice = function () {
        var _a;
        if (!product || !((_a = product.variants) === null || _a === void 0 ? void 0 : _a.length) || !region) {
            return null;
        }
        var variants = product.variants;
        var cheapestVariant = variants.reduce(function (prev, curr) {
            return prev.calculated_price < curr.calculated_price ? prev : curr;
        });
        return {
            calculated_price: (0, prices_1.formatAmount)({
                amount: cheapestVariant.calculated_price,
                region: region,
                includeTaxes: false,
            }),
            original_price: (0, prices_1.formatAmount)({
                amount: cheapestVariant.original_price,
                region: region,
                includeTaxes: false,
            }),
            price_type: cheapestVariant.calculated_price_type,
            percentage_diff: getPercentageDiff(cheapestVariant.original_price, cheapestVariant.calculated_price),
        };
    };
    var variantPrice = function () {
        if (!product || !variantId || !region) {
            return null;
        }
        var variant = product.variants.find(function (v) { return v.id === variantId || v.sku === variantId; });
        if (!variant) {
            return null;
        }
        return {
            calculated_price: (0, prices_1.formatAmount)({
                amount: variant.calculated_price,
                region: region,
                includeTaxes: false,
            }),
            original_price: (0, prices_1.formatAmount)({
                amount: variant.original_price,
                region: region,
                includeTaxes: false,
            }),
            price_type: variant.calculated_price_type,
            percentage_diff: getPercentageDiff(variant.original_price, variant.calculated_price),
        };
    };
    return {
        product: product,
        cheapestPrice: cheapestPrice(),
        variantPrice: variantPrice(),
    };
}
exports.getProductPrice = getProductPrice;
