"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var ui_1 = require("@medusajs/ui");
var react_2 = require("react");
var use_toggle_state_1 = require("@lib/hooks/use-toggle-state");
var react_dom_1 = require("react-dom");
var AccountInfo = function (_a) {
    var label = _a.label, currentInfo = _a.currentInfo, isSuccess = _a.isSuccess, isError = _a.isError, clearState = _a.clearState, _b = _a.errorMessage, errorMessage = _b === void 0 ? "An error occurred, please try again" : _b, children = _a.children;
    var _c = (0, use_toggle_state_1.default)(), state = _c.state, close = _c.close, toggle = _c.toggle;
    var pending = (0, react_dom_1.useFormStatus)().pending;
    var handleToggle = function () {
        clearState();
        setTimeout(function () { return toggle(); }, 100);
    };
    (0, react_2.useEffect)(function () {
        if (isSuccess) {
            close();
        }
    }, [isSuccess, close]);
    return (<div className="text-small-regular">
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <span className="uppercase text-ui-fg-base">{label}</span>
          <div className="flex items-center flex-1 basis-0 justify-end gap-x-4">
            {typeof currentInfo === "string" ? (<span className="font-semibold">{currentInfo}</span>) : (currentInfo)}
          </div>
        </div>
        <div>
          <ui_1.Button variant="secondary" className="w-[100px] min-h-[25px] py-1" onClick={handleToggle} type={state ? "reset" : "button"}>
            {state ? "Cancel" : "Edit"}
          </ui_1.Button>
        </div>
      </div>

      {/* Success state */}
      <react_1.Disclosure>
        <react_1.Disclosure.Panel static className={(0, ui_1.clx)("transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden", {
            "max-h-[1000px] opacity-100": isSuccess,
            "max-h-0 opacity-0": !isSuccess,
        })}>
          <ui_1.Badge className="p-2 my-4" color="green">
            <span>{label} updated succesfully</span>
          </ui_1.Badge>
        </react_1.Disclosure.Panel>
      </react_1.Disclosure>

      {/* Error state  */}
      <react_1.Disclosure>
        <react_1.Disclosure.Panel static className={(0, ui_1.clx)("transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden", {
            "max-h-[1000px] opacity-100": isError,
            "max-h-0 opacity-0": !isError,
        })}>
          <ui_1.Badge className="p-2 my-4" color="red">
            <span>{errorMessage}</span>
          </ui_1.Badge>
        </react_1.Disclosure.Panel>
      </react_1.Disclosure>

      <react_1.Disclosure>
        <react_1.Disclosure.Panel static className={(0, ui_1.clx)("transition-[max-height,opacity] duration-300 ease-in-out overflow-visible", {
            "max-h-[1000px] opacity-100": state,
            "max-h-0 opacity-0": !state,
        })}>
          <div className="flex flex-col gap-y-2 py-4">
            <div>{children}</div>
            <div className="flex items-center justify-end mt-2">
              <ui_1.Button isLoading={pending} className="w-full small:max-w-[140px]" type="submit">
                Save changes
              </ui_1.Button>
            </div>
          </div>
        </react_1.Disclosure.Panel>
      </react_1.Disclosure>
    </div>);
};
exports.default = AccountInfo;
