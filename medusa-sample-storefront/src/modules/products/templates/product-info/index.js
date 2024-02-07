"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var ProductInfo = function (_a) {
    var product = _a.product;
    return (<div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (<localized_client_link_1.default href={"/collections/".concat(product.collection.handle)} className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle">
            {product.collection.title}
          </localized_client_link_1.default>)}
        <ui_1.Heading level="h2" className="text-3xl leading-10 text-ui-fg-base">
          {product.title}
        </ui_1.Heading>

        <ui_1.Text className="text-medium text-ui-fg-subtle">
          {product.description}
        </ui_1.Text>
      </div>
    </div>);
};
exports.default = ProductInfo;
