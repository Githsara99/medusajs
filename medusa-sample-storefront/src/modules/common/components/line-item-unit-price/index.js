"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prices_1 = require("@lib/util/prices");
var ui_1 = require("@medusajs/ui");
var get_precentage_diff_1 = require("@lib/util/get-precentage-diff");
var LineItemUnitPrice = function (_a) {
    var item = _a.item, region = _a.region, _b = _a.style, style = _b === void 0 ? "default" : _b;
    var originalPrice = item.variant.original_price;
    var hasReducedPrice = (originalPrice * item.quantity || 0) > item.total;
    var reducedPrice = (item.total || 0) / item.quantity;
    return (<div className="flex flex-col text-ui-fg-muted justify-center h-full">
      {hasReducedPrice && (<>
          <p>
            {style === "default" && (<span className="text-ui-fg-muted">Original: </span>)}
            <span className="line-through">
              {(0, prices_1.formatAmount)({
                amount: originalPrice,
                region: region,
                includeTaxes: false,
            })}
            </span>
          </p>
          {style === "default" && (<span className="text-ui-fg-interactive">
              -{(0, get_precentage_diff_1.getPercentageDiff)(originalPrice, reducedPrice || 0)}%
            </span>)}
        </>)}
      <span className={(0, ui_1.clx)("text-base-regular", {
            "text-ui-fg-interactive": hasReducedPrice,
        })}>
        {(0, prices_1.formatAmount)({
            amount: reducedPrice || item.unit_price || 0,
            region: region,
            includeTaxes: false,
        })}
      </span>
    </div>);
};
exports.default = LineItemUnitPrice;
