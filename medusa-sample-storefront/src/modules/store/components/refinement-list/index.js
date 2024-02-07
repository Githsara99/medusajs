"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var sort_products_1 = require("./sort-products");
var RefinementList = function (_a) {
    var sortBy = _a.sortBy;
    var router = (0, navigation_1.useRouter)();
    var pathname = (0, navigation_1.usePathname)();
    var searchParams = (0, navigation_1.useSearchParams)();
    var createQueryString = (0, react_1.useCallback)(function (name, value) {
        var params = new URLSearchParams(searchParams);
        params.set(name, value);
        return params.toString();
    }, [searchParams]);
    var setQueryParams = function (name, value) {
        var query = createQueryString(name, value);
        router.push("".concat(pathname, "?").concat(query));
    };
    return (<div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
      <sort_products_1.default sortBy={sortBy} setQueryParams={setQueryParams}/>
    </div>);
};
exports.default = RefinementList;
