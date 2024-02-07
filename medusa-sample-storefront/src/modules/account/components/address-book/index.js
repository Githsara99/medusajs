"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var add_address_1 = require("../address-card/add-address");
var edit_address_modal_1 = require("../address-card/edit-address-modal");
var AddressBook = function (_a) {
    var customer = _a.customer, region = _a.region;
    return (<div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 mt-4">
        <add_address_1.default region={region}/>
        {customer.shipping_addresses.map(function (address) {
            return (<edit_address_modal_1.default region={region} address={address} key={address.id}/>);
        })}
      </div>
    </div>);
};
exports.default = AddressBook;
