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
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_instantsearch_hooks_web_1 = require("react-instantsearch-hooks-web");
var SearchBoxWrapper = function (_a) {
    var children = _a.children, _b = _a.placeholder, placeholder = _b === void 0 ? "Search products..." : _b, rest = __rest(_a, ["children", "placeholder"]);
    var _c = (0, react_instantsearch_hooks_web_1.useSearchBox)(rest), query = _c.query, refine = _c.refine;
    var _d = (0, react_1.useState)(query), value = _d[0], setValue = _d[1];
    var inputRef = (0, react_1.useRef)(null);
    var router = (0, navigation_1.useRouter)();
    var onReset = function () {
        setValue("");
    };
    var onChange = function (event) {
        setValue(event.currentTarget.value);
    };
    var onSubmit = function () {
        if (value) {
            router.push("/results/".concat(value));
        }
    };
    (0, react_1.useEffect)(function () {
        if (query !== value) {
            refine(value);
        }
        // We don't want to track when the InstantSearch query changes.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    (0, react_1.useEffect)(function () {
        // We bypass the state update if the input is focused to avoid concurrent
        // updates when typing.
        if (document.activeElement !== inputRef.current && query !== value) {
            setValue(query);
        }
        // We don't want to track when the React state value changes.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);
    (0, react_1.useEffect)(function () {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    var state = {
        value: value,
        inputRef: inputRef,
        onChange: onChange,
        onSubmit: onSubmit,
        onReset: onReset,
        placeholder: placeholder,
    };
    return children(state);
};
exports.default = SearchBoxWrapper;
