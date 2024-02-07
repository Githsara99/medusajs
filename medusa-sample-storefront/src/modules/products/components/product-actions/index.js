"use client";
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
var ui_1 = require("@medusajs/ui");
var lodash_1 = require("lodash");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var use_in_view_1 = require("@lib/hooks/use-in-view");
var actions_1 = require("@modules/cart/actions");
var divider_1 = require("@modules/common/components/divider");
var option_select_1 = require("@modules/products/components/option-select");
var mobile_actions_1 = require("../mobile-actions");
var product_price_1 = require("../product-price");
function ProductActions(_a) {
    var _this = this;
    var product = _a.product, region = _a.region;
    var _b = (0, react_1.useState)({}), options = _b[0], setOptions = _b[1];
    var _c = (0, react_1.useState)(false), isAdding = _c[0], setIsAdding = _c[1];
    var countryCode = (0, navigation_1.useParams)().countryCode;
    var variants = product.variants;
    // initialize the option state
    (0, react_1.useEffect)(function () {
        var _a;
        var optionObj = {};
        for (var _i = 0, _b = product.options || []; _i < _b.length; _i++) {
            var option = _b[_i];
            Object.assign(optionObj, (_a = {}, _a[option.id] = undefined, _a));
        }
        setOptions(optionObj);
    }, [product]);
    // memoized record of the product's variants
    var variantRecord = (0, react_1.useMemo)(function () {
        var map = {};
        for (var _i = 0, variants_1 = variants; _i < variants_1.length; _i++) {
            var variant_1 = variants_1[_i];
            if (!variant_1.options || !variant_1.id)
                continue;
            var temp = {};
            for (var _a = 0, _b = variant_1.options; _a < _b.length; _a++) {
                var option = _b[_a];
                temp[option.option_id] = option.value;
            }
            map[variant_1.id] = temp;
        }
        return map;
    }, [variants]);
    // memoized function to check if the current options are a valid variant
    var variant = (0, react_1.useMemo)(function () {
        var variantId = undefined;
        for (var _i = 0, _a = Object.keys(variantRecord); _i < _a.length; _i++) {
            var key = _a[_i];
            if ((0, lodash_1.isEqual)(variantRecord[key], options)) {
                variantId = key;
            }
        }
        return variants.find(function (v) { return v.id === variantId; });
    }, [options, variantRecord, variants]);
    // if product only has one variant, then select it
    (0, react_1.useEffect)(function () {
        if (variants.length === 1 && variants[0].id) {
            setOptions(variantRecord[variants[0].id]);
        }
    }, [variants, variantRecord]);
    // update the options when a variant is selected
    var updateOptions = function (update) {
        setOptions(__assign(__assign({}, options), update));
    };
    // check if the selected variant is in stock
    var inStock = (0, react_1.useMemo)(function () {
        if (variant && !variant.inventory_quantity) {
            return false;
        }
        if (variant && variant.allow_backorder === false) {
            return true;
        }
    }, [variant]);
    var actionsRef = (0, react_1.useRef)(null);
    var inView = (0, use_in_view_1.useIntersection)(actionsRef, "0px");
    // add the selected variant to the cart
    var handleAddToCart = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(variant === null || variant === void 0 ? void 0 : variant.id))
                        return [2 /*return*/];
                    setIsAdding(true);
                    return [4 /*yield*/, (0, actions_1.addToCart)({
                            variantId: variant.id,
                            quantity: 1,
                            countryCode: countryCode,
                        })];
                case 1:
                    _a.sent();
                    setIsAdding(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (<>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <div>
          {product.variants.length > 1 && (<div className="flex flex-col gap-y-4">
              {(product.options || []).map(function (option) {
                return (<div key={option.id}>
                    <option_select_1.default option={option} current={options[option.id]} updateOption={updateOptions} title={option.title}/>
                  </div>);
            })}
              <divider_1.default />
            </div>)}
        </div>

        <product_price_1.default product={product} variant={variant} region={region}/>

        <ui_1.Button onClick={handleAddToCart} disabled={!inStock || !variant} variant="primary" className="w-full h-10" isLoading={isAdding}>
          {!variant
            ? "Select variant"
            : !inStock
                ? "Out of stock"
                : "Add to cart"}
        </ui_1.Button>
        <mobile_actions_1.default product={product} variant={variant} region={region} options={options} updateOptions={updateOptions} inStock={inStock} handleAddToCart={handleAddToCart} isAdding={isAdding} show={!inView}/>
      </div>
    </>);
}
exports.default = ProductActions;
