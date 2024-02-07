"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var ui_1 = require("@medusajs/ui");
var navigation_1 = require("next/navigation");
var react_2 = require("react");
var prices_1 = require("@lib/util/prices");
var delete_button_1 = require("@modules/common/components/delete-button");
var line_item_options_1 = require("@modules/common/components/line-item-options");
var line_item_price_1 = require("@modules/common/components/line-item-price");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var thumbnail_1 = require("@modules/products/components/thumbnail");
var CartDropdown = function (_a) {
    var _b, _c;
    var cartState = _a.cart;
    var _d = (0, react_2.useState)(undefined), activeTimer = _d[0], setActiveTimer = _d[1];
    var _e = (0, react_2.useState)(false), cartDropdownOpen = _e[0], setCartDropdownOpen = _e[1];
    var countryCode = (0, navigation_1.useParams)().countryCode;
    var open = function () { return setCartDropdownOpen(true); };
    var close = function () { return setCartDropdownOpen(false); };
    var totalItems = ((_b = cartState === null || cartState === void 0 ? void 0 : cartState.items) === null || _b === void 0 ? void 0 : _b.reduce(function (acc, item) {
        return acc + item.quantity;
    }, 0)) || 0;
    var itemRef = (0, react_2.useRef)(totalItems || 0);
    var timedOpen = function () {
        open();
        var timer = setTimeout(close, 5000);
        setActiveTimer(timer);
    };
    var openAndCancel = function () {
        if (activeTimer) {
            clearTimeout(activeTimer);
        }
        open();
    };
    // Clean up the timer when the component unmounts
    (0, react_2.useEffect)(function () {
        return function () {
            if (activeTimer) {
                clearTimeout(activeTimer);
            }
        };
    }, [activeTimer]);
    var pathname = (0, navigation_1.usePathname)();
    // open cart dropdown when modifying the cart items, but only if we're not on the cart page
    (0, react_2.useEffect)(function () {
        if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
            timedOpen();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalItems, itemRef.current]);
    return (<div className="h-full z-50" onMouseEnter={openAndCancel} onMouseLeave={close}>
      <react_1.Popover className="relative h-full">
        <react_1.Popover.Button className="h-full">
          <localized_client_link_1.default className="hover:text-ui-fg-base" href="/cart">{"Cart (".concat(totalItems, ")")}</localized_client_link_1.default>
        </react_1.Popover.Button>
        <react_1.Transition show={cartDropdownOpen} as={react_2.Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
          <react_1.Popover.Panel static className="hidden small:block absolute top-[calc(100%+1px)] right-0 bg-white border-x border-b border-gray-200 w-[420px] text-ui-fg-base">
            <div className="p-4 flex items-center justify-center">
              <h3 className="text-large-semi">Cart</h3>
            </div>
            {cartState && ((_c = cartState.items) === null || _c === void 0 ? void 0 : _c.length) ? (<>
                <div className="overflow-y-scroll max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar p-px">
                  {cartState.items
                .sort(function (a, b) {
                return a.created_at > b.created_at ? -1 : 1;
            })
                .map(function (item) { return (<div className="grid grid-cols-[122px_1fr] gap-x-4" key={item.id}>
                        <localized_client_link_1.default href={"/products/".concat(item.variant.product.handle)} className="w-24">
                          <thumbnail_1.default thumbnail={item.thumbnail} size="square"/>
                        </localized_client_link_1.default>
                        <div className="flex flex-col justify-between flex-1">
                          <div className="flex flex-col flex-1">
                            <div className="flex items-start justify-between">
                              <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-[180px]">
                                <h3 className="text-base-regular overflow-hidden text-ellipsis">
                                  <localized_client_link_1.default href={"/products/".concat(item.variant.product.handle)}>
                                    {item.title}
                                  </localized_client_link_1.default>
                                </h3>
                                <line_item_options_1.default variant={item.variant}/>
                                <span>Quantity: {item.quantity}</span>
                              </div>
                              <div className="flex justify-end">
                                <line_item_price_1.default region={cartState.region} item={item} style="tight"/>
                              </div>
                            </div>
                          </div>
                          <delete_button_1.default id={item.id} className="mt-1">
                            Remove
                          </delete_button_1.default>
                        </div>
                      </div>); })}
                </div>
                <div className="p-4 flex flex-col gap-y-4 text-small-regular">
                  <div className="flex items-center justify-between">
                    <span className="text-ui-fg-base font-semibold">
                      Subtotal{" "}
                      <span className="font-normal">(excl. taxes)</span>
                    </span>
                    <span className="text-large-semi">
                      {(0, prices_1.formatAmount)({
                amount: cartState.subtotal || 0,
                region: cartState.region,
                includeTaxes: false,
            })}
                    </span>
                  </div>
                  <localized_client_link_1.default href="/cart" passHref>
                    <ui_1.Button className="w-full" size="large">
                      Go to cart
                    </ui_1.Button>
                  </localized_client_link_1.default>
                </div>
              </>) : (<div>
                <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                  <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
                    <span>0</span>
                  </div>
                  <span>Your shopping bag is empty.</span>
                  <div>
                    <localized_client_link_1.default href="store">
                      <>
                        <span className="sr-only">Go to all products page</span>
                        <ui_1.Button onClick={close}>Explore products</ui_1.Button>
                      </>
                    </localized_client_link_1.default>
                  </div>
                </div>
              </div>)}
          </react_1.Popover.Panel>
        </react_1.Transition>
      </react_1.Popover>
    </div>);
};
exports.default = CartDropdown;
