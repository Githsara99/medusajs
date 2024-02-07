"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var use_toggle_state_1 = require("@lib/hooks/use-toggle-state");
var country_select_1 = require("@modules/checkout/components/country-select");
var input_1 = require("@modules/common/components/input");
var modal_1 = require("@modules/common/components/modal");
var submit_button_1 = require("@modules/checkout/components/submit-button");
var actions_1 = require("@modules/account/actions");
var AddAddress = function (_a) {
    var region = _a.region;
    var _b = (0, react_1.useState)(false), successState = _b[0], setSuccessState = _b[1];
    var _c = (0, use_toggle_state_1.default)(false), state = _c.state, open = _c.open, closeModal = _c.close;
    var _d = (0, react_dom_1.useFormState)(actions_1.addCustomerShippingAddress, {
        success: false,
        error: null,
    }), formState = _d[0], formAction = _d[1];
    var close = function () {
        setSuccessState(false);
        closeModal();
    };
    (0, react_1.useEffect)(function () {
        if (successState) {
            close();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [successState]);
    (0, react_1.useEffect)(function () {
        if (formState.success) {
            setSuccessState(true);
        }
    }, [formState]);
    return (<>
      <button className="border border-ui-border-base rounded-rounded p-5 min-h-[220px] h-full w-full flex flex-col justify-between" onClick={open}>
        <span className="text-base-semi">New address</span>
        <icons_1.Plus />
      </button>

      <modal_1.default isOpen={state} close={close}>
        <modal_1.default.Title>
          <ui_1.Heading className="mb-2">Add address</ui_1.Heading>
        </modal_1.default.Title>
        <form action={formAction}>
          <modal_1.default.Body>
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 gap-x-2">
                <input_1.default label="First name" name="first_name" required autoComplete="given-name"/>
                <input_1.default label="Last name" name="last_name" required autoComplete="family-name"/>
              </div>
              <input_1.default label="Company" name="company" autoComplete="organization"/>
              <input_1.default label="Address" name="address_1" required autoComplete="address-line1"/>
              <input_1.default label="Apartment, suite, etc." name="address_2" autoComplete="address-line2"/>
              <div className="grid grid-cols-[144px_1fr] gap-x-2">
                <input_1.default label="Postal code" name="postal_code" required autoComplete="postal-code"/>
                <input_1.default label="City" name="city" required autoComplete="locality"/>
              </div>
              <input_1.default label="Province / State" name="province" autoComplete="address-level1"/>
              <country_select_1.default region={region} name="country_code" required autoComplete="country"/>
              <input_1.default label="Phone" name="phone" autoComplete="phone"/>
            </div>
            {formState.error && (<div className="text-rose-500 text-small-regular py-2">
                {formState.error}
              </div>)}
          </modal_1.default.Body>
          <modal_1.default.Footer>
            <div className="flex gap-3 mt-6">
              <ui_1.Button type="reset" variant="secondary" onClick={close} className="h-10">
                Cancel
              </ui_1.Button>
              <submit_button_1.SubmitButton>Save</submit_button_1.SubmitButton>
            </div>
          </modal_1.default.Footer>
        </form>
      </modal_1.default>
    </>);
};
exports.default = AddAddress;
