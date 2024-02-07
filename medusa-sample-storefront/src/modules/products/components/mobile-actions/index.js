"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var ui_1 = require("@medusajs/ui");
var react_2 = require("react");
var use_toggle_state_1 = require("@lib/hooks/use-toggle-state");
var chevron_down_1 = require("@modules/common/icons/chevron-down");
var x_1 = require("@modules/common/icons/x");
var get_product_price_1 = require("@lib/util/get-product-price");
var option_select_1 = require("../option-select");
var MobileActions = function (_a) {
    var product = _a.product, variant = _a.variant, region = _a.region, options = _a.options, updateOptions = _a.updateOptions, inStock = _a.inStock, handleAddToCart = _a.handleAddToCart, isAdding = _a.isAdding, show = _a.show;
    var _b = (0, use_toggle_state_1.default)(), state = _b.state, open = _b.open, close = _b.close;
    var price = (0, get_product_price_1.getProductPrice)({
        product: product,
        variantId: variant === null || variant === void 0 ? void 0 : variant.id,
        region: region,
    });
    var selectedPrice = (0, react_2.useMemo)(function () {
        if (!price) {
            return null;
        }
        var variantPrice = price.variantPrice, cheapestPrice = price.cheapestPrice;
        return variantPrice || cheapestPrice || null;
    }, [price]);
    return (<>
      <div className={(0, ui_1.clx)("lg:hidden inset-x-0 bottom-0 fixed", {
            "pointer-events-none": !show,
        })}>
        <react_1.Transition as={react_2.Fragment} show={show} enter="ease-in-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="bg-white flex flex-col gap-y-3 justify-center items-center text-large-regular p-4 h-full w-full border-t border-gray-200">
            <div className="flex items-center gap-x-2">
              <span>{product.title}</span>
              <span>—</span>
              {selectedPrice ? (<div className="flex items-end gap-x-2 text-ui-fg-base">
                  {selectedPrice.price_type === "sale" && (<p>
                      <span className="line-through text-small-regular">
                        {selectedPrice.original_price}
                      </span>
                    </p>)}
                  <span className={(0, ui_1.clx)({
                "text-ui-fg-interactive": selectedPrice.price_type === "sale",
            })}>
                    {selectedPrice.calculated_price}
                  </span>
                </div>) : (<div></div>)}
            </div>
            <div className="grid grid-cols-2 w-full gap-x-4">
              <ui_1.Button onClick={open} variant="secondary" className="w-full">
                <div className="flex items-center justify-between w-full">
                  <span>
                    {variant
            ? Object.values(options).join(" / ")
            : "Select Options"}
                  </span>
                  <chevron_down_1.default />
                </div>
              </ui_1.Button>
              <ui_1.Button onClick={handleAddToCart} disabled={!inStock || !variant} className="w-full" isLoading={isAdding}>
                {!variant
            ? "Select variant"
            : !inStock
                ? "Out of stock"
                : "Add to cart"}
              </ui_1.Button>
            </div>
          </div>
        </react_1.Transition>
      </div>
      <react_1.Transition appear show={state} as={react_2.Fragment}>
        <react_1.Dialog as="div" className="relative z-[75]" onClose={close}>
          <react_1.Transition.Child as={react_2.Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm"/>
          </react_1.Transition.Child>

          <div className="fixed bottom-0 inset-x-0">
            <div className="flex min-h-full h-full items-center justify-center text-center">
              <react_1.Transition.Child as={react_2.Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <react_1.Dialog.Panel className="w-full h-full transform overflow-hidden text-left flex flex-col gap-y-3">
                  <div className="w-full flex justify-end pr-6">
                    <button onClick={close} className="bg-white w-12 h-12 rounded-full text-ui-fg-base flex justify-center items-center">
                      <x_1.default />
                    </button>
                  </div>
                  <div className="bg-white px-6 py-12">
                    {product.variants.length > 1 && (<div className="flex flex-col gap-y-6">
                        {(product.options || []).map(function (option) {
                return (<div key={option.id}>
                              <option_select_1.default option={option} current={options[option.id]} updateOption={updateOptions} title={option.title}/>
                            </div>);
            })}
                      </div>)}
                  </div>
                </react_1.Dialog.Panel>
              </react_1.Transition.Child>
            </div>
          </div>
        </react_1.Dialog>
      </react_1.Transition>
    </>);
};
exports.default = MobileActions;
