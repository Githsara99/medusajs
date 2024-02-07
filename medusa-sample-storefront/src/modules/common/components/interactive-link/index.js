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
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var localized_client_link_1 = require("../localized-client-link");
var InteractiveLink = function (_a) {
    var href = _a.href, children = _a.children, onClick = _a.onClick, props = __rest(_a, ["href", "children", "onClick"]);
    return (<localized_client_link_1.default className="flex gap-x-1 items-center group" href={href} onClick={onClick} {...props}>
      <ui_1.Text className="text-ui-fg-interactive">{children}</ui_1.Text>
      <icons_1.ArrowUpRightMini className="group-hover:rotate-45 ease-in-out duration-150" color="var(--fg-interactive)"/>
    </localized_client_link_1.default>);
};
exports.default = InteractiveLink;
