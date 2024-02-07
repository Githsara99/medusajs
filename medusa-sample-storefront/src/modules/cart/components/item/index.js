"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var cart_item_select_1 = require("@modules/cart/components/cart-item-select");
var delete_button_1 = require("@modules/common/components/delete-button");
var line_item_options_1 = require("@modules/common/components/line-item-options");
var line_item_price_1 = require("@modules/common/components/line-item-price");
var line_item_unit_price_1 = require("@modules/common/components/line-item-unit-price");
var thumbnail_1 = require("@modules/products/components/thumbnail");
var actions_1 = require("@modules/cart/actions");
var spinner_1 = require("@modules/common/icons/spinner");
var react_1 = require("react");
var error_message_1 = require("@modules/checkout/components/error-message");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var Item = function (_a) {
    var item = _a.item, region = _a.region, _b = _a.type, type = _b === void 0 ? "full" : _b;
    var _c = (0, react_1.useState)(false), updating = _c[0], setUpdating = _c[1];
    var _d = (0, react_1.useState)(null), error = _d[0], setError = _d[1];
    var handle = item.variant.product.handle;
    var changeQuantity = function (quantity) { return __awaiter(void 0, void 0, void 0, function () {
        var message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setError(null);
                    setUpdating(true);
                    return [4 /*yield*/, (0, actions_1.updateLineItem)({
                            lineId: item.id,
                            quantity: quantity,
                        })
                            .catch(function (err) {
                            return err.message;
                        })
                            .finally(function () {
                            setUpdating(false);
                        })];
                case 1:
                    message = _a.sent();
                    message && setError(message);
                    return [2 /*return*/];
            }
        });
    }); };
    return (<ui_1.Table.Row className="w-full">
      <ui_1.Table.Cell className="!pl-0 p-4 w-24">
        <localized_client_link_1.default href={"/products/".concat(handle)} className={(0, ui_1.clx)("flex", {
            "w-16": type === "preview",
            "small:w-24 w-12": type === "full",
        })}>
          <thumbnail_1.default thumbnail={item.thumbnail} size="square"/>
        </localized_client_link_1.default>
      </ui_1.Table.Cell>

      <ui_1.Table.Cell className="text-left">
        <ui_1.Text className="txt-medium-plus text-ui-fg-base">{item.title}</ui_1.Text>
        <line_item_options_1.default variant={item.variant}/>
      </ui_1.Table.Cell>

      {type === "full" && (<ui_1.Table.Cell>
          <div className="flex gap-2 items-center w-28">
            <delete_button_1.default id={item.id}/>
            <cart_item_select_1.default value={item.quantity} onChange={function (value) { return changeQuantity(parseInt(value.target.value)); }} className="w-14 h-10 p-4">
              {Array.from({
                length: Math.min(item.variant.inventory_quantity > 0
                    ? item.variant.inventory_quantity
                    : 10, 10),
            }, function (_, i) { return (<option value={i + 1} key={i}>
                    {i + 1}
                  </option>); })}
            </cart_item_select_1.default>
            {updating && <spinner_1.default />}
          </div>
          <error_message_1.default error={error}/>
        </ui_1.Table.Cell>)}

      {type === "full" && (<ui_1.Table.Cell className="hidden small:table-cell">
          <line_item_unit_price_1.default item={item} region={region} style="tight"/>
        </ui_1.Table.Cell>)}

      <ui_1.Table.Cell className="!pr-0">
        <span className={(0, ui_1.clx)("!pr-0", {
            "flex flex-col items-end h-full justify-center": type === "preview",
        })}>
          {type === "preview" && (<span className="flex gap-x-1 ">
              <ui_1.Text className="text-ui-fg-muted">{item.quantity}x </ui_1.Text>
              <line_item_unit_price_1.default item={item} region={region} style="tight"/>
            </span>)}
          <line_item_price_1.default item={item} region={region} style="tight"/>
        </span>
      </ui_1.Table.Cell>
    </ui_1.Table.Row>);
};
exports.default = Item;
