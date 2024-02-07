"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stripe_js_1 = require("@stripe/stripe-js");
var react_1 = require("react");
var stripe_wrapper_1 = require("./stripe-wrapper");
var react_paypal_js_1 = require("@paypal/react-paypal-js");
var stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY;
var stripePromise = stripeKey ? (0, stripe_js_1.loadStripe)(stripeKey) : null;
var paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
var Wrapper = function (_a) {
    var _b;
    var cart = _a.cart, children = _a.children;
    var paymentSession = cart.payment_session;
    var isStripe = (_b = paymentSession === null || paymentSession === void 0 ? void 0 : paymentSession.provider_id) === null || _b === void 0 ? void 0 : _b.includes("stripe");
    if (isStripe && paymentSession && stripePromise) {
        return (<stripe_wrapper_1.default paymentSession={paymentSession} stripeKey={stripeKey} stripePromise={stripePromise}>
        {children}
      </stripe_wrapper_1.default>);
    }
    if ((paymentSession === null || paymentSession === void 0 ? void 0 : paymentSession.provider_id) === "paypal" &&
        paypalClientId !== undefined &&
        cart) {
        return (<react_paypal_js_1.PayPalScriptProvider options={{
                "client-id": "test",
                currency: cart === null || cart === void 0 ? void 0 : cart.region.currency_code.toUpperCase(),
                intent: "authorize",
                components: "buttons",
            }}>
        {children}
      </react_paypal_js_1.PayPalScriptProvider>);
    }
    return <div>{children}</div>;
};
exports.default = Wrapper;
