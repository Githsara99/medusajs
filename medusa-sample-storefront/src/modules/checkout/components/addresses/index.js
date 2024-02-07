"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("next/navigation");
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var divider_1 = require("@modules/common/components/divider");
var spinner_1 = require("@modules/common/icons/spinner");
var billing_address_1 = require("../billing_address");
var shipping_address_1 = require("../shipping-address");
var actions_1 = require("../../actions");
var submit_button_1 = require("../submit-button");
var react_dom_1 = require("react-dom");
var error_message_1 = require("../error-message");
var compare_addresses_1 = require("@lib/util/compare-addresses");
var Addresses = function (_a) {
    var _b, _c;
    var cart = _a.cart, customer = _a.customer;
    var searchParams = (0, navigation_1.useSearchParams)();
    var router = (0, navigation_1.useRouter)();
    var pathname = (0, navigation_1.usePathname)();
    var params = (0, navigation_1.useParams)();
    var countryCode = params.countryCode;
    var isOpen = searchParams.get("step") === "address";
    var _d = (0, ui_1.useToggleState)((cart === null || cart === void 0 ? void 0 : cart.shipping_address) && (cart === null || cart === void 0 ? void 0 : cart.billing_address)
        ? (0, compare_addresses_1.default)(cart === null || cart === void 0 ? void 0 : cart.shipping_address, cart === null || cart === void 0 ? void 0 : cart.billing_address)
        : true), sameAsSBilling = _d.state, toggleSameAsBilling = _d.toggle;
    var handleEdit = function () {
        router.push(pathname + "?step=address");
    };
    var _e = (0, react_dom_1.useFormState)(actions_1.setAddresses, null), message = _e[0], formAction = _e[1];
    return (<div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <ui_1.Heading level="h2" className="flex flex-row text-3xl-regular gap-x-2 items-baseline">
          Address
          {!isOpen && <icons_1.CheckCircleSolid />}
        </ui_1.Heading>
        {!isOpen && (cart === null || cart === void 0 ? void 0 : cart.shipping_address) && (<ui_1.Text>
            <button onClick={handleEdit} className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">
              Edit
            </button>
          </ui_1.Text>)}
      </div>
      {isOpen ? (<form action={formAction}>
          <div className="pb-8">
            <shipping_address_1.default customer={customer} countryCode={countryCode} checked={sameAsSBilling} onChange={toggleSameAsBilling} cart={cart}/>

            {!sameAsSBilling && (<div>
                <ui_1.Heading level="h2" className="text-3xl-regular gap-x-4 pb-6 pt-8">
                  Billing address
                </ui_1.Heading>

                <billing_address_1.default cart={cart} countryCode={countryCode}/>
              </div>)}
            <submit_button_1.SubmitButton className="mt-6">Continue to delivery</submit_button_1.SubmitButton>
            <error_message_1.default error={message}/>
          </div>
        </form>) : (<div>
          <div className="text-small-regular">
            {cart && cart.shipping_address ? (<div className="flex items-start gap-x-8">
                <div className="flex items-start gap-x-1 w-full">
                  <div className="flex flex-col w-1/3">
                    <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">
                      Shipping Address
                    </ui_1.Text>
                    <ui_1.Text className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.first_name}{" "}
                      {cart.shipping_address.last_name}
                    </ui_1.Text>
                    <ui_1.Text className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.address_1}{" "}
                      {cart.shipping_address.address_2}
                    </ui_1.Text>
                    <ui_1.Text className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.postal_code},{" "}
                      {cart.shipping_address.city}
                    </ui_1.Text>
                    <ui_1.Text className="txt-medium text-ui-fg-subtle">
                      {(_b = cart.shipping_address.country_code) === null || _b === void 0 ? void 0 : _b.toUpperCase()}
                    </ui_1.Text>
                  </div>

                  <div className="flex flex-col w-1/3 ">
                    <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">
                      Contact
                    </ui_1.Text>
                    <ui_1.Text className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.phone}
                    </ui_1.Text>
                    <ui_1.Text className="txt-medium text-ui-fg-subtle">
                      {cart.email}
                    </ui_1.Text>
                  </div>

                  <div className="flex flex-col w-1/3">
                    <ui_1.Text className="txt-medium-plus text-ui-fg-base mb-1">
                      Billing Address
                    </ui_1.Text>

                    {sameAsSBilling ? (<ui_1.Text className="txt-medium text-ui-fg-subtle">
                        Billing- and delivery address are the same.
                      </ui_1.Text>) : (<>
                        <ui_1.Text className="txt-medium text-ui-fg-subtle">
                          {cart.billing_address.first_name}{" "}
                          {cart.billing_address.last_name}
                        </ui_1.Text>
                        <ui_1.Text className="txt-medium text-ui-fg-subtle">
                          {cart.billing_address.address_1}{" "}
                          {cart.billing_address.address_2}
                        </ui_1.Text>
                        <ui_1.Text className="txt-medium text-ui-fg-subtle">
                          {cart.billing_address.postal_code},{" "}
                          {cart.billing_address.city}
                        </ui_1.Text>
                        <ui_1.Text className="txt-medium text-ui-fg-subtle">
                          {(_c = cart.billing_address.country_code) === null || _c === void 0 ? void 0 : _c.toUpperCase()}
                        </ui_1.Text>
                      </>)}
                  </div>
                </div>
              </div>) : (<div>
                <spinner_1.default />
              </div>)}
          </div>
        </div>)}
      <divider_1.default className="mt-8"/>
    </div>);
};
exports.default = Addresses;
