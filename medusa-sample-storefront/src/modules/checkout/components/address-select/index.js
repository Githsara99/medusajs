"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var lodash_1 = require("lodash");
var react_2 = require("react");
var radio_1 = require("@modules/common/components/radio");
var actions_1 = require("@modules/checkout/actions");
var compare_addresses_1 = require("@lib/util/compare-addresses");
var AddressSelect = function (_a) {
    var addresses = _a.addresses, cart = _a.cart;
    var handleSelect = function (id) {
        var savedAddress = addresses.find(function (a) { return a.id === id; });
        if (savedAddress) {
            (0, actions_1.cartUpdate)({
                shipping_address: (0, lodash_1.omit)(savedAddress, [
                    "id",
                    "created_at",
                    "updated_at",
                    "country",
                    "deleted_at",
                    "metadata",
                    "customer_id",
                ]),
            });
        }
    };
    var selectedAddress = (0, react_2.useMemo)(function () {
        return addresses.find(function (a) { return (0, compare_addresses_1.default)(a, cart === null || cart === void 0 ? void 0 : cart.shipping_address); });
    }, [addresses, cart === null || cart === void 0 ? void 0 : cart.shipping_address]);
    return (<react_1.Listbox onChange={handleSelect} value={selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.id}>
      <div className="relative">
        <react_1.Listbox.Button className="relative w-full flex justify-between items-center px-4 py-[10px] text-left bg-white cursor-default focus:outline-none border rounded-rounded focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-300 focus-visible:ring-offset-2 focus-visible:border-gray-300 text-base-regular">
          {function (_a) {
            var open = _a.open;
            return (<>
              <span className="block truncate">
                {selectedAddress
                    ? selectedAddress.address_1
                    : "Choose an address"}
              </span>
              <icons_1.ChevronUpDown className={(0, ui_1.clx)("transition-rotate duration-200", {
                    "transform rotate-180": open,
                })}/>
            </>);
        }}
        </react_1.Listbox.Button>
        <react_1.Transition as={react_2.Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <react_1.Listbox.Options className="absolute z-20 w-full overflow-auto text-small-regular bg-white border border-top-0 max-h-60 focus:outline-none sm:text-sm">
            {addresses.map(function (address) {
            var _a;
            return (<react_1.Listbox.Option key={address.id} value={address.id} className="cursor-default select-none relative pl-6 pr-10 hover:bg-gray-50 py-4">
                  <div className="flex gap-x-4 items-start">
                    <radio_1.default checked={(selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.id) === address.id}/>
                    <div className="flex flex-col">
                      <span className="text-left text-base-semi">
                        {address.first_name} {address.last_name}
                      </span>
                      {address.company && (<span className="text-small-regular text-ui-fg-base">
                          {address.company}
                        </span>)}
                      <div className="flex flex-col text-left text-base-regular mt-2">
                        <span>
                          {address.address_1}
                          {address.address_2 && (<span>, {address.address_2}</span>)}
                        </span>
                        <span>
                          {address.postal_code}, {address.city}
                        </span>
                        <span>
                          {address.province && "".concat(address.province, ", ")}
                          {(_a = address.country_code) === null || _a === void 0 ? void 0 : _a.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </react_1.Listbox.Option>);
        })}
          </react_1.Listbox.Options>
        </react_1.Transition>
      </div>
    </react_1.Listbox>);
};
exports.default = AddressSelect;
