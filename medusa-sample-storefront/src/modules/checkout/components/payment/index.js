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
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var react_2 = require("@headlessui/react");
var error_message_1 = require("@modules/checkout/components/error-message");
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var divider_1 = require("@modules/common/components/divider");
var spinner_1 = require("@modules/common/icons/spinner");
var payment_container_1 = require("@modules/checkout/components/payment-container");
var actions_1 = require("@modules/checkout/actions");
var constants_1 = require("@lib/constants");
var Payment = function (_a) {
    var _b, _c, _d, _e, _f;
    var cart = _a.cart;
    var _g = (0, react_1.useState)(false), isLoading = _g[0], setIsLoading = _g[1];
    var _h = (0, react_1.useState)(null), error = _h[0], setError = _h[1];
    var _j = (0, react_1.useState)(null), cardBrand = _j[0], setCardBrand = _j[1];
    var _k = (0, react_1.useState)(false), cardComplete = _k[0], setCardComplete = _k[1];
    var searchParams = (0, navigation_1.useSearchParams)();
    var router = (0, navigation_1.useRouter)();
    var pathname = (0, navigation_1.usePathname)();
    var isOpen = searchParams.get("step") === "payment";
    var isStripe = ((_b = cart === null || cart === void 0 ? void 0 : cart.payment_session) === null || _b === void 0 ? void 0 : _b.provider_id) === "stripe";
    var paymentReady = (cart === null || cart === void 0 ? void 0 : cart.payment_session) && (cart === null || cart === void 0 ? void 0 : cart.shipping_methods.length) !== 0;
    var useOptions = (0, react_1.useMemo)(function () {
        return {
            style: {
                base: {
                    fontFamily: "Inter, sans-serif",
                    color: "#424270",
                    "::placeholder": {
                        color: "rgb(107 114 128)",
                    },
                },
            },
            classes: {
                base: "pt-3 pb-1 block w-full h-11 px-4 mt-0 bg-ui-bg-field border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover transition-all duration-300 ease-in-out",
            },
        };
    }, []);
    var createQueryString = (0, react_1.useCallback)(function (name, value) {
        var params = new URLSearchParams(searchParams);
        params.set(name, value);
        return params.toString();
    }, [searchParams]);
    var set = function (providerId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    return [4 /*yield*/, (0, actions_1.setPaymentMethod)(providerId)
                            .catch(function (err) { return setError(err.toString()); })
                            .finally(function () {
                            if (providerId === "paypal")
                                return;
                            setIsLoading(false);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (providerId) {
        setError(null);
        set(providerId);
    };
    var handleEdit = function () {
        router.push(pathname + "?" + createQueryString("step", "payment"), {
            scroll: false,
        });
    };
    var handleSubmit = function () {
        setIsLoading(true);
        router.push(pathname + "?" + createQueryString("step", "review"), {
            scroll: false,
        });
    };
    (0, react_1.useEffect)(function () {
        setIsLoading(false);
        setError(null);
    }, [isOpen]);
    return (<div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <ui_1.Heading level="h2" className={(0, ui_1.clx)("flex flex-row text-3xl-regular gap-x-2 items-baseline", {
            "opacity-50 pointer-events-none select-none": !isOpen && !paymentReady,
        })}>
          Payment
          {!isOpen && paymentReady && <icons_1.CheckCircleSolid />}
        </ui_1.Heading>
        {!isOpen && paymentReady && (<ui_1.Text>
            <button onClick={handleEdit} className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">
              Edit
            </button>
          </ui_1.Text>)}
      </div>
      <div>
        {((_c = cart === null || cart === void 0 ? void 0 : cart.payment_sessions) === null || _c === void 0 ? void 0 : _c.length) ? (<div className={isOpen ? "block" : "hidden"}>
            <react_2.RadioGroup value={((_d = cart.payment_session) === null || _d === void 0 ? void 0 : _d.provider_id) || ""} onChange={function (value) { return handleChange(value); }}>
              {cart.payment_sessions
                .sort(function (a, b) {
                return a.provider_id > b.provider_id ? 1 : -1;
            })
                .map(function (paymentSession) {
                var _a;
                return (<payment_container_1.default paymentInfoMap={constants_1.paymentInfoMap} paymentSession={paymentSession} key={paymentSession.id} selectedPaymentOptionId={((_a = cart.payment_session) === null || _a === void 0 ? void 0 : _a.provider_id) || null}/>);
            })}
            </react_2.RadioGroup>

            {isStripe && (<div className="mt-5 transition-all duration-150 ease-in-out">
                <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Enter your card details:
                </ui_1.Text>

                <react_stripe_js_1.CardElement options={useOptions} onChange={function (e) {
                    var _a;
                    setCardBrand(e.brand &&
                        e.brand.charAt(0).toUpperCase() + e.brand.slice(1));
                    setError(((_a = e.error) === null || _a === void 0 ? void 0 : _a.message) || null);
                    setCardComplete(e.complete);
                }}/>
              </div>)}

            <error_message_1.default error={error}/>

            <ui_1.Button size="large" className="mt-6" onClick={handleSubmit} isLoading={isLoading} disabled={(isStripe && !cardComplete) || !cart.payment_session}>
              Continue to review
            </ui_1.Button>
          </div>) : (<div className="flex flex-col items-center justify-center px-4 py-16 text-ui-fg-base">
            <spinner_1.default />
          </div>)}

        <div className={isOpen ? "hidden" : "block"}>
          {cart && paymentReady && cart.payment_session && (<div className="flex items-start gap-x-1 w-full">
              <div className="flex flex-col w-1/3">
                <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Payment method
                </ui_1.Text>
                <ui_1.Text className="txt-medium text-ui-fg-subtle">
                  {((_e = constants_1.paymentInfoMap[cart.payment_session.provider_id]) === null || _e === void 0 ? void 0 : _e.title) ||
                cart.payment_session.provider_id}
                </ui_1.Text>
                {process.env.NODE_ENV === "development" &&
                !Object.hasOwn(constants_1.paymentInfoMap, cart.payment_session.provider_id) && (<ui_1.Tooltip content="You can add a user-friendly name and icon for this payment provider in 'src/modules/checkout/components/payment/index.tsx'"/>)}
              </div>
              <div className="flex flex-col w-1/3">
                <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Payment details
                </ui_1.Text>
                <div className="flex gap-2 txt-medium text-ui-fg-subtle items-center">
                  <ui_1.Container className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
                    {((_f = constants_1.paymentInfoMap[cart.payment_session.provider_id]) === null || _f === void 0 ? void 0 : _f.icon) || (<icons_1.CreditCard />)}
                  </ui_1.Container>
                  <ui_1.Text>
                    {cart.payment_session.provider_id === "stripe" && cardBrand
                ? cardBrand
                : "Another step will appear"}
                  </ui_1.Text>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <divider_1.default className="mt-8"/>
    </div>);
};
exports.default = Payment;
