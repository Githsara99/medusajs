"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noDivisionCurrencies = exports.paymentInfoMap = void 0;
var react_1 = require("react");
var icons_1 = require("@medusajs/icons");
var ideal_1 = require("@modules/common/icons/ideal");
var bancontact_1 = require("@modules/common/icons/bancontact");
var paypal_1 = require("@modules/common/icons/paypal");
/* Map of payment provider_id to their title and icon. Add in any payment providers you want to use. */
exports.paymentInfoMap = {
    stripe: {
        title: "Credit card",
        icon: <icons_1.CreditCard />,
    },
    "stripe-ideal": {
        title: "iDeal",
        icon: <ideal_1.default />,
    },
    "stripe-bancontact": {
        title: "Bancontact",
        icon: <bancontact_1.default />,
    },
    paypal: {
        title: "PayPal",
        icon: <paypal_1.default />,
    },
    manual: {
        title: "Test payment",
        icon: <icons_1.CreditCard />,
    },
    // Add more payment providers here
};
// Add currencies that don't need to be divided by 100
exports.noDivisionCurrencies = [
    "krw",
    "jpy",
    "vnd",
    "clp",
    "pyg",
    "xaf",
    "xof",
    "bif",
    "djf",
    "gnf",
    "kmf",
    "mga",
    "rwf",
    "xpf",
    "htg",
    "vuv",
    "xag",
    "xdr",
    "xau",
];
