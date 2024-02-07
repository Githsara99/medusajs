"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCheckoutStep = void 0;
function getCheckoutStep(cart) {
    var _a;
    if (!((_a = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _a === void 0 ? void 0 : _a.address_1) || !cart.email) {
        return "address";
    }
    else if ((cart === null || cart === void 0 ? void 0 : cart.shipping_methods.length) === 0) {
        return "delivery";
    }
    else {
        return "payment";
    }
}
exports.getCheckoutStep = getCheckoutStep;
