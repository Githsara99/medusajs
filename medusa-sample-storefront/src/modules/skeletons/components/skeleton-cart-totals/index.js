"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SkeletonCartTotals = function (_a) {
    var _b = _a.header, header = _b === void 0 ? true : _b;
    return (<div className="flex flex-col">
      {header && <div className="w-32 h-4 bg-gray-100 mb-4"></div>}
      <div className="flex items-center justify-between">
        <div className="w-32 h-3 bg-gray-100"></div>
        <div className="w-32 h-3 bg-gray-100"></div>
      </div>

      <div className="flex items-center justify-between my-4">
        <div className="w-24 h-3 bg-gray-100"></div>
        <div className="w-24 h-3 bg-gray-100"></div>
      </div>

      <div className="flex items-center justify-between">
        <div className="w-28 h-3 bg-gray-100 "></div>
        <div className="w-20 h-3 bg-gray-100"></div>
      </div>

      <div className="w-full border-b border-gray-200 border-dashed my-4"></div>

      <div className="flex items-center justify-between">
        <div className="w-32 h-6 bg-gray-100 mb-4"></div>
        <div className="w-24 h-6 bg-gray-100 mb-4"></div>
      </div>
    </div>);
};
exports.default = SkeletonCartTotals;
