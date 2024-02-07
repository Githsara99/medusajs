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
exports.generateMetadata = exports.generateStaticParams = exports.PRODUCT_LIMIT = void 0;
var navigation_1 = require("next/navigation");
var data_1 = require("@lib/data");
var templates_1 = require("@modules/collections/templates");
exports.PRODUCT_LIMIT = 12;
function generateStaticParams() {
    return __awaiter(this, void 0, void 0, function () {
        var collections, countryCodes, collectionHandles, staticParams;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, data_1.getCollectionsList)().then(function (collections) { return collections; })];
                case 1:
                    collections = (_a.sent()).collections;
                    if (!collections) {
                        return [2 /*return*/, []];
                    }
                    return [4 /*yield*/, (0, data_1.listRegions)().then(function (regions) {
                            return regions === null || regions === void 0 ? void 0 : regions.map(function (r) { return r.countries.map(function (c) { return c.iso_2; }); }).flat();
                        })];
                case 2:
                    countryCodes = _a.sent();
                    collectionHandles = collections.map(function (collection) { return collection.handle; });
                    staticParams = countryCodes === null || countryCodes === void 0 ? void 0 : countryCodes.map(function (countryCode) {
                        return collectionHandles.map(function (handle) { return ({
                            countryCode: countryCode,
                            handle: handle,
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
        var collection, metadata;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, data_1.getCollectionByHandle)(params.handle)];
                case 1:
                    collection = _b.sent();
                    if (!collection) {
                        (0, navigation_1.notFound)();
                    }
                    metadata = {
                        title: "".concat(collection.title, " | Medusa Store"),
                        description: "".concat(collection.title, " collection"),
                    };
                    return [2 /*return*/, metadata];
            }
        });
    });
}
exports.generateMetadata = generateMetadata;
function CollectionPage(_a) {
    var params = _a.params, searchParams = _a.searchParams;
    return __awaiter(this, void 0, void 0, function () {
        var sortBy, page, collection;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sortBy = searchParams.sortBy, page = searchParams.page;
                    return [4 /*yield*/, (0, data_1.getCollectionByHandle)(params.handle).then(function (collection) { return collection; })];
                case 1:
                    collection = _b.sent();
                    if (!collection) {
                        (0, navigation_1.notFound)();
                    }
                    return [2 /*return*/, (<templates_1.default collection={collection} page={page} sortBy={sortBy} countryCode={params.countryCode}/>)];
            }
        });
    });
}
exports.default = CollectionPage;
