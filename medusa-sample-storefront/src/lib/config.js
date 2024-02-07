"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medusaClient = void 0;
var medusa_js_1 = require("@medusajs/medusa-js");
// Defaults to standard port for Medusa server
var MEDUSA_BACKEND_URL = "http://localhost:9000";
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
    MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;
}
exports.medusaClient = new medusa_js_1.default({
    baseUrl: MEDUSA_BACKEND_URL,
    maxRetries: 3,
});
