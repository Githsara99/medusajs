"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var back_1 = require("@modules/common/icons/back");
var fast_delivery_1 = require("@modules/common/icons/fast-delivery");
var refresh_1 = require("@modules/common/icons/refresh");
var accordion_1 = require("./accordion");
var ProductTabs = function (_a) {
    var product = _a.product;
    var tabs = [
        {
            label: "Product Information",
            component: <ProductInfoTab product={product}/>,
        },
        {
            label: "Shipping & Returns",
            component: <ShippingInfoTab />,
        },
    ];
    return (<div className="w-full">
      <accordion_1.default type="multiple">
        {tabs.map(function (tab, i) { return (<accordion_1.default.Item key={i} title={tab.label} headingSize="medium" value={tab.label}>
            {tab.component}
          </accordion_1.default.Item>); })}
      </accordion_1.default>
    </div>);
};
var ProductInfoTab = function (_a) {
    var _b;
    var product = _a.product;
    return (<div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Material</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Country of origin</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Type</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Weight</span>
            <p>{product.weight ? "".concat(product.weight, " g") : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensions</span>
            <p>
              {product.length && product.width && product.height
            ? "".concat(product.length, "L x ").concat(product.width, "W x ").concat(product.height, "H")
            : "-"}
            </p>
          </div>
        </div>
      </div>
      {((_b = product.tags) === null || _b === void 0 ? void 0 : _b.length) ? (<div>
          <span className="font-semibold">Tags</span>
        </div>) : null}
    </div>);
};
var ShippingInfoTab = function () {
    return (<div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <fast_delivery_1.default />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p className="max-w-sm">
              Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <refresh_1.default />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p className="max-w-sm">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <back_1.default />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p className="max-w-sm">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = ProductTabs;
