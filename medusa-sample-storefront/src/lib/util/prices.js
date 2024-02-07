"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAmount = exports.computeAmount = exports.getVariantPrice = exports.computeVariantPrice = exports.formatVariantPrice = exports.findCheapestPrice = exports.findCheapestCurrencyPrice = exports.findCheapestRegionPrice = void 0;
var isEmpty_1 = require("./isEmpty");
var constants_1 = require("@lib/constants");
var findCheapestRegionPrice = function (variants, regionId) {
    var regionPrices = variants.reduce(function (acc, v) {
        if (!v.prices) {
            return acc;
        }
        var price = v.prices.find(function (p) { return p.region_id === regionId; });
        if (price) {
            acc.push(price);
        }
        return acc;
    }, []);
    if (!regionPrices.length) {
        return undefined;
    }
    //find the price with the lowest amount in regionPrices
    var cheapestPrice = regionPrices.reduce(function (acc, p) {
        if (acc.amount > p.amount) {
            return p;
        }
        return acc;
    });
    return cheapestPrice;
};
exports.findCheapestRegionPrice = findCheapestRegionPrice;
var findCheapestCurrencyPrice = function (variants, currencyCode) {
    var currencyPrices = variants.reduce(function (acc, v) {
        if (!v.prices) {
            return acc;
        }
        var price = v.prices.find(function (p) { return p.currency_code === currencyCode; });
        if (price) {
            acc.push(price);
        }
        return acc;
    }, []);
    if (!currencyPrices.length) {
        return undefined;
    }
    //find the price with the lowest amount in currencyPrices
    var cheapestPrice = currencyPrices.reduce(function (acc, p) {
        if (acc.amount > p.amount) {
            return p;
        }
        return acc;
    });
    return cheapestPrice;
};
exports.findCheapestCurrencyPrice = findCheapestCurrencyPrice;
var findCheapestPrice = function (variants, region) {
    var id = region.id, currency_code = region.currency_code;
    var cheapestPrice = (0, exports.findCheapestRegionPrice)(variants, id);
    if (!cheapestPrice) {
        cheapestPrice = (0, exports.findCheapestCurrencyPrice)(variants, currency_code);
    }
    if (cheapestPrice) {
        return (0, exports.formatAmount)({
            amount: cheapestPrice.amount,
            region: region,
        });
    }
    // if we can't find any price that matches the current region,
    // either by id or currency, then the product is not available in
    // the current region
    return "Not available in your region";
};
exports.findCheapestPrice = findCheapestPrice;
/**
 * Takes a product variant and a region, and converts the variant's price to a localized decimal format
 */
var formatVariantPrice = function (_a) {
    var variant = _a.variant, region = _a.region, _b = _a.includeTaxes, includeTaxes = _b === void 0 ? true : _b, rest = __rest(_a, ["variant", "region", "includeTaxes"]);
    var amount = (0, exports.computeVariantPrice)({ variant: variant, region: region, includeTaxes: includeTaxes });
    return convertToLocale(__assign({ amount: amount, currency_code: region === null || region === void 0 ? void 0 : region.currency_code }, rest));
};
exports.formatVariantPrice = formatVariantPrice;
/**
 * Takes a product variant and region, and returns the variant price as a decimal number
 * @param params.variant - product variant
 * @param params.region - region
 * @param params.includeTaxes - whether to include taxes or not
 */
var computeVariantPrice = function (_a) {
    var variant = _a.variant, region = _a.region, _b = _a.includeTaxes, includeTaxes = _b === void 0 ? true : _b;
    var amount = (0, exports.getVariantPrice)(variant, region);
    return (0, exports.computeAmount)({
        amount: amount,
        region: region,
        includeTaxes: includeTaxes,
    });
};
exports.computeVariantPrice = computeVariantPrice;
/**
 * Finds the price amount correspoding to the region selected
 * @param variant - the product variant
 * @param region - the region
 * @returns - the price's amount
 */
var getVariantPrice = function (variant, region) {
    var _a;
    var price = (_a = variant === null || variant === void 0 ? void 0 : variant.prices) === null || _a === void 0 ? void 0 : _a.find(function (p) { var _a; return p.currency_code.toLowerCase() === ((_a = region === null || region === void 0 ? void 0 : region.currency_code) === null || _a === void 0 ? void 0 : _a.toLowerCase()); });
    return (price === null || price === void 0 ? void 0 : price.amount) || 0;
};
exports.getVariantPrice = getVariantPrice;
/**
 * Takes an amount, a region, and returns the amount as a decimal including or excluding taxes
 */
var computeAmount = function (_a) {
    var amount = _a.amount, region = _a.region, _b = _a.includeTaxes, includeTaxes = _b === void 0 ? true : _b;
    var toDecimal = convertToDecimal(amount, region);
    var taxRate = includeTaxes ? getTaxRate(region) : 0;
    var amountWithTaxes = toDecimal * (1 + taxRate);
    return amountWithTaxes;
};
exports.computeAmount = computeAmount;
/**
 * Takes an amount and a region, and converts the amount to a localized decimal format
 */
var formatAmount = function (_a) {
    var amount = _a.amount, region = _a.region, _b = _a.includeTaxes, includeTaxes = _b === void 0 ? true : _b, rest = __rest(_a, ["amount", "region", "includeTaxes"]);
    var taxAwareAmount = (0, exports.computeAmount)({
        amount: amount,
        region: region,
        includeTaxes: includeTaxes,
    });
    return convertToLocale(__assign({ amount: taxAwareAmount, currency_code: region.currency_code }, rest));
};
exports.formatAmount = formatAmount;
var convertToDecimal = function (amount, region) {
    var _a;
    var divisor = constants_1.noDivisionCurrencies.includes((_a = region === null || region === void 0 ? void 0 : region.currency_code) === null || _a === void 0 ? void 0 : _a.toLowerCase())
        ? 1
        : 100;
    return Math.floor(amount) / divisor;
};
var getTaxRate = function (region) {
    return region && !(0, isEmpty_1.isEmpty)(region) ? (region === null || region === void 0 ? void 0 : region.tax_rate) / 100 : 0;
};
var convertToLocale = function (_a) {
    var amount = _a.amount, currency_code = _a.currency_code, minimumFractionDigits = _a.minimumFractionDigits, maximumFractionDigits = _a.maximumFractionDigits, _b = _a.locale, locale = _b === void 0 ? "en-US" : _b;
    return currency_code && !(0, isEmpty_1.isEmpty)(currency_code)
        ? new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency_code,
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits,
        }).format(amount)
        : amount.toString();
};
