"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var ui_1 = require("@medusajs/ui");
var react_2 = require("react");
var modal_context_1 = require("@lib/context/modal-context");
var x_1 = require("@modules/common/icons/x");
var Modal = function (_a) {
    var isOpen = _a.isOpen, close = _a.close, _b = _a.size, size = _b === void 0 ? "medium" : _b, _c = _a.search, search = _c === void 0 ? false : _c, children = _a.children;
    return (<react_1.Transition appear show={isOpen} as={react_2.Fragment}>
      <react_1.Dialog as="div" className="relative z-[75]" onClose={close}>
        <react_1.Transition.Child as={react_2.Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-opacity-75 backdrop-blur-md  h-screen"/>
        </react_1.Transition.Child>

        <div className="fixed inset-0 overflow-y-hidden">
          <div className={(0, ui_1.clx)("flex min-h-full h-full justify-center p-4 text-center", {
            "items-center": !search,
            "items-start": search,
        })}>
            <react_1.Transition.Child as={react_2.Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <react_1.Dialog.Panel className={(0, ui_1.clx)("flex flex-col justify-start w-full transform p-5 text-left align-middle transition-all max-h-[75vh] h-fit", {
            "max-w-md": size === "small",
            "max-w-xl": size === "medium",
            "max-w-3xl": size === "large",
            "bg-transparent shadow-none": search,
            "bg-white shadow-xl border rounded-rounded": !search,
        })}>
                <modal_context_1.ModalProvider close={close}>{children}</modal_context_1.ModalProvider>
              </react_1.Dialog.Panel>
            </react_1.Transition.Child>
          </div>
        </div>
      </react_1.Dialog>
    </react_1.Transition>);
};
var Title = function (_a) {
    var children = _a.children;
    var close = (0, modal_context_1.useModal)().close;
    return (<react_1.Dialog.Title className="flex items-center justify-between">
      <div className="text-large-semi">{children}</div>
      <div>
        <button onClick={close}>
          <x_1.default size={20}/>
        </button>
      </div>
    </react_1.Dialog.Title>);
};
var Description = function (_a) {
    var children = _a.children;
    return (<react_1.Dialog.Description className="flex text-small-regular text-ui-fg-base items-center justify-center pt-2 pb-4 h-full">
      {children}
    </react_1.Dialog.Description>);
};
var Body = function (_a) {
    var children = _a.children;
    return <div className="flex justify-center">{children}</div>;
};
var Footer = function (_a) {
    var children = _a.children;
    return <div className="flex items-center justify-end gap-x-4">{children}</div>;
};
Modal.Title = Title;
Modal.Description = Description;
Modal.Body = Body;
Modal.Footer = Footer;
exports.default = Modal;
