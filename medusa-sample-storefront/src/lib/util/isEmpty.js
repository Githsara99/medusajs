"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.isArray = exports.isObject = void 0;
var isObject = function (input) { return input instanceof Object; };
exports.isObject = isObject;
var isArray = function (input) { return Array.isArray(input); };
exports.isArray = isArray;
var isEmpty = function (input) {
    return (input === null ||
        input === undefined ||
        ((0, exports.isObject)(input) && Object.keys(input).length === 0) ||
        ((0, exports.isArray)(input) && input.length === 0) ||
        (typeof input === "string" && input.trim().length === 0));
};
exports.isEmpty = isEmpty;
