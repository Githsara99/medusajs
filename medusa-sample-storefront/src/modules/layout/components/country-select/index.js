"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var react_2 = require("react");
var react_country_flag_1 = require("react-country-flag");
var actions_1 = require("app/actions");
var navigation_1 = require("next/navigation");
var CountrySelect = function (_a) {
    var toggleState = _a.toggleState, regions = _a.regions;
    var _b = (0, react_2.useState)(undefined), current = _b[0], setCurrent = _b[1];
    var countryCode = (0, navigation_1.useParams)().countryCode;
    var currentPath = (0, navigation_1.usePathname)().split("/".concat(countryCode))[1];
    var state = toggleState.state, close = toggleState.close;
    var options = (0, react_2.useMemo)(function () {
        return regions === null || regions === void 0 ? void 0 : regions.map(function (r) {
            return r.countries.map(function (c) { return ({
                country: c.iso_2,
                region: r.id,
                label: c.display_name,
            }); });
        }).flat().sort(function (a, b) { return a.label.localeCompare(b.label); });
    }, [regions]);
    (0, react_2.useEffect)(function () {
        if (countryCode) {
            var option = options === null || options === void 0 ? void 0 : options.find(function (o) { return o.country === countryCode; });
            setCurrent(option);
        }
    }, [options, countryCode]);
    var handleChange = function (option) {
        (0, actions_1.updateRegion)(option.country, currentPath);
        close();
    };
    return (<div>
      <react_1.Listbox as="span" onChange={handleChange} defaultValue={countryCode
            ? options === null || options === void 0 ? void 0 : options.find(function (o) { return o.country === countryCode; })
            : undefined}>
        <react_1.Listbox.Button className="py-1 w-full">
          <div className="txt-compact-small flex items-start gap-x-2">
            <span>Shipping to:</span>
            {current && (<span className="txt-compact-small flex items-center gap-x-2">
                <react_country_flag_1.default svg style={{
                width: "16px",
                height: "16px",
            }} countryCode={current.country}/>
                {current.label}
              </span>)}
          </div>
        </react_1.Listbox.Button>
        <div className="flex relative w-full min-w-[320px]">
          <react_1.Transition show={state} as={react_2.Fragment} leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
            <react_1.Listbox.Options className="absolute -bottom-[calc(100%-36px)] left-0 xsmall:left-auto xsmall:right-0 max-h-[442px] overflow-y-scroll z-[900] bg-white drop-shadow-md text-small-regular uppercase text-black no-scrollbar rounded-rounded w-full" static>
              {options === null || options === void 0 ? void 0 : options.map(function (o, index) {
            return (<react_1.Listbox.Option key={index} value={o} className="py-2 hover:bg-gray-200 px-3 cursor-pointer flex items-center gap-x-2">
                    <react_country_flag_1.default svg style={{
                    width: "16px",
                    height: "16px",
                }} countryCode={o.country}/>{" "}
                    {o.label}
                  </react_1.Listbox.Option>);
        })}
            </react_1.Listbox.Options>
          </react_1.Transition>
        </div>
      </react_1.Listbox>
    </div>);
};
exports.default = CountrySelect;
