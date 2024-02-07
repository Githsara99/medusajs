"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var react_1 = require("react");
var Help = function () {
    return (<div className="mt-6">
      <ui_1.Heading className="text-base-semi">Need help?</ui_1.Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <localized_client_link_1.default href="/contact">Contact</localized_client_link_1.default>
          </li>
          <li>
            <localized_client_link_1.default href="/contact">
              Returns & Exchanges
            </localized_client_link_1.default>
          </li>
        </ul>
      </div>
    </div>);
};
exports.default = Help;
