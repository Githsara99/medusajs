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
exports.metadata = void 0;
var data_1 = require("@lib/data");
var featured_products_1 = require("@modules/home/components/featured-products");
var hero_1 = require("@modules/home/components/hero");
var actions_1 = require("app/actions");
exports.metadata = {
    title: "Medusa Next.js Starter Template",
    description: "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
};
var getCollectionsWithProducts = function (countryCode) { return __awaiter(void 0, void 0, void 0, function () {
    var collections, collectionIds;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, data_1.getCollectionsList)(0, 3).then(function (collections) { return collections; })];
            case 1:
                collections = (_a.sent()).collections;
                if (!collections) {
                    return [2 /*return*/, null];
                }
                collectionIds = collections.map(function (collection) { return collection.id; });
                return [4 /*yield*/, Promise.all(collectionIds.map(function (id) {
                        return (0, data_1.getProductsList)({
                            queryParams: { collection_id: [id] },
                            countryCode: countryCode,
                        });
                    })).then(function (responses) {
                        return responses.forEach(function (_a) {
                            var response = _a.response, queryParams = _a.queryParams;
                            var collection;
                            if (collections) {
                                collection = collections.find(function (collection) { var _a; return collection.id === ((_a = queryParams === null || queryParams === void 0 ? void 0 : queryParams.collection_id) === null || _a === void 0 ? void 0 : _a[0]); });
                            }
                            if (!collection) {
                                return;
                            }
                            collection.products = response.products;
                        });
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/, collections];
        }
    });
}); };
function Home(_a) {
    var countryCode = _a.params.countryCode;
    return __awaiter(this, void 0, void 0, function () {
        var collections, region;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getCollectionsWithProducts(countryCode)];
                case 1:
                    collections = _b.sent();
                    return [4 /*yield*/, (0, actions_1.getRegion)(countryCode)];
                case 2:
                    region = _b.sent();
                    if (!collections || !region) {
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/, (<>
      <hero_1.default />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <featured_products_1.default collections={collections} region={region}/>
        </ul>
      </div>
    </>)];
            }
        });
    });
}
exports.default = Home;
