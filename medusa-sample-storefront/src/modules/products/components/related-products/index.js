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
var actions_1 = require("app/actions");
var product_preview_1 = require("../product-preview");
function RelatedProducts(_a) {
    var product = _a.product, countryCode = _a.countryCode;
    return __awaiter(this, void 0, void 0, function () {
        var region, setQueryParams, queryParams, productPreviews;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, actions_1.getRegion)(countryCode)];
                case 1:
                    region = _b.sent();
                    if (!region) {
                        return [2 /*return*/, null];
                    }
                    setQueryParams = function () {
                        var params = {};
                        if (region === null || region === void 0 ? void 0 : region.id) {
                            params.region_id = region.id;
                        }
                        if (region === null || region === void 0 ? void 0 : region.currency_code) {
                            params.currency_code = region.currency_code;
                        }
                        if (product.collection_id) {
                            params.collection_id = [product.collection_id];
                        }
                        if (product.tags) {
                            params.tags = product.tags.map(function (t) { return t.value; });
                        }
                        params.is_giftcard = false;
                        return params;
                    };
                    queryParams = setQueryParams();
                    return [4 /*yield*/, (0, data_1.getProductsList)({
                            queryParams: queryParams,
                            countryCode: countryCode,
                        }).then(function (_a) {
                            var response = _a.response;
                            return response.products.filter(function (productPreview) { return productPreview.id !== product.id; });
                        })];
                case 2:
                    productPreviews = _b.sent();
                    if (!productPreviews.length) {
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/, (<div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-base-regular text-gray-600 mb-6">
          Related products
        </span>
        <p className="text-2xl-regular text-ui-fg-base max-w-lg">
          You might also want to check out these products.
        </p>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {productPreviews.map(function (productPreview) { return (<li key={productPreview.id}>
            <product_preview_1.default region={region} productPreview={productPreview}/>
          </li>); })}
      </ul>
    </div>)];
            }
        });
    });
}
exports.default = RelatedProducts;
