"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var items_1 = require("./items");
var summary_1 = require("./summary");
var empty_cart_message_1 = require("../components/empty-cart-message");
var sign_in_prompt_1 = require("../components/sign-in-prompt");
var divider_1 = require("@modules/common/components/divider");
var CartTemplate = function (_a) {
    var cart = _a.cart, customer = _a.customer;
    return (<div className="py-12">
      <div className="content-container">
        {(cart === null || cart === void 0 ? void 0 : cart.items.length) ? (<div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
            <div className="flex flex-col bg-white py-6 gap-y-6">
              {!customer && (<>
                  <sign_in_prompt_1.default />
                  <divider_1.default />
                </>)}
              <items_1.default region={cart === null || cart === void 0 ? void 0 : cart.region} items={cart === null || cart === void 0 ? void 0 : cart.items}/>
            </div>
            <div className="relative">
              <div className="flex flex-col gap-y-8 sticky top-12">
                {cart && cart.region && (<>
                    <div className="bg-white py-6">
                      <summary_1.default cart={cart}/>
                    </div>
                  </>)}
              </div>
            </div>
          </div>) : (<div>
            <empty_cart_message_1.default />
          </div>)}
      </div>
    </div>);
};
exports.default = CartTemplate;
