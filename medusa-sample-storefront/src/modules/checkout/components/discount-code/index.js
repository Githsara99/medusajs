"use client";
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
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var input_1 = require("@modules/common/components/input");
var trash_1 = require("@modules/common/icons/trash");
var error_message_1 = require("@modules/checkout/components/error-message");
var submit_button_1 = require("@modules/checkout/components/submit-button");
var actions_1 = require("@modules/checkout/actions");
var prices_1 = require("@lib/util/prices");
var DiscountCode = function (_a) {
    var cart = _a.cart;
    var _b = react_1.default.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var discounts = cart.discounts, gift_cards = cart.gift_cards, region = cart.region;
    var appliedDiscount = (0, react_1.useMemo)(function () {
        if (!discounts || !discounts.length) {
            return undefined;
        }
        switch (discounts[0].rule.type) {
            case "percentage":
                return "".concat(discounts[0].rule.value, "%");
            case "fixed":
                return "- ".concat((0, prices_1.formatAmount)({
                    amount: discounts[0].rule.value,
                    region: region,
                }));
            default:
                return "Free shipping";
        }
    }, [discounts, region]);
    var removeGiftCardCode = function (code) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, actions_1.removeGiftCard)(code, gift_cards)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var removeDiscountCode = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, actions_1.removeDiscount)(discounts[0].code)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var _c = (0, react_dom_1.useFormState)(actions_1.submitDiscountForm, null), message = _c[0], formAction = _c[1];
    return (<div className="w-full bg-white flex flex-col">
      <div className="txt-medium">
        {gift_cards.length > 0 && (<div className="flex flex-col mb-4">
            <ui_1.Heading className="txt-medium">Gift card(s) applied:</ui_1.Heading>
            {gift_cards === null || gift_cards === void 0 ? void 0 : gift_cards.map(function (gc) { return (<div className="flex items-center justify-between txt-small-plus" key={gc.id}>
                <ui_1.Text className="flex gap-x-1 items-baseline">
                  <span>Code: </span>
                  <span className="truncate">{gc.code}</span>
                </ui_1.Text>
                <ui_1.Text className="font-semibold">
                  {(0, prices_1.formatAmount)({
                    region: region,
                    amount: gc.balance,
                    includeTaxes: false,
                })}
                </ui_1.Text>
                <button className="flex items-center gap-x-2 !background-transparent !border-none" onClick={function () { return removeGiftCardCode(gc.code); }}>
                  <trash_1.default size={14}/>
                  <span className="sr-only">Remove gift card from order</span>
                </button>
              </div>); })}
          </div>)}

        {appliedDiscount ? (<div className="w-full flex items-center">
            <div className="flex flex-col w-full">
              <ui_1.Heading className="txt-medium">Discount applied:</ui_1.Heading>
              <div className="flex items-center justify-between w-full max-w-full">
                <ui_1.Text className="flex gap-x-1 items-baseline txt-small-plus w-4/5 pr-1">
                  <span>Code:</span>
                  <span className="truncate">{discounts[0].code}</span>
                  <span className="min-w-fit">({appliedDiscount})</span>
                </ui_1.Text>
                <button className="flex items-center" onClick={removeDiscountCode}>
                  <trash_1.default size={14}/>
                  <span className="sr-only">
                    Remove discount code from order
                  </span>
                </button>
              </div>
            </div>
          </div>) : (<form action={formAction} className="w-full">
            <ui_1.Label className="flex gap-x-1 my-2 items-center">
              <button onClick={function () { return setIsOpen(!isOpen); }} type="button" className="txt-medium text-ui-fg-interactive hover:text-ui-fg-interactive-hover">
                Add gift card or discount code
              </button>
              <ui_1.Tooltip content="You can add multiple gift cards, but only one discount code.">
                <icons_1.InformationCircleSolid color="var(--fg-muted)"/>
              </ui_1.Tooltip>
            </ui_1.Label>
            {isOpen && (<>
                <div className="flex w-full gap-x-2 items-center">
                  <input_1.default label="Please enter code" name="code" type="text" autoFocus={false}/>
                  <submit_button_1.SubmitButton variant="secondary">Apply</submit_button_1.SubmitButton>
                </div>
                <error_message_1.default error={message}/>
              </>)}
          </form>)}
      </div>
    </div>);
};
exports.default = DiscountCode;
