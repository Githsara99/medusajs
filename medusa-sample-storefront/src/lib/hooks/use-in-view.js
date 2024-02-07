"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersection = void 0;
var react_1 = require("react");
var useIntersection = function (element, rootMargin) {
    var _a = (0, react_1.useState)(false), isVisible = _a[0], setState = _a[1];
    (0, react_1.useEffect)(function () {
        if (!element.current) {
            return;
        }
        var el = element.current;
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            setState(entry.isIntersecting);
        }, { rootMargin: rootMargin });
        observer.observe(el);
        return function () { return observer.unobserve(el); };
    }, [element, rootMargin]);
    return isVisible;
};
exports.useIntersection = useIntersection;
