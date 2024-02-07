"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var react_instantsearch_hooks_web_1 = require("react-instantsearch-hooks-web");
var interactive_link_1 = require("@modules/common/components/interactive-link");
var ShowAll = function () {
    var hits = (0, react_instantsearch_hooks_web_1.useHits)().hits;
    var query = (0, react_instantsearch_hooks_web_1.useSearchBox)().query;
    var width = typeof window !== "undefined" ? window.innerWidth : 0;
    if (query === "")
        return null;
    if (hits.length > 0 && hits.length <= 6)
        return null;
    if (hits.length === 0) {
        return (<ui_1.Container className="flex gap-2 justify-center h-fit py-2">
        <ui_1.Text>No results found.</ui_1.Text>
      </ui_1.Container>);
    }
    return (<ui_1.Container className="flex sm:flex-col small:flex-row gap-2 justify-center items-center h-fit py-4 small:py-2">
      <ui_1.Text>Showing the first {width > 640 ? 6 : 3} results.</ui_1.Text>
      <interactive_link_1.default href={"/results/".concat(query)}>View all</interactive_link_1.default>
    </ui_1.Container>);
};
exports.default = ShowAll;
