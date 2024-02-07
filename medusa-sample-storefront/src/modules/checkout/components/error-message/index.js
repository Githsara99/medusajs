"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorMessage = function (_a) {
    var error = _a.error;
    if (!error) {
        return null;
    }
    return (<div className="pt-2 text-rose-500 text-small-regular">
      <span>{error}</span>
    </div>);
};
exports.default = ErrorMessage;
