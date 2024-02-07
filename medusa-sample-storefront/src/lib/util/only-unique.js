"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyUnique = void 0;
var onlyUnique = function (value, index, self) {
    return self.indexOf(value) === index;
};
exports.onlyUnique = onlyUnique;
