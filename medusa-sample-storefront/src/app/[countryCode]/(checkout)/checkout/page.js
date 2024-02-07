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
var headers_1 = require("next/headers");
var navigation_1 = require("next/navigation");
var actions_1 = require("@modules/cart/actions");
var payment_wrapper_1 = require("@modules/checkout/components/payment-wrapper");
var checkout_form_1 = require("@modules/checkout/templates/checkout-form");
var checkout_summary_1 = require("@modules/checkout/templates/checkout-summary");
exports.metadata = {
    title: "Checkout",
};
var fetchCart = function () { return __awaiter(void 0, void 0, void 0, function () {
    var cart, enrichedItems;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, actions_1.retrieveCart)()];
            case 1:
                cart = _a.sent();
                if (!(cart === null || cart === void 0 ? void 0 : cart.items.length)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, actions_1.enrichLineItems)(cart === null || cart === void 0 ? void 0 : cart.items, cart === null || cart === void 0 ? void 0 : cart.region_id)];
            case 2:
                enrichedItems = _a.sent();
                cart.items = enrichedItems;
                _a.label = 3;
            case 3: return [2 /*return*/, cart];
        }
    });
}); };
function Checkout() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cartId, cart;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartId = (_a = (0, headers_1.cookies)().get("_medusa_cart_id")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartId) {
                        return [2 /*return*/, (0, navigation_1.notFound)()];
                    }
                    return [4 /*yield*/, fetchCart()];
                case 1:
                    cart = _b.sent();
                    if (!cart) {
                        return [2 /*return*/, (0, navigation_1.notFound)()];
                    }
                    return [2 /*return*/, (<div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
      <payment_wrapper_1.default cart={cart}>
        <checkout_form_1.default />
      </payment_wrapper_1.default>
      <checkout_summary_1.default />
    </div>)];
            }
        });
    });
}
exports.default = Checkout;
