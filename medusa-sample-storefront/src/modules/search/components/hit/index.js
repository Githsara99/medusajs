"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var thumbnail_1 = require("@modules/products/components/thumbnail");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var Hit = function (_a) {
    var hit = _a.hit;
    return (<localized_client_link_1.default href={"/products/".concat(hit.handle)}>
      <ui_1.Container key={hit.id} className="flex sm:flex-col gap-2 w-full p-4 shadow-elevation-card-rest hover:shadow-elevation-card-hover items-center sm:justify-center">
        <thumbnail_1.default thumbnail={hit.thumbnail} size="square" className="group h-12 w-12 sm:h-full sm:w-full"/>
        <div className="flex flex-col justify-between group">
          <div className="flex flex-col">
            <ui_1.Text className="text-ui-fg-subtle">{hit.title}</ui_1.Text>
          </div>
        </div>
      </ui_1.Container>
    </localized_client_link_1.default>);
};
exports.default = Hit;
