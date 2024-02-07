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
var react_1 = require("@headlessui/react");
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var prices_1 = require("@lib/util/prices");
var divider_1 = require("@modules/common/components/divider");
var radio_1 = require("@modules/common/components/radio");
var spinner_1 = require("@modules/common/icons/spinner");
var error_message_1 = require("@modules/checkout/components/error-message");
var actions_1 = require("@modules/checkout/actions");
var navigation_1 = require("next/navigation");
var react_2 = require("react");
var Shipping = function (_a) {
    var _b;
    var cart = _a.cart, availableShippingMethods = _a.availableShippingMethods;
    var _c = (0, react_2.useState)(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = (0, react_2.useState)(null), error = _d[0], setError = _d[1];
    var searchParams = (0, navigation_1.useSearchParams)();
    var router = (0, navigation_1.useRouter)();
    var pathname = (0, navigation_1.usePathname)();
    var isOpen = searchParams.get("step") === "delivery";
    var handleEdit = function () {
        router.push(pathname + "?step=delivery", { scroll: false });
    };
    var handleSubmit = function () {
        setIsLoading(true);
        router.push(pathname + "?step=payment", { scroll: false });
    };
    var set = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    return [4 /*yield*/, (0, actions_1.setShippingMethod)(id)
                            .then(function () {
                            setIsLoading(false);
                        })
                            .catch(function (err) {
                            setError(err.toString());
                            setIsLoading(false);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (value) {
        set(value);
    };
    (0, react_2.useEffect)(function () {
        setIsLoading(false);
        setError(null);
    }, [isOpen]);
    return (<div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <ui_1.Heading level="h2" className={(0, ui_1.clx)("flex flex-row text-3xl-regular gap-x-2 items-baseline", {
            "opacity-50 pointer-events-none select-none": !isOpen && cart.shipping_methods.length === 0,
        })}>
          Delivery
          {!isOpen && cart.shipping_methods.length > 0 && <icons_1.CheckCircleSolid />}
        </ui_1.Heading>
        {!isOpen &&
            (cart === null || cart === void 0 ? void 0 : cart.shipping_address) &&
            (cart === null || cart === void 0 ? void 0 : cart.billing_address) &&
            (cart === null || cart === void 0 ? void 0 : cart.email) && (<ui_1.Text>
              <button onClick={handleEdit} className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">
                Edit
              </button>
            </ui_1.Text>)}
      </div>
      {isOpen ? (<div>
          <div className="pb-8">
            <react_1.RadioGroup value={(_b = cart.shipping_methods[0]) === null || _b === void 0 ? void 0 : _b.shipping_option_id} onChange={function (value) { return handleChange(value); }}>
              {availableShippingMethods ? (availableShippingMethods.map(function (option) {
                var _a, _b;
                return (<react_1.RadioGroup.Option key={option.id} value={option.id} className={(0, ui_1.clx)("flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active", {
                        "border-ui-border-interactive": option.id ===
                            ((_a = cart.shipping_methods[0]) === null || _a === void 0 ? void 0 : _a.shipping_option_id),
                    })}>
                      <div className="flex items-center gap-x-4">
                        <radio_1.default checked={option.id ===
                        ((_b = cart.shipping_methods[0]) === null || _b === void 0 ? void 0 : _b.shipping_option_id)}/>
                        <span className="text-base-regular">{option.name}</span>
                      </div>
                      <span className="justify-self-end text-ui-fg-base">
                        {(0, prices_1.formatAmount)({
                        amount: option.amount,
                        region: cart === null || cart === void 0 ? void 0 : cart.region,
                        includeTaxes: false,
                    })}
                      </span>
                    </react_1.RadioGroup.Option>);
            })) : (<div className="flex flex-col items-center justify-center px-4 py-8 text-ui-fg-base">
                  <spinner_1.default />
                </div>)}
            </react_1.RadioGroup>
          </div>

          <error_message_1.default error={error}/>

          <ui_1.Button size="large" className="mt-6" onClick={handleSubmit} isLoading={isLoading} disabled={!cart.shipping_methods[0]}>
            Continue to payment
          </ui_1.Button>
        </div>) : (<div>
          <div className="text-small-regular">
            {cart && cart.shipping_methods.length > 0 && (<div className="flex flex-col w-1/3">
                <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Method
                </ui_1.Text>
                <ui_1.Text className="txt-medium text-ui-fg-subtle">
                  {cart.shipping_methods[0].shipping_option.name} (
                  {(0, prices_1.formatAmount)({
                    amount: cart.shipping_methods[0].price,
                    region: cart.region,
                    includeTaxes: false,
                })
                    .replace(/,/g, "")
                    .replace(/\./g, ",")}
                  )
                </ui_1.Text>
              </div>)}
          </div>
        </div>)}
      <divider_1.default className="mt-8"/>
    </div>);
};
exports.default = Shipping;
