"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
var interactive_link_1 = require("@modules/common/components/interactive-link");
exports.metadata = {
    title: "404",
    description: "Something went wrong",
};
function NotFound() {
    return (<div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Page not found</h1>
      <p className="text-small-regular text-ui-fg-base">
        The cart you tried to access does not exist. Clear your cookies and try
        again.
      </p>
      <interactive_link_1.default href="/">Go to frontpage</interactive_link_1.default>
    </div>);
}
exports.default = NotFound;
