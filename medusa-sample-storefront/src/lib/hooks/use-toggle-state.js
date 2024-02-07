"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 *
 * @param initialState - boolean
 * @returns An array like object with `state`, `open`, `close`, and `toggle` properties
 *  to allow both object and array destructuring
 *
 * ```
 *  const [showModal, openModal, closeModal, toggleModal] = useToggleState()
 *  // or
 *  const { state, open, close, toggle } = useToggleState()
 * ```
 */
var useToggleState = function (initialState) {
    if (initialState === void 0) { initialState = false; }
    var _a = (0, react_1.useState)(initialState), state = _a[0], setState = _a[1];
    var close = function () {
        setState(false);
    };
    var open = function () {
        setState(true);
    };
    var toggle = function () {
        setState(function (state) { return !state; });
    };
    var hookData = [state, open, close, toggle];
    hookData.state = state;
    hookData.open = open;
    hookData.close = close;
    hookData.toggle = toggle;
    return hookData;
};
exports.default = useToggleState;
