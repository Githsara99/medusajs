"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prices_1 = require("@lib/util/prices");
var ui_1 = require("@medusajs/ui");
var get_precentage_diff_1 = require("@lib/util/get-precentage-diff");
var LineItemPrice = function (_a) {
    var item = _a.item, region = _a.region, _b = _a.style, style = _b === void 0 ? "default" : _b;
    var originalPrice = item.variant.original_price * item.quantity;
    var hasReducedPrice = (item.total || 0) < originalPrice;
    return (<div className="flex flex-col gap-x-2 text-ui-fg-subtle items-end">
      <div className="text-left">
        {hasReducedPrice && (<>
            <p>
              {style === "default" && (<span className="text-ui-fg-subtle">Original: </span>)}
              <span className="line-through text-ui-fg-muted">
                {(0, prices_1.formatAmount)({
                amount: originalPrice,
                region: region,
                includeTaxes: false,
            })}
              </span>
            </p>
            {style === "default" && (<span className="text-ui-fg-interactive">
                -{(0, get_precentage_diff_1.getPercentageDiff)(originalPrice, item.total || 0)}%
              </span>)}
          </>)}
        <span className={(0, ui_1.clx)("text-base-regular", {
            "text-ui-fg-interactive": hasReducedPrice,
        })}>
          {(0, prices_1.formatAmount)({
            amount: item.total || 0,
            region: region,
            includeTaxes: false,
        })}
        </span>
      </div>
    </div>);
};
exports.default = LineItemPrice;
