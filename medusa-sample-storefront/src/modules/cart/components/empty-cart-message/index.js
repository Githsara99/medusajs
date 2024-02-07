"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var interactive_link_1 = require("@modules/common/components/interactive-link");
var EmptyCartMessage = function () {
    return (<div className="py-48 px-2 flex flex-col justify-center items-start">
      <ui_1.Heading level="h1" className="flex flex-row text-3xl-regular gap-x-2 items-baseline">
        Cart
      </ui_1.Heading>
      <ui_1.Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        You don&apos;t have anything in your cart. Let&apos;s change that, use
        the link below to start browsing our products.
      </ui_1.Text>
      <div>
        <interactive_link_1.default href="/store">Explore products</interactive_link_1.default>
      </div>
    </div>);
};
exports.default = EmptyCartMessage;
