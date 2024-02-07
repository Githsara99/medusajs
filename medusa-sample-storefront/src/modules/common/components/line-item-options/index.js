"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var LineItemOptions = function (_a) {
    var variant = _a.variant;
    return (<ui_1.Text className="inline-block txt-medium text-ui-fg-subtle w-full overflow-hidden text-ellipsis">
      Variant: {variant.title}
    </ui_1.Text>);
};
exports.default = LineItemOptions;
