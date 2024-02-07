"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var link_1 = require("next/link");
exports.metadata = {
    title: "404",
    description: "Something went wrong",
};
function NotFound() {
    return (<div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Page not found</h1>
      <p className="text-small-regular text-ui-fg-base">
        The page you tried to access does not exist.
      </p>
      <link_1.default className="flex gap-x-1 items-center group" href="/">
        <ui_1.Text className="text-ui-fg-interactive">Go to frontpage</ui_1.Text>
        <icons_1.ArrowUpRightMini className="group-hover:rotate-45 ease-in-out duration-150" color="var(--fg-interactive)"/>
      </link_1.default>
    </div>);
}
exports.default = NotFound;
