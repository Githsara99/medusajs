"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
function compareAddresses(address1, address2) {
    return (0, lodash_1.isEqual)((0, lodash_1.omit)(address1, [
        "id",
        "created_at",
        "updated_at",
        "deleted_at",
        "metadata",
        "customer_id",
    ]), (0, lodash_1.omit)(address2, [
        "id",
        "created_at",
        "updated_at",
        "deleted_at",
        "metadata",
        "customer_id",
    ]));
}
exports.default = compareAddresses;
