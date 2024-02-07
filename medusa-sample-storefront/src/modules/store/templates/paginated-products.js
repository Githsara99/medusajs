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
var data_1 = require("@lib/data");
var product_preview_1 = require("@modules/products/components/product-preview");
var pagination_1 = require("@modules/store/components/pagination");
var actions_1 = require("app/actions");
var PRODUCT_LIMIT = 12;
function PaginatedProducts(_a) {
    var sortBy = _a.sortBy, page = _a.page, collectionId = _a.collectionId, categoryId = _a.categoryId, productsIds = _a.productsIds, countryCode = _a.countryCode;
    return __awaiter(this, void 0, void 0, function () {
        var region, queryParams, _b, products, count, totalPages;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, actions_1.getRegion)(countryCode)];
                case 1:
                    region = _c.sent();
                    if (!region) {
                        return [2 /*return*/, null];
                    }
                    queryParams = {
                        limit: PRODUCT_LIMIT,
                    };
                    if (collectionId) {
                        queryParams["collection_id"] = [collectionId];
                    }
                    if (categoryId) {
                        queryParams["category_id"] = [categoryId];
                    }
                    if (productsIds) {
                        queryParams["id"] = productsIds;
                    }
                    return [4 /*yield*/, (0, data_1.getProductsListWithSort)({
                            page: page,
                            queryParams: queryParams,
                            sortBy: sortBy,
                            countryCode: countryCode,
                        })];
                case 2:
                    _b = (_c.sent()).response, products = _b.products, count = _b.count;
                    totalPages = Math.ceil(count / PRODUCT_LIMIT);
                    return [2 /*return*/, (<>
      <ul className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {products.map(function (p) {
                                return (<li key={p.id}>
              <product_preview_1.default productPreview={p} region={region}/>
            </li>);
                            })}
      </ul>
      {totalPages > 1 && <pagination_1.Pagination page={page} totalPages={totalPages}/>}
    </>)];
            }
        });
    });
}
exports.default = PaginatedProducts;
