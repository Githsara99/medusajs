"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spinner_1 = require("@modules/common/icons/spinner");
function Loading() {
    return (<div className="flex items-center justify-center w-full h-full text-ui-fg-base">
      <spinner_1.default size={36}/>
    </div>);
}
exports.default = Loading;
