"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stripCurrency = function (price) {
    return parseFloat(price.replace(/[^0-9.]/g, ""));
};
var sortProducts = function (products, sortBy) {
    if (sortBy === "price_asc") {
        return products.sort(function (a, b) {
            var _a, _b, _c, _d;
            if (!((_a = a.price) === null || _a === void 0 ? void 0 : _a.calculated_price) || !((_b = b.price) === null || _b === void 0 ? void 0 : _b.calculated_price))
                return 0;
            return (stripCurrency((_c = a.price) === null || _c === void 0 ? void 0 : _c.calculated_price) -
                stripCurrency((_d = b.price) === null || _d === void 0 ? void 0 : _d.calculated_price));
        });
    }
    if (sortBy === "price_desc") {
        return products.sort(function (a, b) {
            var _a, _b, _c, _d;
            if (!((_a = a.price) === null || _a === void 0 ? void 0 : _a.calculated_price) || !((_b = b.price) === null || _b === void 0 ? void 0 : _b.calculated_price))
                return 0;
            return (stripCurrency((_c = b.price) === null || _c === void 0 ? void 0 : _c.calculated_price) -
                stripCurrency((_d = a.price) === null || _d === void 0 ? void 0 : _d.calculated_price));
        });
    }
    if (sortBy === "created_at") {
        return products.sort(function (a, b) {
            if (!a.created_at || !b.created_at)
                return 0;
            return new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf();
        });
    }
    return products;
};
exports.default = sortProducts;
