"use client";
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
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
/**
 * Use this component to create a Next.js `<Link />` that persists the current country code in the url,
 * without having to explicitly pass it as a prop.
 */
var LocalizedClientLink = function (_a) {
    var children = _a.children, href = _a.href, props = __rest(_a, ["children", "href"]);
    var countryCode = (0, navigation_1.useParams)().countryCode;
    return (<link_1.default href={"/".concat(countryCode).concat(href)} {...props}>
      {children}
    </link_1.default>);
};
exports.default = LocalizedClientLink;
