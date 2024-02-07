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
var ui_1 = require("@medusajs/ui");
var react_1 = require("react");
var react_instantsearch_hooks_web_1 = require("react-instantsearch-hooks-web");
var show_all_1 = require("../show-all");
var Hits = function (_a) {
    var Hit = _a.hitComponent, className = _a.className, props = __rest(_a, ["hitComponent", "className"]);
    var query = (0, react_instantsearch_hooks_web_1.useSearchBox)().query;
    var hits = (0, react_instantsearch_hooks_web_1.useHits)(props).hits;
    return (<div className={(0, ui_1.clx)("transition-[height,max-height,opacity] duration-300 ease-in-out sm:overflow-hidden w-full sm:w-[50vw] mb-1 p-px", className, {
            "max-h-full opacity-100": !!query,
            "max-h-0 opacity-0": !query && !hits.length,
        })}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {hits.slice(0, 6).map(function (hit, index) { return (<li key={index} className={(0, ui_1.clx)("list-none", {
                "hidden sm:block": index > 2,
            })}>
            <Hit hit={hit}/>
          </li>); })}
      </div>
      <show_all_1.default />
    </div>);
};
exports.default = Hits;
