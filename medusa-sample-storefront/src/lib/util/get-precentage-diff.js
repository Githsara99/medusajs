"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPercentageDiff = void 0;
var getPercentageDiff = function (original, calculated) {
    var diff = original - calculated;
    var decrease = (diff / original) * 100;
    return decrease.toFixed();
};
exports.getPercentageDiff = getPercentageDiff;
