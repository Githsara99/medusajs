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
exports.resetOnboardingState = exports.updateRegion = exports.getRegion = void 0;
var cache_1 = require("next/cache");
var headers_1 = require("next/headers");
var navigation_1 = require("next/navigation");
var data_1 = require("@lib/data");
/**
 * Retrieves the region based on the countryCode path param
 */
function getRegion(countryCode) {
    return __awaiter(this, void 0, void 0, function () {
        var regions, regionMap_1, region, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, data_1.listRegions)()];
                case 1:
                    regions = _a.sent();
                    if (!regions) {
                        return [2 /*return*/, null];
                    }
                    regionMap_1 = new Map();
                    regions.forEach(function (region) {
                        region.countries.forEach(function (c) {
                            regionMap_1.set(c.iso_2, region);
                        });
                    });
                    region = countryCode
                        ? regionMap_1.get(countryCode)
                        : regionMap_1.get("us");
                    return [2 /*return*/, region];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1.toString());
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getRegion = getRegion;
/**
 * Updates the regionId cookie and revalidates the regions cache
 * @param regionId
 * @param countryCode
 */
function updateRegion(countryCode, currentPath) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, region, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    return [4 /*yield*/, getRegion(countryCode)];
                case 1:
                    region = _b.sent();
                    if (!region) {
                        return [2 /*return*/, null];
                    }
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 5, , 6]);
                    if (!cartId) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, data_1.updateCart)(cartId, { region_id: region.id })];
                case 3:
                    _b.sent();
                    (0, cache_1.revalidateTag)("cart");
                    _b.label = 4;
                case 4:
                    (0, cache_1.revalidateTag)("regions");
                    (0, cache_1.revalidateTag)("products");
                    return [3 /*break*/, 6];
                case 5:
                    e_2 = _b.sent();
                    return [2 /*return*/, "Error updating region"];
                case 6:
                    (0, navigation_1.redirect)("/".concat(countryCode).concat(currentPath));
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateRegion = updateRegion;
function resetOnboardingState(orderId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            (0, headers_1.cookies)().set("_medusa_onboarding", "false", { maxAge: -1 });
            (0, navigation_1.redirect)("http://localhost:7001/a/orders/".concat(orderId));
            return [2 /*return*/];
        });
    });
}
exports.resetOnboardingState = resetOnboardingState;
