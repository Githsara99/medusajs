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
var ui_1 = require("@medusajs/ui");
var react_paypal_js_1 = require("@paypal/react-paypal-js");
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var actions_1 = require("@modules/checkout/actions");
var react_1 = require("react");
var error_message_1 = require("../error-message");
var spinner_1 = require("@modules/common/icons/spinner");
var PaymentButton = function (_a) {
    var cart = _a.cart;
    var notReady = !cart ||
        !cart.shipping_address ||
        !cart.billing_address ||
        !cart.email ||
        cart.shipping_methods.length < 1
        ? true
        : false;
    var paymentSession = cart.payment_session;
    switch (paymentSession.provider_id) {
        case "stripe":
            return <StripePaymentButton notReady={notReady} cart={cart}/>;
        case "manual":
            return <ManualTestPaymentButton notReady={notReady}/>;
        case "paypal":
            return <PayPalPaymentButton notReady={notReady} cart={cart}/>;
        default:
            return <ui_1.Button disabled>Select a payment method</ui_1.Button>;
    }
};
var StripePaymentButton = function (_a) {
    var cart = _a.cart, notReady = _a.notReady;
    var _b = (0, react_1.useState)(false), submitting = _b[0], setSubmitting = _b[1];
    var _c = (0, react_1.useState)(null), errorMessage = _c[0], setErrorMessage = _c[1];
    var onPaymentCompleted = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, actions_1.placeOrder)().catch(function () {
                        setErrorMessage("An error occurred, please try again.");
                        setSubmitting(false);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var stripe = (0, react_stripe_js_1.useStripe)();
    var elements = (0, react_stripe_js_1.useElements)();
    var card = elements === null || elements === void 0 ? void 0 : elements.getElement("card");
    var session = cart.payment_session;
    var disabled = !stripe || !elements ? true : false;
    var handlePayment = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    setSubmitting(true);
                    if (!stripe || !elements || !card || !cart) {
                        setSubmitting(false);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, stripe
                            .confirmCardPayment(session.data.client_secret, {
                            payment_method: {
                                card: card,
                                billing_details: {
                                    name: cart.billing_address.first_name +
                                        " " +
                                        cart.billing_address.last_name,
                                    address: {
                                        city: (_a = cart.billing_address.city) !== null && _a !== void 0 ? _a : undefined,
                                        country: (_b = cart.billing_address.country_code) !== null && _b !== void 0 ? _b : undefined,
                                        line1: (_c = cart.billing_address.address_1) !== null && _c !== void 0 ? _c : undefined,
                                        line2: (_d = cart.billing_address.address_2) !== null && _d !== void 0 ? _d : undefined,
                                        postal_code: (_e = cart.billing_address.postal_code) !== null && _e !== void 0 ? _e : undefined,
                                        state: (_f = cart.billing_address.province) !== null && _f !== void 0 ? _f : undefined,
                                    },
                                    email: cart.email,
                                    phone: (_g = cart.billing_address.phone) !== null && _g !== void 0 ? _g : undefined,
                                },
                            },
                        })
                            .then(function (_a) {
                            var error = _a.error, paymentIntent = _a.paymentIntent;
                            if (error) {
                                var pi = error.payment_intent;
                                if ((pi && pi.status === "requires_capture") ||
                                    (pi && pi.status === "succeeded")) {
                                    onPaymentCompleted();
                                }
                                setErrorMessage(error.message || null);
                                return;
                            }
                            if ((paymentIntent && paymentIntent.status === "requires_capture") ||
                                paymentIntent.status === "succeeded") {
                                return onPaymentCompleted();
                            }
                            return;
                        })];
                case 1:
                    _h.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (<>
      <ui_1.Button disabled={disabled || notReady} onClick={handlePayment} size="large" isLoading={submitting}>
        Place order
      </ui_1.Button>
      <error_message_1.default error={errorMessage}/>
    </>);
};
var PayPalPaymentButton = function (_a) {
    var cart = _a.cart, notReady = _a.notReady;
    var _b = (0, react_1.useState)(false), submitting = _b[0], setSubmitting = _b[1];
    var _c = (0, react_1.useState)(null), errorMessage = _c[0], setErrorMessage = _c[1];
    var onPaymentCompleted = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, actions_1.placeOrder)().catch(function () {
                        setErrorMessage("An error occurred, please try again.");
                        setSubmitting(false);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var session = cart.payment_session;
    var handlePayment = function (_data, actions) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            (_a = actions === null || actions === void 0 ? void 0 : actions.order) === null || _a === void 0 ? void 0 : _a.authorize().then(function (authorization) {
                if (authorization.status !== "COMPLETED") {
                    setErrorMessage("An error occurred, status: ".concat(authorization.status));
                    return;
                }
                onPaymentCompleted();
            }).catch(function () {
                setErrorMessage("An unknown error occurred, please try again.");
                setSubmitting(false);
            });
            return [2 /*return*/];
        });
    }); };
    var _d = (0, react_paypal_js_1.usePayPalScriptReducer)()[0], isPending = _d.isPending, isResolved = _d.isResolved;
    if (isPending) {
        return <spinner_1.default />;
    }
    if (isResolved) {
        return (<>
        <react_paypal_js_1.PayPalButtons style={{ layout: "horizontal" }} createOrder={function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, session.data.id];
        }); }); }} onApprove={handlePayment} disabled={notReady || submitting || isPending}/>
        <error_message_1.default error={errorMessage}/>
      </>);
    }
};
var ManualTestPaymentButton = function (_a) {
    var notReady = _a.notReady;
    var _b = (0, react_1.useState)(false), submitting = _b[0], setSubmitting = _b[1];
    var _c = (0, react_1.useState)(null), errorMessage = _c[0], setErrorMessage = _c[1];
    var onPaymentCompleted = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, actions_1.placeOrder)().catch(function (err) {
                        setErrorMessage(err.toString());
                        setSubmitting(false);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handlePayment = function () {
        setSubmitting(true);
        onPaymentCompleted();
    };
    return (<>
      <ui_1.Button disabled={notReady} isLoading={submitting} onClick={handlePayment} size="large">
        Place order
      </ui_1.Button>
      <error_message_1.default error={errorMessage}/>
    </>);
};
exports.default = PaymentButton;
