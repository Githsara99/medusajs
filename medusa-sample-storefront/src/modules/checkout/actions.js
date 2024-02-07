"use server";
"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeOrder = exports.setPaymentMethod = exports.setShippingMethod = exports.setAddresses = exports.submitDiscountForm = exports.removeGiftCard = exports.removeDiscount = exports.applyGiftCard = exports.applyDiscount = exports.cartUpdate = void 0;
var headers_1 = require("next/headers");
var data_1 = require("@lib/data");
var cache_1 = require("next/cache");
var navigation_1 = require("next/navigation");
function cartUpdate(data) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId)
                        return [2 /*return*/, "No cartId cookie found"];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.updateCart)(cartId, data)];
                case 2:
                    _b.sent();
                    (0, cache_1.revalidateTag)("cart");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    return [2 /*return*/, error_1.toString()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.cartUpdate = cartUpdate;
function applyDiscount(code) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId)
                        return [2 /*return*/, "No cartId cookie found"];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.updateCart)(cartId, { discounts: [{ code: code }] }).then(function () {
                            (0, cache_1.revalidateTag)("cart");
                        })];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    throw error_2;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.applyDiscount = applyDiscount;
function applyGiftCard(code) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId)
                        return [2 /*return*/, "No cartId cookie found"];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.updateCart)(cartId, { gift_cards: [{ code: code }] }).then(function () {
                            (0, cache_1.revalidateTag)("cart");
                        })];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _b.sent();
                    throw error_3;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.applyGiftCard = applyGiftCard;
function removeDiscount(code) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId)
                        return [2 /*return*/, "No cartId cookie found"];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.deleteDiscount)(cartId, code)];
                case 2:
                    _b.sent();
                    (0, cache_1.revalidateTag)("cart");
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _b.sent();
                    throw error_4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.removeDiscount = removeDiscount;
function removeGiftCard(codeToRemove, giftCards) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, error_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId)
                        return [2 /*return*/, "No cartId cookie found"];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.updateCart)(cartId, {
                            gift_cards: __spreadArray([], giftCards, true).filter(function (gc) { return gc.code !== codeToRemove; })
                                .map(function (gc) { return ({ code: gc.code }); }),
                        }).then(function () {
                            (0, cache_1.revalidateTag)("cart");
                        })];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _b.sent();
                    throw error_5;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.removeGiftCard = removeGiftCard;
function submitDiscountForm(currentState, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var code, error_6;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = formData.get("code");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, applyDiscount(code).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, applyGiftCard(code)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, null];
                case 3:
                    error_6 = _a.sent();
                    return [2 /*return*/, error_6.toString()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.submitDiscountForm = submitDiscountForm;
function setAddresses(currentState, formData) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, data, sameAsBilling, error_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!formData)
                        return [2 /*return*/, "No form data received"];
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId)
                        return [2 /*return*/, { message: "No cartId cookie found" }];
                    data = {
                        shipping_address: {
                            first_name: formData.get("shipping_address.first_name"),
                            last_name: formData.get("shipping_address.last_name"),
                            address_1: formData.get("shipping_address.address_1"),
                            address_2: "",
                            company: formData.get("shipping_address.company"),
                            postal_code: formData.get("shipping_address.postal_code"),
                            city: formData.get("shipping_address.city"),
                            country_code: formData.get("shipping_address.country_code"),
                            province: formData.get("shipping_address.province"),
                            phone: formData.get("shipping_address.phone"),
                        },
                        email: formData.get("email"),
                    };
                    sameAsBilling = formData.get("same_as_billing");
                    if (sameAsBilling === "on")
                        data.billing_address = data.shipping_address;
                    if (sameAsBilling !== "on")
                        data.billing_address = {
                            first_name: formData.get("billing_address.first_name"),
                            last_name: formData.get("billing_address.last_name"),
                            address_1: formData.get("billing_address.address_1"),
                            address_2: "",
                            company: formData.get("billing_address.company"),
                            postal_code: formData.get("billing_address.postal_code"),
                            city: formData.get("billing_address.city"),
                            country_code: formData.get("billing_address.country_code"),
                            province: formData.get("billing_address.province"),
                            phone: formData.get("billing_address.phone"),
                        };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.updateCart)(cartId, data)];
                case 2:
                    _b.sent();
                    (0, cache_1.revalidateTag)("cart");
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _b.sent();
                    return [2 /*return*/, error_7.toString()];
                case 4:
                    (0, navigation_1.redirect)("/".concat(formData.get("shipping_address.country_code"), "/checkout?step=delivery"));
                    return [2 /*return*/];
            }
        });
    });
}
exports.setAddresses = setAddresses;
function setShippingMethod(shippingMethodId) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, error_8;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId)
                        throw new Error("No cartId cookie found");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.addShippingMethod)({ cartId: cartId, shippingMethodId: shippingMethodId })];
                case 2:
                    _b.sent();
                    (0, cache_1.revalidateTag)("cart");
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _b.sent();
                    throw error_8;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.setShippingMethod = setShippingMethod;
function setPaymentMethod(providerId) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, cart, error_9;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId)
                        throw new Error("No cartId cookie found");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.setPaymentSession)({ cartId: cartId, providerId: providerId })];
                case 2:
                    cart = _b.sent();
                    (0, cache_1.revalidateTag)("cart");
                    return [2 /*return*/, cart];
                case 3:
                    error_9 = _b.sent();
                    throw error_9;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.setPaymentMethod = setPaymentMethod;
function placeOrder() {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, cart, error_10, countryCode;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId)
                        throw new Error("No cartId cookie found");
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.completeCart)(cartId)];
                case 2:
                    cart = _d.sent();
                    (0, cache_1.revalidateTag)("cart");
                    return [3 /*break*/, 4];
                case 3:
                    error_10 = _d.sent();
                    throw error_10;
                case 4:
                    if ((cart === null || cart === void 0 ? void 0 : cart.type) === "order") {
                        countryCode = (_c = (_b = cart.data.shipping_address) === null || _b === void 0 ? void 0 : _b.country_code) === null || _c === void 0 ? void 0 : _c.toLowerCase();
                        (0, headers_1.cookies)().set("_medusa_cart_id", "", { maxAge: -1 });
                        (0, navigation_1.redirect)("/".concat(countryCode, "/order/confirmed/").concat(cart === null || cart === void 0 ? void 0 : cart.data.id));
                    }
                    return [2 /*return*/, cart];
            }
        });
    });
}
exports.placeOrder = placeOrder;
