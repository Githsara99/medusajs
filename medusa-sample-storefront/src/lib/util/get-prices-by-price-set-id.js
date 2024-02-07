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
exports.getPricesByPriceSetId = void 0;
/**
 * Calculates the prices for a list of products, given a currency code.
 * @param products List of products to calculate prices for.
 * @param currency_code Currency code to calculate prices in.
 * @param pricingService Pricing service to use for calculating prices.
 * @returns The list of products with prices calculated.
 */
function getPricesByPriceSetId(_a) {
    var products = _a.products, currency_code = _a.currency_code, pricingService = _a.pricingService;
    return __awaiter(this, void 0, void 0, function () {
        var _i, products_1, product, _b, _c, variant, priceSetId, price;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _i = 0, products_1 = products;
                    _d.label = 1;
                case 1:
                    if (!(_i < products_1.length)) return [3 /*break*/, 6];
                    product = products_1[_i];
                    _b = 0, _c = product.variants;
                    _d.label = 2;
                case 2:
                    if (!(_b < _c.length)) return [3 /*break*/, 5];
                    variant = _c[_b];
                    priceSetId = variant.price.price_set.id;
                    return [4 /*yield*/, pricingService.calculatePrices({ id: [priceSetId] }, {
                            context: { currency_code: currency_code },
                        })];
                case 3:
                    price = (_d.sent())[0];
                    delete variant.price;
                    if (!price)
                        return [3 /*break*/, 4];
                    variant.price = price;
                    variant.calculated_price = price.amount;
                    _d.label = 4;
                case 4:
                    _b++;
                    return [3 /*break*/, 2];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/, products];
            }
        });
    });
}
exports.getPricesByPriceSetId = getPricesByPriceSetId;
