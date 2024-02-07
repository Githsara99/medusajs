"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var footer_1 = require("@modules/layout/templates/footer");
var nav_1 = require("@modules/layout/templates/nav");
var Layout = function (_a) {
    var children = _a.children;
    return (<div>
      <nav_1.default />
      <main className="relative">{children}</main>
      <footer_1.default />
    </div>);
};
exports.default = Layout;
