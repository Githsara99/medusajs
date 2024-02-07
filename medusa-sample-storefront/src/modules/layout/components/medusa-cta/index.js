"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var medusa_1 = require("../../../common/icons/medusa");
var nextjs_1 = require("../../../common/icons/nextjs");
var MedusaCTA = function () {
    return (<ui_1.Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
        <medusa_1.default fill="#9ca3af" className="fill-[#9ca3af]"/>
      </a>
      &
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <nextjs_1.default fill="#9ca3af"/>
      </a>
    </ui_1.Text>);
};
exports.default = MedusaCTA;
