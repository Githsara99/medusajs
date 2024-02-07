"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var prices_1 = require("@lib/util/prices");
var constants_1 = require("@lib/constants");
var divider_1 = require("@modules/common/components/divider");
var PaymentDetails = function (_a) {
    var order = _a.order;
    var payment = order.payments[0];
    return (<div>
      <ui_1.Heading level="h2" className="flex flex-row text-3xl-regular my-6">
        Payment
      </ui_1.Heading>
      <div>
        {payment && (<div className="flex items-start gap-x-1 w-full">
            <div className="flex flex-col w-1/3">
              <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">
                Payment method
              </ui_1.Text>
              <ui_1.Text className="txt-medium text-ui-fg-subtle">
                {constants_1.paymentInfoMap[payment.provider_id].title}
              </ui_1.Text>
            </div>
            <div className="flex flex-col w-2/3">
              <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">
                Payment details
              </ui_1.Text>
              <div className="flex gap-2 txt-medium text-ui-fg-subtle items-center">
                <ui_1.Container className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
                  {constants_1.paymentInfoMap[payment.provider_id].icon}
                </ui_1.Container>
                <ui_1.Text>
                  {payment.provider_id === "stripe" && payment.data.card_last4
                ? "**** **** **** ".concat(payment.data.card_last4)
                : "".concat((0, prices_1.formatAmount)({
                    amount: payment.amount,
                    region: order.region,
                    includeTaxes: false,
                }), " paid at ").concat(new Date(payment.created_at).toString())}
                </ui_1.Text>
              </div>
            </div>
          </div>)}
      </div>

      <divider_1.default className="mt-8"/>
    </div>);
};
exports.default = PaymentDetails;
