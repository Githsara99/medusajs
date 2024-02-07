"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var FilterRadioGroup = function (_a) {
    var title = _a.title, items = _a.items, value = _a.value, handleChange = _a.handleChange;
    return (<div className="flex gap-x-3 flex-col gap-y-3">
      <ui_1.Text className="txt-compact-small-plus text-ui-fg-muted">{title}</ui_1.Text>
      <ui_1.RadioGroup>
        {items === null || items === void 0 ? void 0 : items.map(function (i) { return (<div key={i.value} className={(0, ui_1.clx)("flex gap-x-2 items-center", {
                "ml-[-1.75rem]": i.value === value,
            })}>
            {i.value === value && <icons_1.EllipseMiniSolid />}
            <ui_1.RadioGroup.Item checked={i.value === value} onClick={function (e) {
                return handleChange(e, i.value);
            }} className="hidden peer" id={i.value} value={i.value}/>
            <ui_1.Label placeholder={i.label} htmlFor={i.value} className={(0, ui_1.clx)("!txt-compact-small !transform-none text-ui-fg-subtle hover:cursor-pointer", {
                "text-ui-fg-base": i.value === value,
            })}>
              {i.label}
            </ui_1.Label>
          </div>); })}
      </ui_1.RadioGroup>
    </div>);
};
exports.default = FilterRadioGroup;
