"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var StripeWrapper = function (_a) {
    var _b, _c;
    var paymentSession = _a.paymentSession, stripeKey = _a.stripeKey, stripePromise = _a.stripePromise, children = _a.children;
    var options = {
        clientSecret: (_b = paymentSession.data) === null || _b === void 0 ? void 0 : _b.client_secret,
    };
    if (!stripeKey) {
        throw new Error("Stripe key is missing. Set NEXT_PUBLIC_STRIPE_KEY environment variable.");
    }
    if (!stripePromise) {
        throw new Error("Stripe promise is missing. Make sure you have provided a valid Stripe key.");
    }
    if (!((_c = paymentSession === null || paymentSession === void 0 ? void 0 : paymentSession.data) === null || _c === void 0 ? void 0 : _c.client_secret)) {
        throw new Error("Stripe client secret is missing. Cannot initialize Stripe.");
    }
    return (<react_stripe_js_1.Elements options={options} stripe={stripePromise}>
        {children}
      </react_stripe_js_1.Elements>);
};
exports.default = StripeWrapper;
