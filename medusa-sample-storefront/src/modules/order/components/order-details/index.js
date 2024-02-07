"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var OrderDetails = function (_a) {
    var order = _a.order, showStatus = _a.showStatus;
    var formatStatus = function (str) {
        var formatted = str.split("_").join(" ");
        return formatted.slice(0, 1).toUpperCase() + formatted.slice(1);
    };
    return (<div>
      <ui_1.Text>
        We have sent the order confirmation details to{" "}
        <span className="text-ui-fg-medium-plus font-semibold">
          {order.email}
        </span>
        .
      </ui_1.Text>
      <ui_1.Text className="mt-2">
        Order date: {new Date(order.created_at).toDateString()}
      </ui_1.Text>
      <ui_1.Text className="mt-2 text-ui-fg-interactive">
        Order number: {order.display_id}
      </ui_1.Text>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (<>
            <ui_1.Text>
              Order status:{" "}
              <span className="text-ui-fg-subtle ">
                {formatStatus(order.fulfillment_status)}
              </span>
            </ui_1.Text>
            <ui_1.Text>
              Payment status:{" "}
              <span className="text-ui-fg-subtle ">
                {formatStatus(order.payment_status)}
              </span>
            </ui_1.Text>
          </>)}
      </div>
    </div>);
};
exports.default = OrderDetails;
