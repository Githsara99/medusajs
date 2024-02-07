"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var SkeletonLineItem = function () {
    return (<ui_1.Table.Row className="w-full m-4">
      <ui_1.Table.Cell className="p-4 w-24">
        <div className="flex w-24 h-24 p-4 bg-gray-200 animate-pulse"/>
      </ui_1.Table.Cell>
      <ui_1.Table.Cell className="text-left">
        <div className="flex flex-col gap-y-2">
          <div className="w-32 h-4 bg-gray-200 animate-pulse"/>
          <div className="w-24 h-4 bg-gray-200 animate-pulse"/>
        </div>
      </ui_1.Table.Cell>
      <ui_1.Table.Cell>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-8 bg-gray-200 animate-pulse"/>
          <div className="w-14 h-10 bg-gray-200 animate-pulse"/>
        </div>
      </ui_1.Table.Cell>
      <ui_1.Table.Cell>
        <div className="flex gap-2">
          <div className="w-12 h-6 bg-gray-200 animate-pulse"/>
        </div>
      </ui_1.Table.Cell>
      <ui_1.Table.Cell>
        <div className="flex gap-2 justify-end">
          <div className="w-12 h-6 bg-gray-200 animate-pulse"/>
        </div>
      </ui_1.Table.Cell>
    </ui_1.Table.Row>);
};
exports.default = SkeletonLineItem;
