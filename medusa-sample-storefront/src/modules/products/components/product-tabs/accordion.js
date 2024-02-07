"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var AccordionPrimitive = require("@radix-ui/react-accordion");
var react_1 = require("react");
var Accordion = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (
    /* @ts-expect-error */
    <AccordionPrimitive.Root {...props}>{children}</AccordionPrimitive.Root>);
};
var Item = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, description = _a.description, children = _a.children, className = _a.className, _b = _a.headingSize, headingSize = _b === void 0 ? "large" : _b, _c = _a.customTrigger, customTrigger = _c === void 0 ? undefined : _c, _d = _a.forceMountContent, forceMountContent = _d === void 0 ? undefined : _d, triggerable = _a.triggerable, props = __rest(_a, ["title", "subtitle", "description", "children", "className", "headingSize", "customTrigger", "forceMountContent", "triggerable"]);
    return (
    /* @ts-expect-error */
    <AccordionPrimitive.Item {...props} className={(0, ui_1.clx)("border-grey-20 group border-t last:mb-0 last:border-b", "py-3", className)}>
      {/* @ts-expect-error */}
      <AccordionPrimitive.Header className="px-1">
        <div className="flex flex-col">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <ui_1.Text className="text-ui-fg-subtle text-sm">{title}</ui_1.Text>
            </div>
            {/* @ts-expect-error */}
            <AccordionPrimitive.Trigger>
              {customTrigger || <MorphingTrigger />}
            </AccordionPrimitive.Trigger>
          </div>
          {subtitle && (<ui_1.Text as="span" size="small" className="mt-1">
              {subtitle}
            </ui_1.Text>)}
        </div>
      </AccordionPrimitive.Header>
      {/* @ts-expect-error */}
      <AccordionPrimitive.Content forceMount={forceMountContent} className={(0, ui_1.clx)("radix-state-closed:animate-accordion-close radix-state-open:animate-accordion-open radix-state-closed:pointer-events-none px-1")}>
        <div className="inter-base-regular group-radix-state-closed:animate-accordion-close">
          {description && <ui_1.Text>{description}</ui_1.Text>}
          <div className="w-full">{children}</div>
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>);
};
Accordion.Item = Item;
var MorphingTrigger = function () {
    return (<div className="text-grey-90 hover:bg-grey-5 active:bg-grey-5 active:text-violet-60 focus:border-violet-60 disabled:text-grey-30 bg-transparent disabled:bg-transparent rounded-rounded group relative p-[6px]">
      <div className="h-5 w-5">
        <span className="bg-grey-50 rounded-circle group-radix-state-open:rotate-90 absolute inset-y-[31.75%] left-[48%] right-1/2 w-[1.5px] duration-300"/>
        <span className="bg-grey-50 rounded-circle group-radix-state-open:rotate-90 group-radix-state-open:left-1/2 group-radix-state-open:right-1/2 absolute inset-x-[31.75%] top-[48%] bottom-1/2 h-[1.5px] duration-300"/>
      </div>
    </div>);
};
exports.default = Accordion;
