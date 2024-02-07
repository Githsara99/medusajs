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
var react_1 = require("react");
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var use_toggle_state_1 = require("@lib/hooks/use-toggle-state");
var country_select_1 = require("@modules/checkout/components/country-select");
var input_1 = require("@modules/common/components/input");
var modal_1 = require("@modules/common/components/modal");
var actions_1 = require("@modules/account/actions");
var spinner_1 = require("@modules/common/icons/spinner");
var react_dom_1 = require("react-dom");
var submit_button_1 = require("@modules/checkout/components/submit-button");
var EditAddress = function (_a) {
    var _b;
    var region = _a.region, address = _a.address, _c = _a.isActive, isActive = _c === void 0 ? false : _c;
    var _d = (0, react_1.useState)(false), removing = _d[0], setRemoving = _d[1];
    var _e = (0, react_1.useState)(false), successState = _e[0], setSuccessState = _e[1];
    var _f = (0, use_toggle_state_1.default)(false), state = _f.state, open = _f.open, closeModal = _f.close;
    var _g = (0, react_dom_1.useFormState)(actions_1.updateCustomerShippingAddress, {
        success: false,
        error: null,
        addressId: address.id,
    }), formState = _g[0], formAction = _g[1];
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
    var removeAddress = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setRemoving(true);
                    return [4 /*yield*/, (0, actions_1.deleteCustomerShippingAddress)(address.id)];
                case 1:
                    _a.sent();
                    setRemoving(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (<>
      <div className={(0, ui_1.clx)("border rounded-rounded p-5 min-h-[220px] h-full w-full flex flex-col justify-between transition-colors", {
            "border-gray-900": isActive,
        })}>
        <div className="flex flex-col">
          <ui_1.Heading className="text-left text-base-semi">
            {address.first_name} {address.last_name}
          </ui_1.Heading>
          {address.company && (<ui_1.Text className="txt-compact-small text-ui-fg-base">
              {address.company}
            </ui_1.Text>)}
          <ui_1.Text className="flex flex-col text-left text-base-regular mt-2">
            <span>
              {address.address_1}
              {address.address_2 && <span>, {address.address_2}</span>}
            </span>
            <span>
              {address.postal_code}, {address.city}
            </span>
            <span>
              {address.province && "".concat(address.province, ", ")}
              {(_b = address.country_code) === null || _b === void 0 ? void 0 : _b.toUpperCase()}
            </span>
          </ui_1.Text>
        </div>
        <div className="flex items-center gap-x-4">
          <button className="text-small-regular text-ui-fg-base flex items-center gap-x-2" onClick={open}>
            <icons_1.PencilSquare />
            Edit
          </button>
          <button className="text-small-regular text-ui-fg-base flex items-center gap-x-2" onClick={removeAddress}>
            {removing ? <spinner_1.default /> : <icons_1.Trash />}
            Remove
          </button>
        </div>
      </div>

      <modal_1.default isOpen={state} close={close}>
        <modal_1.default.Title>
          <ui_1.Heading className="mb-2">Edit address</ui_1.Heading>
        </modal_1.default.Title>
        <form action={formAction}>
          <modal_1.default.Body>
            <div className="grid grid-cols-1 gap-y-2">
              <div className="grid grid-cols-2 gap-x-2">
                <input_1.default label="First name" name="first_name" required autoComplete="given-name" defaultValue={address.first_name || undefined}/>
                <input_1.default label="Last name" name="last_name" required autoComplete="family-name" defaultValue={address.last_name || undefined}/>
              </div>
              <input_1.default label="Company" name="company" autoComplete="organization" defaultValue={address.company || undefined}/>
              <input_1.default label="Address" name="address_1" required autoComplete="address-line1" defaultValue={address.address_1 || undefined}/>
              <input_1.default label="Apartment, suite, etc." name="address_2" autoComplete="address-line2" defaultValue={address.address_2 || undefined}/>
              <div className="grid grid-cols-[144px_1fr] gap-x-2">
                <input_1.default label="Postal code" name="postal_code" required autoComplete="postal-code" defaultValue={address.postal_code || undefined}/>
                <input_1.default label="City" name="city" required autoComplete="locality" defaultValue={address.city || undefined}/>
              </div>
              <input_1.default label="Province / State" name="province" autoComplete="address-level1" defaultValue={address.province || undefined}/>
              <country_select_1.default name="country_code" region={region} required autoComplete="country" defaultValue={address.country_code || undefined}/>
              <input_1.default label="Phone" name="phone" autoComplete="phone" defaultValue={address.phone || undefined}/>
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
exports.default = EditAddress;
