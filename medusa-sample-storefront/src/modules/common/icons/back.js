"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Back = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "16" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path d="M4 3.5V9.5H10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.09714 14.014C4.28641 15.7971 4.97372 16.7931 6.22746 18.0783C7.4812 19.3635 9.13155 20.1915 10.9137 20.4293C12.6958 20.6671 14.5064 20.301 16.0549 19.3898C17.6033 18.4785 18.8 17.0749 19.4527 15.4042C20.1054 13.7335 20.1764 11.8926 19.6543 10.1769C19.1322 8.46112 18.0472 6.97003 16.5735 5.94286C15.0997 4.91569 13.3227 4.412 11.5275 4.51261C9.73236 4.61323 8.02312 5.31232 6.6741 6.4977L4 8.89769" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
exports.default = Back;
