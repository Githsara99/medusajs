"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var react_1 = require("react");
var only_unique_1 = require("@lib/util/only-unique");
var OptionSelect = function (_a) {
    var option = _a.option, current = _a.current, updateOption = _a.updateOption, title = _a.title;
    var filteredOptions = option.values.map(function (v) { return v.value; }).filter(only_unique_1.onlyUnique);
    return (<div className="flex flex-col gap-y-3">
      <span className="text-sm">Select {title}</span>
      <div className="flex flex-wrap justify-between gap-2">
        {filteredOptions.map(function (v) {
            return (<button onClick={function () {
                var _a;
                return updateOption((_a = {}, _a[option.id] = v, _a));
            }} key={v} className={(0, ui_1.clx)("border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 ", {
                    "border-ui-border-interactive": v === current,
                    "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150": v !== current,
                })}>
              {v}
            </button>);
        })}
      </div>
    </div>);
};
exports.default = OptionSelect;
