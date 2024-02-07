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
var icons_1 = require("@medusajs/icons");
var navigation_1 = require("next/navigation");
var search_box_wrapper_1 = require("../search-box-wrapper");
var ControlledSearchBox = function (_a) {
    var inputRef = _a.inputRef, onChange = _a.onChange, onReset = _a.onReset, onSubmit = _a.onSubmit, placeholder = _a.placeholder, value = _a.value, props = __rest(_a, ["inputRef", "onChange", "onReset", "onSubmit", "placeholder", "value"]);
    var handleSubmit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (onSubmit) {
            onSubmit(event);
        }
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };
    var handleReset = function (event) {
        event.preventDefault();
        event.stopPropagation();
        onReset(event);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (<div {...props} className="w-full">
      <form action="" noValidate onSubmit={handleSubmit} onReset={handleReset}>
        <div className="flex items-center justify-between">
          <input ref={inputRef} autoComplete="off" autoCorrect="off" autoCapitalize="off" placeholder={placeholder} spellCheck={false} type="search" value={value} onChange={onChange} className="txt-compact-large h-6 placeholder:text-ui-fg-on-color placeholder:transition-colors focus:outline-none flex-1 bg-transparent "/>
          {value && (<button onClick={handleReset} type="button" className="items-center justify-center text-ui-fg-on-color focus:outline-none gap-x-2 px-2 txt-compact-large flex">
              <icons_1.XMarkMini />
              Cancel
            </button>)}
        </div>
      </form>
    </div>);
};
var SearchBox = function () {
    var router = (0, navigation_1.useRouter)();
    return (<search_box_wrapper_1.default>
      {function (props) {
            return (<>
            <ControlledSearchBox {...props}/>
          </>);
        }}
    </search_box_wrapper_1.default>);
};
exports.default = SearchBox;
