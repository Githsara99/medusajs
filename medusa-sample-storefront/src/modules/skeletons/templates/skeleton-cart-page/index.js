"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var repeat_1 = require("@lib/util/repeat");
var skeleton_cart_item_1 = require("@modules/skeletons/components/skeleton-cart-item");
var skeleton_code_form_1 = require("@modules/skeletons/components/skeleton-code-form");
var skeleton_order_summary_1 = require("@modules/skeletons/components/skeleton-order-summary");
var SkeletonCartPage = function () {
    return (<div className="py-12">
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
          <div className="flex flex-col bg-white p-6 gap-y-6">
            <div className="bg-white flex items-start justify-between">
              <div className="flex flex-col gap-y-2">
                <div className="w-60 h-8 bg-gray-200 animate-pulse"/>
                <div className="w-48 h-6 bg-gray-200 animate-pulse"/>
              </div>
              <div>
                <div className="w-14 h-8 bg-gray-200 animate-pulse"/>
              </div>
            </div>
            <div>
              <div className="pb-3 flex items-center">
                <div className="w-20 h-12 bg-gray-200 animate-pulse"/>
              </div>
              <ui_1.Table>
                <ui_1.Table.Header className="border-t-0">
                  <ui_1.Table.Row>
                    <ui_1.Table.HeaderCell className="!pl-0">
                      <div className="w-10 h-6 bg-gray-200 animate-pulse"/>
                    </ui_1.Table.HeaderCell>
                    <ui_1.Table.HeaderCell></ui_1.Table.HeaderCell>
                    <ui_1.Table.HeaderCell>
                      <div className="w-16 h-6 bg-gray-200 animate-pulse"/>
                    </ui_1.Table.HeaderCell>
                    <ui_1.Table.HeaderCell>
                      <div className="w-12 h-6 bg-gray-200 animate-pulse"/>
                    </ui_1.Table.HeaderCell>
                    <ui_1.Table.HeaderCell className="!pr-0">
                      <div className="flex justify-end">
                        <div className="w-12 h-6 bg-gray-200 animate-pulse"/>
                      </div>
                    </ui_1.Table.HeaderCell>
                  </ui_1.Table.Row>
                </ui_1.Table.Header>
                <ui_1.Table.Body>
                  {(0, repeat_1.default)(4).map(function (index) { return (<skeleton_cart_item_1.default key={index}/>); })}
                </ui_1.Table.Body>
              </ui_1.Table>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <skeleton_order_summary_1.default />
            <skeleton_code_form_1.default />
          </div>
        </div>
      </div>
    </div>);
};
exports.default = SkeletonCartPage;
