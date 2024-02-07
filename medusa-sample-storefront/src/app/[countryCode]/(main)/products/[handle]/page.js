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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMetadata = exports.generateStaticParams = void 0;
var navigation_1 = require("next/navigation");
var data_1 = require("@lib/data");
var templates_1 = require("@modules/products/templates");
var actions_1 = require("app/actions");
function generateStaticParams() {
    return __awaiter(this, void 0, void 0, function () {
        var countryCodes, products, staticParams;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, data_1.listRegions)().then(function (regions) {
                        return regions === null || regions === void 0 ? void 0 : regions.map(function (r) { return r.countries.map(function (c) { return c.iso_2; }); }).flat();
                    })];
                case 1:
                    countryCodes = _a.sent();
                    if (!countryCodes) {
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, Promise.all(countryCodes.map(function (countryCode) {
                            return (0, data_1.getProductsList)({ countryCode: countryCode });
                        })).then(function (responses) {
                            return responses.map(function (_a) {
                                var response = _a.response;
                                return response.products;
                            }).flat();
                        })];
                case 2:
                    products = _a.sent();
                    staticParams = countryCodes === null || countryCodes === void 0 ? void 0 : countryCodes.map(function (countryCode) {
                        return products.map(function (product) { return ({
                            countryCode: countryCode,
                            handle: product.handle,
                        }); });
                    }).flat();
                    return [2 /*return*/, staticParams];
            }
        });
    });
}
exports.generateStaticParams = generateStaticParams;
function generateMetadata(_a) {
    var params = _a.params;
    return __awaiter(this, void 0, void 0, function () {
        var handle, product;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    handle = params.handle;
                    return [4 /*yield*/, (0, data_1.getProductByHandle)(handle).then(function (product) { return product; })];
                case 1:
                    product = (_b.sent()).product;
                    if (!product) {
                        (0, navigation_1.notFound)();
                    }
                    return [2 /*return*/, {
                            title: "".concat(product.title, " | Medusa Store"),
                            description: "".concat(product.title),
                            openGraph: {
                                title: "".concat(product.title, " | Medusa Store"),
                                description: "".concat(product.title),
                                images: product.thumbnail ? [product.thumbnail] : [],
                            },
                        }];
            }
        });
    });
}
exports.generateMetadata = generateMetadata;
var getPricedProductByHandle = function (handle, region) { return __awaiter(void 0, void 0, void 0, function () {
    var product, pricedProduct;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, data_1.getProductByHandle)(handle).then(function (product) { return product; })];
            case 1:
                product = (_a.sent()).product;
                if (!product || !product.id) {
                    return [2 /*return*/, null];
                }
                return [4 /*yield*/, (0, data_1.retrievePricedProductById)({
                        id: product.id,
                        regionId: region.id,
                    })];
            case 2:
                pricedProduct = _a.sent();
                return [2 /*return*/, pricedProduct];
        }
    });
}); };
function ProductPage(_a) {
    var params = _a.params;
    return __awaiter(this, void 0, void 0, function () {
        var region, pricedProduct;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, actions_1.getRegion)(params.countryCode)];
                case 1:
                    region = _b.sent();
                    if (!region) {
                        (0, navigation_1.notFound)();
                    }
                    return [4 /*yield*/, getPricedProductByHandle(params.handle, region)];
                case 2:
                    pricedProduct = _b.sent();
                    if (!pricedProduct) {
                        (0, navigation_1.notFound)();
                    }
                    return [2 /*return*/, (<templates_1.default product={pricedProduct} region={region} countryCode={params.countryCode}/>)];
            }
        });
    });
}
exports.default = ProductPage;
