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
exports.metadata = void 0;
var profile_phone_1 = require("@modules/account//components/profile-phone");
var profile_billing_address_1 = require("@modules/account/components/profile-billing-address");
var profile_email_1 = require("@modules/account/components/profile-email");
var profile_name_1 = require("@modules/account/components/profile-name");
var profile_password_1 = require("@modules/account/components/profile-password");
var data_1 = require("@lib/data");
var navigation_1 = require("next/navigation");
exports.metadata = {
    title: "Profile",
    description: "View and edit your Medusa Store profile.",
};
function Profile() {
    return __awaiter(this, void 0, void 0, function () {
        var customer, regions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, data_1.getCustomer)()];
                case 1:
                    customer = _a.sent();
                    return [4 /*yield*/, (0, data_1.listRegions)()];
                case 2:
                    regions = _a.sent();
                    if (!customer || !regions) {
                        (0, navigation_1.notFound)();
                    }
                    return [2 /*return*/, (<div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Profile</h1>
        <p className="text-base-regular">
          View and update your profile information, including your name, email,
          and phone number. You can also update your billing address, or change
          your password.
        </p>
      </div>
      <div className="flex flex-col gap-y-8 w-full">
        <profile_name_1.default customer={customer}/>
        <Divider />
        <profile_email_1.default customer={customer}/>
        <Divider />
        <profile_phone_1.default customer={customer}/>
        <Divider />
        <profile_password_1.default customer={customer}/>
        <Divider />
        <profile_billing_address_1.default customer={customer} regions={regions}/>
      </div>
    </div>)];
            }
        });
    });
}
exports.default = Profile;
var Divider = function () {
    return <div className="w-full h-px bg-gray-200"/>;
};
