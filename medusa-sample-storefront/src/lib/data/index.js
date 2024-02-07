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
exports.getProductsByCategoryHandle = exports.getCategoryByHandle = exports.getCategoriesList = exports.listCategories = exports.getProductsByCollectionHandle = exports.getCollectionByHandle = exports.getCollectionsList = exports.retrieveCollection = exports.getHomepageProducts = exports.getProductsListWithSort = exports.getProductsList = exports.getProductByHandle = exports.retrievePricedProductById = exports.getProductsById = exports.retrieveRegion = exports.listRegions = exports.listCustomerOrders = exports.updateShippingAddress = exports.deleteShippingAddress = exports.addShippingAddress = exports.updateCustomer = exports.createCustomer = exports.getCustomer = exports.getSession = exports.authenticate = exports.getToken = exports.addShippingMethod = exports.listShippingMethods = exports.retrieveOrder = exports.completeCart = exports.setPaymentSession = exports.createPaymentSessions = exports.deleteDiscount = exports.removeItem = exports.updateItem = exports.addItem = exports.getCart = exports.updateCart = exports.createCart = void 0;
var sort_products_1 = require("@lib/util/sort-products");
var transform_product_preview_1 = require("@lib/util/transform-product-preview");
var actions_1 = require("app/actions");
var config_1 = require("../config");
var medusa_error_1 = require("@lib/util/medusa-error");
var headers_1 = require("next/headers");
var emptyResponse = {
    response: { products: [], count: 0 },
    nextPage: null,
};
/**
 * Function for getting custom headers for Medusa API requests, including the JWT token and cache revalidation tags.
 *
 * @param tags
 * @returns custom headers for Medusa API requests
 */
var getMedusaHeaders = function (tags) {
    var _a;
    if (tags === void 0) { tags = []; }
    var headers = {
        next: {
            tags: tags,
        },
    };
    var token = (_a = (0, headers_1.cookies)().get("_medusa_jwt")) === null || _a === void 0 ? void 0 : _a.value;
    if (token) {
        headers.authorization = "Bearer ".concat(token);
    }
    return headers;
};
// Cart actions
function createCart(data) {
    if (data === void 0) { data = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["cart"]);
            return [2 /*return*/, config_1.medusaClient.carts
                    .create(data, headers)
                    .then(function (_a) {
                    var cart = _a.cart;
                    return cart;
                })
                    .catch(function (err) {
                    console.log(err);
                    return null;
                })];
        });
    });
}
exports.createCart = createCart;
function updateCart(cartId, data) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["cart"]);
            return [2 /*return*/, config_1.medusaClient.carts
                    .update(cartId, data, headers)
                    .then(function (_a) {
                    var cart = _a.cart;
                    return cart;
                })
                    .catch(function (error) { return (0, medusa_error_1.default)(error); })];
        });
    });
}
exports.updateCart = updateCart;
function getCart(cartId) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["cart"]);
            return [2 /*return*/, config_1.medusaClient.carts
                    .retrieve(cartId, headers)
                    .then(function (_a) {
                    var cart = _a.cart;
                    return cart;
                })
                    .catch(function (err) {
                    console.log(err);
                    return null;
                })];
        });
    });
}
exports.getCart = getCart;
function addItem(_a) {
    var cartId = _a.cartId, variantId = _a.variantId, quantity = _a.quantity;
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_b) {
            headers = getMedusaHeaders(["cart"]);
            return [2 /*return*/, config_1.medusaClient.carts.lineItems
                    .create(cartId, { variant_id: variantId, quantity: quantity }, headers)
                    .then(function (_a) {
                    var cart = _a.cart;
                    return cart;
                })
                    .catch(function (err) {
                    console.log(err);
                    return null;
                })];
        });
    });
}
exports.addItem = addItem;
function updateItem(_a) {
    var cartId = _a.cartId, lineId = _a.lineId, quantity = _a.quantity;
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_b) {
            headers = getMedusaHeaders(["cart"]);
            return [2 /*return*/, config_1.medusaClient.carts.lineItems
                    .update(cartId, lineId, { quantity: quantity }, headers)
                    .then(function (_a) {
                    var cart = _a.cart;
                    return cart;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.updateItem = updateItem;
function removeItem(_a) {
    var cartId = _a.cartId, lineId = _a.lineId;
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_b) {
            headers = getMedusaHeaders(["cart"]);
            return [2 /*return*/, config_1.medusaClient.carts.lineItems
                    .delete(cartId, lineId, headers)
                    .then(function (_a) {
                    var cart = _a.cart;
                    return cart;
                })
                    .catch(function (err) {
                    console.log(err);
                    return null;
                })];
        });
    });
}
exports.removeItem = removeItem;
function deleteDiscount(cartId, code) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["cart"]);
            return [2 /*return*/, config_1.medusaClient.carts
                    .deleteDiscount(cartId, code, headers)
                    .then(function (_a) {
                    var cart = _a.cart;
                    return cart;
                })
                    .catch(function (err) {
                    console.log(err);
                    return null;
                })];
        });
    });
}
exports.deleteDiscount = deleteDiscount;
function createPaymentSessions(cartId) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["cart"]);
            return [2 /*return*/, config_1.medusaClient.carts
                    .createPaymentSessions(cartId, headers)
                    .then(function (_a) {
                    var cart = _a.cart;
                    return cart;
                })
                    .catch(function (err) {
                    console.log(err);
                    return null;
                })];
        });
    });
}
exports.createPaymentSessions = createPaymentSessions;
function setPaymentSession(_a) {
    var cartId = _a.cartId, providerId = _a.providerId;
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_b) {
            headers = getMedusaHeaders(["cart"]);
            return [2 /*return*/, config_1.medusaClient.carts
                    .setPaymentSession(cartId, { provider_id: providerId }, headers)
                    .then(function (_a) {
                    var cart = _a.cart;
                    return cart;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.setPaymentSession = setPaymentSession;
function completeCart(cartId) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["cart"]);
            return [2 /*return*/, config_1.medusaClient.carts
                    .complete(cartId, headers)
                    .then(function (res) { return res; })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.completeCart = completeCart;
// Order actions
function retrieveOrder(id) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["order"]);
            return [2 /*return*/, config_1.medusaClient.orders
                    .retrieve(id, headers)
                    .then(function (_a) {
                    var order = _a.order;
                    return order;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.retrieveOrder = retrieveOrder;
// Shipping actions
function listShippingMethods(regionId, productIds) {
    return __awaiter(this, void 0, void 0, function () {
        var headers, product_ids;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["shipping"]);
            product_ids = productIds === null || productIds === void 0 ? void 0 : productIds.join(",");
            return [2 /*return*/, config_1.medusaClient.shippingOptions
                    .list({
                    region_id: regionId,
                    product_ids: product_ids,
                }, headers)
                    .then(function (_a) {
                    var shipping_options = _a.shipping_options;
                    return shipping_options;
                })
                    .catch(function (err) {
                    console.log(err);
                    return null;
                })];
        });
    });
}
exports.listShippingMethods = listShippingMethods;
function addShippingMethod(_a) {
    var cartId = _a.cartId, shippingMethodId = _a.shippingMethodId;
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_b) {
            headers = getMedusaHeaders(["cart"]);
            return [2 /*return*/, config_1.medusaClient.carts
                    .addShippingMethod(cartId, { option_id: shippingMethodId }, headers)
                    .then(function (_a) {
                    var cart = _a.cart;
                    return cart;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.addShippingMethod = addShippingMethod;
// Authentication actions
function getToken(credentials) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, config_1.medusaClient.auth
                    .getToken(credentials, {
                    next: {
                        tags: ["auth"],
                    },
                })
                    .then(function (_a) {
                    var access_token = _a.access_token;
                    access_token && (0, headers_1.cookies)().set("_medusa_jwt", access_token);
                    return access_token;
                })
                    .catch(function (err) {
                    throw new Error("Wrong email or password.");
                })];
        });
    });
}
exports.getToken = getToken;
function authenticate(credentials) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["auth"]);
            return [2 /*return*/, config_1.medusaClient.auth
                    .authenticate(credentials, headers)
                    .then(function (_a) {
                    var customer = _a.customer;
                    return customer;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.authenticate = authenticate;
function getSession() {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["auth"]);
            return [2 /*return*/, config_1.medusaClient.auth
                    .getSession(headers)
                    .then(function (_a) {
                    var customer = _a.customer;
                    return customer;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.getSession = getSession;
// Customer actions
function getCustomer() {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["customer"]);
            return [2 /*return*/, config_1.medusaClient.customers
                    .retrieve(headers)
                    .then(function (_a) {
                    var customer = _a.customer;
                    return customer;
                })
                    .catch(function (err) { return null; })];
        });
    });
}
exports.getCustomer = getCustomer;
function createCustomer(data) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["customer"]);
            return [2 /*return*/, config_1.medusaClient.customers
                    .create(data, headers)
                    .then(function (_a) {
                    var customer = _a.customer;
                    return customer;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.createCustomer = createCustomer;
function updateCustomer(data) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["customer"]);
            return [2 /*return*/, config_1.medusaClient.customers
                    .update(data, headers)
                    .then(function (_a) {
                    var customer = _a.customer;
                    return customer;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.updateCustomer = updateCustomer;
function addShippingAddress(data) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["customer"]);
            return [2 /*return*/, config_1.medusaClient.customers.addresses
                    .addAddress(data, headers)
                    .then(function (_a) {
                    var customer = _a.customer;
                    return customer;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.addShippingAddress = addShippingAddress;
function deleteShippingAddress(addressId) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["customer"]);
            return [2 /*return*/, config_1.medusaClient.customers.addresses
                    .deleteAddress(addressId, headers)
                    .then(function (_a) {
                    var customer = _a.customer;
                    return customer;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.deleteShippingAddress = deleteShippingAddress;
function updateShippingAddress(addressId, data) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["customer"]);
            return [2 /*return*/, config_1.medusaClient.customers.addresses
                    .updateAddress(addressId, data, headers)
                    .then(function (_a) {
                    var customer = _a.customer;
                    return customer;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.updateShippingAddress = updateShippingAddress;
function listCustomerOrders(limit, offset) {
    if (limit === void 0) { limit = 10; }
    if (offset === void 0) { offset = 0; }
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["customer"]);
            return [2 /*return*/, config_1.medusaClient.customers
                    .listOrders({ limit: limit, offset: offset }, headers)
                    .then(function (_a) {
                    var orders = _a.orders;
                    return orders;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.listCustomerOrders = listCustomerOrders;
// Region actions
function listRegions() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, config_1.medusaClient.regions
                    .list()
                    .then(function (_a) {
                    var regions = _a.regions;
                    return regions;
                })
                    .catch(function (err) {
                    console.log(err);
                    return null;
                })];
        });
    });
}
exports.listRegions = listRegions;
function retrieveRegion(id) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = getMedusaHeaders(["regions"]);
            return [2 /*return*/, config_1.medusaClient.regions
                    .retrieve(id, headers)
                    .then(function (_a) {
                    var region = _a.region;
                    return region;
                })
                    .catch(function (err) { return (0, medusa_error_1.default)(err); })];
        });
    });
}
exports.retrieveRegion = retrieveRegion;
// Product actions
function getProductsById(_a) {
    var ids = _a.ids, regionId = _a.regionId;
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_b) {
            headers = getMedusaHeaders(["products"]);
            return [2 /*return*/, config_1.medusaClient.products
                    .list({ id: ids, region_id: regionId }, headers)
                    .then(function (_a) {
                    var products = _a.products;
                    return products;
                })
                    .catch(function (err) {
                    console.log(err);
                    return null;
                })];
        });
    });
}
exports.getProductsById = getProductsById;
function retrievePricedProductById(_a) {
    var id = _a.id, regionId = _a.regionId;
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_b) {
            headers = getMedusaHeaders(["products"]);
            return [2 /*return*/, config_1.medusaClient.products
                    .retrieve("".concat(id, "?region_id=").concat(regionId), headers)
                    .then(function (_a) {
                    var product = _a.product;
                    return product;
                })
                    .catch(function (err) {
                    console.log(err);
                    return null;
                })];
        });
    });
}
exports.retrievePricedProductById = retrievePricedProductById;
function getProductByHandle(handle) {
    return __awaiter(this, void 0, void 0, function () {
        var headers, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = getMedusaHeaders(["products"]);
                    return [4 /*yield*/, config_1.medusaClient.products
                            .list({ handle: handle }, headers)
                            .then(function (_a) {
                            var products = _a.products;
                            return products[0];
                        })
                            .catch(function (err) {
                            throw err;
                        })];
                case 1:
                    product = _a.sent();
                    return [2 /*return*/, { product: product }];
            }
        });
    });
}
exports.getProductByHandle = getProductByHandle;
function getProductsList(_a) {
    var _b = _a.pageParam, pageParam = _b === void 0 ? 0 : _b, queryParams = _a.queryParams, countryCode = _a.countryCode;
    return __awaiter(this, void 0, void 0, function () {
        var limit, region, _c, products, count, transformedProducts, nextPage;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    limit = (queryParams === null || queryParams === void 0 ? void 0 : queryParams.limit) || 12;
                    return [4 /*yield*/, (0, actions_1.getRegion)(countryCode)];
                case 1:
                    region = _d.sent();
                    if (!region) {
                        return [2 /*return*/, emptyResponse];
                    }
                    return [4 /*yield*/, config_1.medusaClient.products
                            .list(__assign({ limit: limit, offset: pageParam, region_id: region.id }, queryParams), { next: { tags: ["products"] } })
                            .then(function (res) { return res; })
                            .catch(function (err) {
                            throw err;
                        })];
                case 2:
                    _c = _d.sent(), products = _c.products, count = _c.count;
                    transformedProducts = products.map(function (product) {
                        return (0, transform_product_preview_1.default)(product, region);
                    });
                    nextPage = count > pageParam + 1 ? pageParam + 1 : null;
                    return [2 /*return*/, {
                            response: { products: transformedProducts, count: count },
                            nextPage: nextPage,
                            queryParams: queryParams,
                        }];
            }
        });
    });
}
exports.getProductsList = getProductsList;
function getProductsListWithSort(_a) {
    var _b = _a.page, page = _b === void 0 ? 0 : _b, queryParams = _a.queryParams, _c = _a.sortBy, sortBy = _c === void 0 ? "created_at" : _c, countryCode = _a.countryCode;
    return __awaiter(this, void 0, void 0, function () {
        var limit, _d, products, count, sortedProducts, pageParam, nextPage, paginatedProducts;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    limit = (queryParams === null || queryParams === void 0 ? void 0 : queryParams.limit) || 12;
                    return [4 /*yield*/, getProductsList({
                            pageParam: 0,
                            queryParams: __assign(__assign({}, queryParams), { limit: 100 }),
                            countryCode: countryCode,
                        })];
                case 1:
                    _d = (_e.sent()).response, products = _d.products, count = _d.count;
                    sortedProducts = (0, sort_products_1.default)(products, sortBy);
                    pageParam = (page - 1) * limit;
                    nextPage = count > pageParam + limit ? pageParam + limit : null;
                    paginatedProducts = sortedProducts.slice(pageParam, pageParam + limit);
                    return [2 /*return*/, {
                            response: {
                                products: paginatedProducts,
                                count: count,
                            },
                            nextPage: nextPage,
                            queryParams: queryParams,
                        }];
            }
        });
    });
}
exports.getProductsListWithSort = getProductsListWithSort;
function getHomepageProducts(_a) {
    var collectionHandles = _a.collectionHandles, currencyCode = _a.currencyCode, countryCode = _a.countryCode;
    return __awaiter(this, void 0, void 0, function () {
        var collectionProductsMap, collections, _i, collectionHandles_1, handle, products;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    collectionProductsMap = new Map();
                    return [4 /*yield*/, getCollectionsList(0, 3)];
                case 1:
                    collections = (_b.sent()).collections;
                    if (!collectionHandles) {
                        collectionHandles = collections.map(function (collection) { return collection.handle; });
                    }
                    _i = 0, collectionHandles_1 = collectionHandles;
                    _b.label = 2;
                case 2:
                    if (!(_i < collectionHandles_1.length)) return [3 /*break*/, 5];
                    handle = collectionHandles_1[_i];
                    return [4 /*yield*/, getProductsByCollectionHandle({
                            handle: handle,
                            currencyCode: currencyCode,
                            countryCode: countryCode,
                            limit: 3,
                        })];
                case 3:
                    products = _b.sent();
                    collectionProductsMap.set(handle, products.response.products);
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, collectionProductsMap];
            }
        });
    });
}
exports.getHomepageProducts = getHomepageProducts;
// Collection actions
function retrieveCollection(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, config_1.medusaClient.collections
                    .retrieve(id, {
                    next: {
                        tags: ["collections"],
                    },
                })
                    .then(function (_a) {
                    var collection = _a.collection;
                    return collection;
                })
                    .catch(function (err) {
                    throw err;
                })];
        });
    });
}
exports.retrieveCollection = retrieveCollection;
function getCollectionsList(offset, limit) {
    if (offset === void 0) { offset = 0; }
    if (limit === void 0) { limit = 100; }
    return __awaiter(this, void 0, void 0, function () {
        var collections, count;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, config_1.medusaClient.collections
                        .list({ limit: limit, offset: offset }, { next: { tags: ["collections"] } })
                        .then(function (_a) {
                        var collections = _a.collections;
                        return collections;
                    })
                        .catch(function (err) {
                        throw err;
                    })];
                case 1:
                    collections = _a.sent();
                    count = collections.length;
                    return [2 /*return*/, {
                            collections: collections,
                            count: count,
                        }];
            }
        });
    });
}
exports.getCollectionsList = getCollectionsList;
function getCollectionByHandle(handle) {
    return __awaiter(this, void 0, void 0, function () {
        var collection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, config_1.medusaClient.collections
                        .list({ handle: [handle] }, { next: { tags: ["collections"] } })
                        .then(function (_a) {
                        var collections = _a.collections;
                        return collections[0];
                    })
                        .catch(function (err) {
                        throw err;
                    })];
                case 1:
                    collection = _a.sent();
                    return [2 /*return*/, collection];
            }
        });
    });
}
exports.getCollectionByHandle = getCollectionByHandle;
function getProductsByCollectionHandle(_a) {
    var _b = _a.pageParam, pageParam = _b === void 0 ? 0 : _b, _c = _a.limit, limit = _c === void 0 ? 100 : _c, handle = _a.handle, countryCode = _a.countryCode;
    return __awaiter(this, void 0, void 0, function () {
        var id, _d, response, nextPage;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, getCollectionByHandle(handle).then(function (collection) { return collection; })];
                case 1:
                    id = (_e.sent()).id;
                    return [4 /*yield*/, getProductsList({
                            pageParam: pageParam,
                            queryParams: { collection_id: [id], limit: limit },
                            countryCode: countryCode,
                        })
                            .then(function (res) { return res; })
                            .catch(function (err) {
                            throw err;
                        })];
                case 2:
                    _d = _e.sent(), response = _d.response, nextPage = _d.nextPage;
                    return [2 /*return*/, {
                            response: response,
                            nextPage: nextPage,
                        }];
            }
        });
    });
}
exports.getProductsByCollectionHandle = getProductsByCollectionHandle;
// Category actions
function listCategories() {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = {
                next: {
                    tags: ["collections"],
                },
            };
            return [2 /*return*/, config_1.medusaClient.productCategories
                    .list({ expand: "category_children" }, headers)
                    .then(function (_a) {
                    var product_categories = _a.product_categories;
                    return product_categories;
                })
                    .catch(function (err) {
                    throw err;
                })];
        });
    });
}
exports.listCategories = listCategories;
function getCategoriesList(offset, limit) {
    if (offset === void 0) { offset = 0; }
    if (limit === void 0) { limit = 100; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, product_categories, count;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, config_1.medusaClient.productCategories
                        .list({ limit: limit, offset: offset }, { next: { tags: ["categories"] } })
                        .catch(function (err) {
                        throw err;
                    })];
                case 1:
                    _a = _b.sent(), product_categories = _a.product_categories, count = _a.count;
                    return [2 /*return*/, {
                            product_categories: product_categories,
                            count: count,
                        }];
            }
        });
    });
}
exports.getCategoriesList = getCategoriesList;
function getCategoryByHandle(categoryHandle) {
    return __awaiter(this, void 0, void 0, function () {
        var handles, product_categories, _i, handles_1, handle, category;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    handles = categoryHandle.map(function (handle, index) {
                        return categoryHandle.slice(0, index + 1).join("/");
                    });
                    product_categories = [];
                    _i = 0, handles_1 = handles;
                    _a.label = 1;
                case 1:
                    if (!(_i < handles_1.length)) return [3 /*break*/, 4];
                    handle = handles_1[_i];
                    return [4 /*yield*/, config_1.medusaClient.productCategories
                            .list({
                            handle: handle,
                        }, {
                            next: {
                                tags: ["categories"],
                            },
                        })
                            .then(function (_a) {
                            var category = _a.product_categories[0];
                            return category;
                        })
                            .catch(function (err) {
                            return {};
                        })];
                case 2:
                    category = _a.sent();
                    product_categories.push(category);
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, {
                        product_categories: product_categories,
                    }];
            }
        });
    });
}
exports.getCategoryByHandle = getCategoryByHandle;
function getProductsByCategoryHandle(_a) {
    var _b = _a.pageParam, pageParam = _b === void 0 ? 0 : _b, handle = _a.handle, countryCode = _a.countryCode;
    return __awaiter(this, void 0, void 0, function () {
        var id, _c, response, nextPage;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, getCategoryByHandle([handle]).then(function (res) { return res.product_categories[0]; })];
                case 1:
                    id = (_d.sent()).id;
                    return [4 /*yield*/, getProductsList({
                            pageParam: pageParam,
                            queryParams: { category_id: [id] },
                            countryCode: countryCode,
                        })
                            .then(function (res) { return res; })
                            .catch(function (err) {
                            throw err;
                        })];
                case 2:
                    _c = _d.sent(), response = _c.response, nextPage = _c.nextPage;
                    return [2 /*return*/, {
                            response: response,
                            nextPage: nextPage,
                        }];
            }
        });
    });
}
exports.getProductsByCategoryHandle = getProductsByCategoryHandle;
