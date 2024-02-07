"use server";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrichLineItems = exports.deleteLineItem = exports.updateLineItem = exports.addToCart = exports.retrieveCart = exports.getOrSetCart = void 0;
var lodash_1 = require("lodash");
var cache_1 = require("next/cache");
var headers_1 = require("next/headers");
var data_1 = require("@lib/data");
var actions_1 = require("app/actions");
/**
 * Retrieves the cart based on the cartId cookie
 *
 * @returns {Promise<Cart>} The cart
 * @example
 * const cart = await getOrSetCart()
 */
function getOrSetCart(countryCode) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, cart, region, region_id;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, data_1.getCart)(cartId).then(function (cart) { return cart; })];
                case 1:
                    cart = _b.sent();
                    _b.label = 2;
                case 2: return [4 /*yield*/, (0, actions_1.getRegion)(countryCode)];
                case 3:
                    region = _b.sent();
                    if (!region) {
                        return [2 /*return*/, null];
                    }
                    region_id = region.id;
                    if (!!cart) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0, data_1.createCart)({ region_id: region_id }).then(function (res) { return res; })];
                case 4:
                    cart = _b.sent();
                    cart && (0, headers_1.cookies)().set("_medusa_cart_id", cart.id);
                    (0, cache_1.revalidateTag)("cart");
                    _b.label = 5;
                case 5:
                    if (!(cart && (cart === null || cart === void 0 ? void 0 : cart.region_id) !== region_id)) return [3 /*break*/, 7];
                    return [4 /*yield*/, (0, data_1.updateCart)(cart.id, { region_id: region_id })];
                case 6:
                    _b.sent();
                    (0, cache_1.revalidateTag)("cart");
                    _b.label = 7;
                case 7: return [2 /*return*/, cart];
            }
        });
    });
}
exports.getOrSetCart = getOrSetCart;
function retrieveCart() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, cart, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId) {
                        return [2 /*return*/, null];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.getCart)(cartId).then(function (cart) { return cart; })];
                case 2:
                    cart = _b.sent();
                    return [2 /*return*/, cart];
                case 3:
                    e_1 = _b.sent();
                    console.log(e_1);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.retrieveCart = retrieveCart;
function addToCart(_a) {
    var variantId = _a.variantId, quantity = _a.quantity, countryCode = _a.countryCode;
    return __awaiter(this, void 0, void 0, function () {
        var cart, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getOrSetCart(countryCode).then(function (cart) { return cart; })];
                case 1:
                    cart = _b.sent();
                    if (!cart) {
                        return [2 /*return*/, "Missing cart ID"];
                    }
                    if (!variantId) {
                        return [2 /*return*/, "Missing product variant ID"];
                    }
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, (0, data_1.addItem)({ cartId: cart.id, variantId: variantId, quantity: quantity })];
                case 3:
                    _b.sent();
                    (0, cache_1.revalidateTag)("cart");
                    return [3 /*break*/, 5];
                case 4:
                    e_2 = _b.sent();
                    return [2 /*return*/, "Error adding item to cart"];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.addToCart = addToCart;
function updateLineItem(_a) {
    var _b;
    var lineId = _a.lineId, quantity = _a.quantity;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, e_3;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    cartId = (_b = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _b === void 0 ? void 0 : _b.value;
                    if (!cartId) {
                        return [2 /*return*/, "Missing cart ID"];
                    }
                    if (!lineId) {
                        return [2 /*return*/, "Missing lineItem ID"];
                    }
                    if (!cartId) {
                        return [2 /*return*/, "Missing cart ID"];
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.updateItem)({ cartId: cartId, lineId: lineId, quantity: quantity })];
                case 2:
                    _c.sent();
                    (0, cache_1.revalidateTag)("cart");
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _c.sent();
                    return [2 /*return*/, e_3.toString()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateLineItem = updateLineItem;
function deleteLineItem(lineId) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId) {
                        return [2 /*return*/, "Missing cart ID"];
                    }
                    if (!lineId) {
                        return [2 /*return*/, "Missing lineItem ID"];
                    }
                    if (!cartId) {
                        return [2 /*return*/, "Missing cart ID"];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.removeItem)({ cartId: cartId, lineId: lineId })];
                case 2:
                    _b.sent();
                    (0, cache_1.revalidateTag)("cart");
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _b.sent();
                    return [2 /*return*/, "Error deleting line item"];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteLineItem = deleteLineItem;
function enrichLineItems(lineItems, regionId) {
    return __awaiter(this, void 0, void 0, function () {
        var queryParams, products, enrichedItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queryParams = {
                        ids: lineItems.map(function (lineItem) { return lineItem.variant.product_id; }),
                        regionId: regionId,
                    };
                    return [4 /*yield*/, (0, data_1.getProductsById)(queryParams)
                        // If there are no line items or products, return an empty array
                    ];
                case 1:
                    products = _a.sent();
                    // If there are no line items or products, return an empty array
                    if (!(lineItems === null || lineItems === void 0 ? void 0 : lineItems.length) || !products) {
                        return [2 /*return*/, []];
                    }
                    enrichedItems = lineItems.map(function (item) {
                        var product = products.find(function (p) { return p.id === item.variant.product_id; });
                        var variant = product === null || product === void 0 ? void 0 : product.variants.find(function (v) { return v.id === item.variant_id; });
                        // If product or variant is not found, return the original item
                        if (!product || !variant) {
                            return item;
                        }
                        // If product and variant are found, enrich the item
                        return __assign(__assign({}, item), { variant: __assign(__assign({}, variant), { product: (0, lodash_1.omit)(product, "variants") }) });
                    });
                    return [2 /*return*/, enrichedItems];
            }
        });
    });
}
exports.enrichLineItems = enrichLineItems;
