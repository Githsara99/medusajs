"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var react_2 = require("react");
var radio_1 = require("@modules/common/components/radio");
var payment_test_1 = require("../payment-test");
var PaymentContainer = function (_a) {
    var _b, _c;
    var paymentSession = _a.paymentSession, selectedPaymentOptionId = _a.selectedPaymentOptionId, paymentInfoMap = _a.paymentInfoMap, _d = _a.disabled, disabled = _d === void 0 ? false : _d;
    var isDevelopment = process.env.NODE_ENV === "development";
    return (<>
      <react_1.RadioGroup.Option key={paymentSession.id} value={paymentSession.provider_id} disabled={disabled} className={(0, ui_1.clx)("flex flex-col gap-y-2 text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active", {
            "border-ui-border-interactive": selectedPaymentOptionId === paymentSession.provider_id,
        })}>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-4">
            <radio_1.default checked={selectedPaymentOptionId === paymentSession.provider_id}/>
            <ui_1.Text className="text-base-regular">
              {((_b = paymentInfoMap[paymentSession.provider_id]) === null || _b === void 0 ? void 0 : _b.title) ||
            paymentSession.provider_id}
            </ui_1.Text>
            {process.env.NODE_ENV === "development" &&
            !Object.hasOwn(paymentInfoMap, paymentSession.provider_id) && (<ui_1.Tooltip content="You can add a user-friendly name and icon for this payment provider in 'src/modules/checkout/components/payment/index.tsx'" className="min-w-fit">
                  <icons_1.InformationCircleSolid color="var(--fg-muted)"/>
                </ui_1.Tooltip>)}

            {paymentSession.provider_id === "manual" && isDevelopment && (<payment_test_1.default className="hidden small:block"/>)}
          </div>
          <span className="justify-self-end text-ui-fg-base">
            {(_c = paymentInfoMap[paymentSession.provider_id]) === null || _c === void 0 ? void 0 : _c.icon}
          </span>
        </div>
        {paymentSession.provider_id === "manual" && isDevelopment && (<payment_test_1.default className="small:hidden text-[10px]"/>)}
      </react_1.RadioGroup.Option>
    </>);
};
exports.default = PaymentContainer;
