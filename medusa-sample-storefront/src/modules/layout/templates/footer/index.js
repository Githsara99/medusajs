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
var ui_1 = require("@medusajs/ui");
var data_1 = require("@lib/data");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var medusa_cta_1 = require("../../components/medusa-cta");
var fetchCollections = function () { return __awaiter(void 0, void 0, void 0, function () {
    var collections;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, data_1.getCollectionsList)()];
            case 1:
                collections = (_a.sent()).collections;
                return [2 /*return*/, collections];
        }
    });
}); };
var fetchCategories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var product_categories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, data_1.getCategoriesList)()];
            case 1:
                product_categories = (_a.sent()).product_categories;
                return [2 /*return*/, product_categories];
        }
    });
}); };
function Footer() {
    return __awaiter(this, void 0, void 0, function () {
        var productCollections, productCategories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchCollections().then(function (collections) { return collections; })];
                case 1:
                    productCollections = _a.sent();
                    return [4 /*yield*/, fetchCategories().then(function (categories) { return categories; })];
                case 2:
                    productCategories = _a.sent();
                    return [2 /*return*/, (<footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <localized_client_link_1.default href="/" className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase">
              Medusa Store
            </localized_client_link_1.default>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && (productCategories === null || productCategories === void 0 ? void 0 : productCategories.length) > 0 && (<div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {productCategories === null || productCategories === void 0 ? void 0 : productCategories.slice(0, 6).map(function (c) {
                                    var _a;
                                    if (c.parent_category) {
                                        return;
                                    }
                                    var children = ((_a = c.category_children) === null || _a === void 0 ? void 0 : _a.map(function (child) { return ({
                                        name: child.name,
                                        handle: child.handle,
                                        id: child.id,
                                    }); })) || null;
                                    return (<li className="flex flex-col gap-2 text-ui-fg-subtle txt-small" key={c.id}>
                        <localized_client_link_1.default className={(0, ui_1.clx)("hover:text-ui-fg-base", children && "txt-small-plus")} href={"/categories/".concat(c.handle)}>
                          {c.name}
                        </localized_client_link_1.default>
                        {children && (<ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                                                children.map(function (child) { return (<li key={child.id}>
                                  <localized_client_link_1.default className="hover:text-ui-fg-base" href={"/categories/".concat(child.handle)}>
                                    {child.name}
                                  </localized_client_link_1.default>
                                </li>); })}
                          </ul>)}
                      </li>);
                                })}
                </ul>
              </div>)}
            {productCollections && productCollections.length > 0 && (<div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul className={(0, ui_1.clx)("grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small", {
                                    "grid-cols-2": ((productCollections === null || productCollections === void 0 ? void 0 : productCollections.length) || 0) > 3,
                                })}>
                  {productCollections === null || productCollections === void 0 ? void 0 : productCollections.slice(0, 6).map(function (c) { return (<li key={c.id}>
                      <localized_client_link_1.default className="hover:text-ui-fg-base" href={"/collections/".concat(c.handle)}>
                        {c.title}
                      </localized_client_link_1.default>
                    </li>); })}
                </ul>
              </div>)}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a href="https://github.com/medusajs" target="_blank" rel="noreferrer" className="hover:text-ui-fg-base">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://docs.medusajs.com" target="_blank" rel="noreferrer" className="hover:text-ui-fg-base">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/medusajs/nextjs-starter-medusa" target="_blank" rel="noreferrer" className="hover:text-ui-fg-base">
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <ui_1.Text className="txt-compact-small">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </ui_1.Text>
          <medusa_cta_1.default />
        </div>
      </div>
    </footer>)];
            }
        });
    });
}
exports.default = Footer;
