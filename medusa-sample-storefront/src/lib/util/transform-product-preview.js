"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_precentage_diff_1 = require("@lib/util/get-precentage-diff");
var prices_1 = require("@lib/util/prices");
var transformProductPreview = function (product, region) {
    var variants = product.variants;
    var cheapestVariant = undefined;
    if ((variants === null || variants === void 0 ? void 0 : variants.length) > 0) {
        cheapestVariant = variants.reduce(function (acc, curr) {
            if (acc.calculated_price > curr.calculated_price) {
                return curr;
            }
            return acc;
        }, variants[0]);
    }
    return {
        id: product.id,
        title: product.title,
        handle: product.handle,
        thumbnail: product.thumbnail,
        created_at: product.created_at,
        price: cheapestVariant
            ? {
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
                difference: (0, get_precentage_diff_1.getPercentageDiff)(cheapestVariant.original_price, cheapestVariant.calculated_price),
                price_type: cheapestVariant.calculated_price_type,
            }
            : undefined,
    };
};
exports.default = transformProductPreview;
