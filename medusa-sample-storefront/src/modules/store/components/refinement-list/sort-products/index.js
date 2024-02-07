"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter_radio_group_1 = require("@modules/common/components/filter-radio-group");
var sortOptions = [
    {
        value: "created_at",
        label: "Latest Arrivals",
    },
    {
        value: "price_asc",
        label: "Price: Low -> High",
    },
    {
        value: "price_desc",
        label: "Price: High -> Low",
    },
];
var SortProducts = function (_a) {
    var sortBy = _a.sortBy, setQueryParams = _a.setQueryParams;
    var handleChange = function (e) {
        var newSortBy = e.target.value;
        setQueryParams("sortBy", newSortBy);
    };
    return (<filter_radio_group_1.default title="Sort by" items={sortOptions} value={sortBy} handleChange={handleChange}/>);
};
exports.default = SortProducts;
