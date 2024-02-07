"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var react_2 = require("react");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var country_select_1 = require("../country-select");
var SideMenuItems = {
    Home: "/",
    Store: "/store",
    Search: "/search",
    Account: "/account",
    Cart: "/cart",
};
var SideMenu = function (_a) {
    var regions = _a.regions;
    var toggleState = (0, ui_1.useToggleState)();
    return (<div className="h-full">
      <div className="flex items-center h-full">
        <react_1.Popover className="h-full flex">
          {function (_a) {
            var open = _a.open, close = _a.close;
            return (<>
              <div className="relative flex h-full">
                <react_1.Popover.Button className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base">
                  Menu
                </react_1.Popover.Button>
              </div>

              <react_1.Transition show={open} as={react_2.Fragment} enter="transition ease-out duration-150" enterFrom="opacity-0" enterTo="opacity-100 backdrop-blur-2xl" leave="transition ease-in duration-150" leaveFrom="opacity-100 backdrop-blur-2xl" leaveTo="opacity-0">
                <react_1.Popover.Panel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
                  <div className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6">
                    <div className="flex justify-end" id="xmark">
                      <button onClick={close}>
                        <icons_1.XMark />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-6 items-start justify-start">
                      {Object.entries(SideMenuItems).map(function (_a) {
                    var name = _a[0], href = _a[1];
                    return (<li key={name}>
                            <localized_client_link_1.default href={href} className="text-3xl leading-10 hover:text-ui-fg-disabled" onClick={close}>
                              {name}
                            </localized_client_link_1.default>
                          </li>);
                })}
                    </ul>
                    <div className="flex flex-col gap-y-6">
                      <div className="flex justify-between" onMouseEnter={toggleState.open} onMouseLeave={toggleState.close}>
                        {regions && (<country_select_1.default toggleState={toggleState} regions={regions}/>)}
                        <icons_1.ArrowRightMini className={(0, ui_1.clx)("transition-transform duration-150", toggleState.state ? "-rotate-90" : "")}/>
                      </div>
                      <ui_1.Text className="flex justify-between txt-compact-small">
                        © {new Date().getFullYear()} Medusa Store. All rights
                        reserved.
                      </ui_1.Text>
                    </div>
                  </div>
                </react_1.Popover.Panel>
              </react_1.Transition>
            </>);
        }}
        </react_1.Popover>
      </div>
    </div>);
};
exports.default = SideMenu;
