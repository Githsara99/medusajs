"use strict";
/**
 * Calculates the number of spooky skeletons to show while an infinite scroll is loading the next page.
 * Per default we fetch 12 products per page, so we need to calculate the number of skeletons to show,
 * if the remaing products are less than 12.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var getNumberOfSkeletons = function (pages) {
    if (!pages) {
        return 0;
    }
    var count = pages[pages.length - 1].response.count;
    var retrieved = count - pages.reduce(function (acc, curr) { return acc + curr.response.products.length; }, 0);
    if (count - retrieved < 12) {
        return count - retrieved;
    }
    return 12;
};
exports.default = getNumberOfSkeletons;
