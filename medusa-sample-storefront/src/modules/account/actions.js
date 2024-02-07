"use server";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOut = exports.updateCustomerBillingAddress = exports.deleteCustomerShippingAddress = exports.updateCustomerShippingAddress = exports.addCustomerShippingAddress = exports.updateCustomerPassword = exports.updateCustomerPhone = exports.updateCustomerEmail = exports.updateCustomerName = exports.logCustomerIn = exports.signUp = void 0;
var data_1 = require("@lib/data");
var cache_1 = require("next/cache");
var navigation_1 = require("next/navigation");
var headers_1 = require("next/headers");
function signUp(_currentState, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var customer, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customer = {
                        email: formData.get("email"),
                        password: formData.get("password"),
                        first_name: formData.get("first_name"),
                        last_name: formData.get("last_name"),
                        phone: formData.get("phone"),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, (0, data_1.createCustomer)(customer)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, data_1.getToken)({ email: customer.email, password: customer.password }).then(function () {
                            (0, cache_1.revalidateTag)("customer");
                        })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    return [2 /*return*/, error_1.toString()];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.signUp = signUp;
function logCustomerIn(_currentState, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = formData.get("email");
                    password = formData.get("password");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.getToken)({ email: email, password: password }).then(function () {
                            (0, cache_1.revalidateTag)("customer");
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    return [2 /*return*/, error_2.toString()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.logCustomerIn = logCustomerIn;
function updateCustomerName(_currentState, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var customer, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customer = {
                        first_name: formData.get("first_name"),
                        last_name: formData.get("last_name"),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.updateCustomer)(customer).then(function () {
                            (0, cache_1.revalidateTag)("customer");
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, { success: true, error: null }];
                case 3:
                    error_3 = _a.sent();
                    return [2 /*return*/, { success: false, error: error_3.toString() }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateCustomerName = updateCustomerName;
function updateCustomerEmail(_currentState, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var customer, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customer = {
                        email: formData.get("email"),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.updateCustomer)(customer).then(function () {
                            (0, cache_1.revalidateTag)("customer");
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, { success: true, error: null }];
                case 3:
                    error_4 = _a.sent();
                    return [2 /*return*/, { success: false, error: error_4.toString() }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateCustomerEmail = updateCustomerEmail;
function updateCustomerPhone(_currentState, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var customer, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customer = {
                        phone: formData.get("phone"),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.updateCustomer)(customer).then(function () {
                            (0, cache_1.revalidateTag)("customer");
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, { success: true, error: null }];
                case 3:
                    error_5 = _a.sent();
                    return [2 /*return*/, { success: false, error: error_5.toString() }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateCustomerPhone = updateCustomerPhone;
function updateCustomerPassword(currentState, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var email, new_password, old_password, confirm_password, isValid, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = currentState.customer.email;
                    new_password = formData.get("new_password");
                    old_password = formData.get("old_password");
                    confirm_password = formData.get("confirm_password");
                    return [4 /*yield*/, (0, data_1.authenticate)({ email: email, password: old_password })
                            .then(function () { return true; })
                            .catch(function () { return false; })];
                case 1:
                    isValid = _a.sent();
                    if (!isValid) {
                        return [2 /*return*/, {
                                customer: currentState.customer,
                                success: false,
                                error: "Old password is incorrect",
                            }];
                    }
                    if (new_password !== confirm_password) {
                        return [2 /*return*/, {
                                customer: currentState.customer,
                                success: false,
                                error: "Passwords do not match",
                            }];
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, (0, data_1.updateCustomer)({ password: new_password }).then(function () {
                            (0, cache_1.revalidateTag)("customer");
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, {
                            customer: currentState.customer,
                            success: true,
                            error: null,
                        }];
                case 4:
                    error_6 = _a.sent();
                    return [2 /*return*/, {
                            customer: currentState.customer,
                            success: false,
                            error: error_6.toString(),
                        }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.updateCustomerPassword = updateCustomerPassword;
function addCustomerShippingAddress(_currentState, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var customer, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customer = {
                        address: {
                            first_name: formData.get("first_name"),
                            last_name: formData.get("last_name"),
                            company: formData.get("company"),
                            address_1: formData.get("address_1"),
                            address_2: formData.get("address_2"),
                            city: formData.get("city"),
                            postal_code: formData.get("postal_code"),
                            province: formData.get("province"),
                            country_code: formData.get("country_code"),
                            phone: formData.get("phone"),
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.addShippingAddress)(customer).then(function () {
                            (0, cache_1.revalidateTag)("customer");
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, { success: true, error: null }];
                case 3:
                    error_7 = _a.sent();
                    return [2 /*return*/, { success: false, error: error_7.toString() }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.addCustomerShippingAddress = addCustomerShippingAddress;
function updateCustomerShippingAddress(currentState, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var addressId, address, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    addressId = currentState.addressId;
                    address = {
                        first_name: formData.get("first_name"),
                        last_name: formData.get("last_name"),
                        address_1: formData.get("address_1"),
                        address_2: formData.get("address_2"),
                        company: formData.get("company"),
                        city: formData.get("city"),
                        postal_code: formData.get("postal_code"),
                        province: formData.get("province"),
                        country_code: formData.get("country_code"),
                        phone: formData.get("phone"),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.updateShippingAddress)(addressId, address).then(function () {
                            (0, cache_1.revalidateTag)("customer");
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, { success: true, error: null, addressId: addressId }];
                case 3:
                    error_8 = _a.sent();
                    return [2 /*return*/, { success: false, error: error_8.toString(), addressId: addressId }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateCustomerShippingAddress = updateCustomerShippingAddress;
function deleteCustomerShippingAddress(addressId) {
    return __awaiter(this, void 0, void 0, function () {
        var error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, data_1.deleteShippingAddress)(addressId).then(function () {
                            (0, cache_1.revalidateTag)("customer");
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, { success: true, error: null }];
                case 2:
                    error_9 = _a.sent();
                    return [2 /*return*/, { success: false, error: error_9.toString() }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteCustomerShippingAddress = deleteCustomerShippingAddress;
function updateCustomerBillingAddress(_currentState, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var customer, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customer = {
                        billing_address: {
                            first_name: formData.get("billing_address.first_name"),
                            last_name: formData.get("billing_address.last_name"),
                            company: formData.get("billing_address.company"),
                            address_1: formData.get("billing_address.address_1"),
                            address_2: formData.get("billing_address.address_2"),
                            city: formData.get("billing_address.city"),
                            postal_code: formData.get("billing_address.postal_code"),
                            province: formData.get("billing_address.province"),
                            country_code: formData.get("billing_address.country_code"),
                            phone: formData.get("billing_address.phone"),
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, data_1.updateCustomer)(customer).then(function () {
                            (0, cache_1.revalidateTag)("customer");
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, { success: true, error: null }];
                case 3:
                    error_10 = _a.sent();
                    return [2 /*return*/, { success: false, error: error_10.toString() }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateCustomerBillingAddress = updateCustomerBillingAddress;
function signOut() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var countryCode;
        return __generator(this, function (_b) {
            (0, headers_1.cookies)().set("_medusa_jwt", "", {
                maxAge: -1,
            });
            countryCode = ((_a = (0, headers_1.headers)().get("next-url")) === null || _a === void 0 ? void 0 : _a.split("/")[1]) || "";
            (0, cache_1.revalidateTag)("auth");
            (0, cache_1.revalidateTag)("customer");
            (0, navigation_1.redirect)("/".concat(countryCode, "/account"));
            return [2 /*return*/];
        });
    });
}
exports.signOut = signOut;
