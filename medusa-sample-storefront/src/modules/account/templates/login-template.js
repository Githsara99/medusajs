"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN_VIEW = void 0;
var react_1 = require("react");
var register_1 = require("@modules/account/components/register");
var login_1 = require("@modules/account/components/login");
var LOGIN_VIEW;
(function (LOGIN_VIEW) {
    LOGIN_VIEW["SIGN_IN"] = "sign-in";
    LOGIN_VIEW["REGISTER"] = "register";
})(LOGIN_VIEW || (exports.LOGIN_VIEW = LOGIN_VIEW = {}));
var LoginTemplate = function () {
    var _a = (0, react_1.useState)("sign-in"), currentView = _a[0], setCurrentView = _a[1];
    return (<div className="w-full flex justify-start px-8 py-8">
      {currentView === "sign-in" ? (<login_1.default setCurrentView={setCurrentView}/>) : (<register_1.default setCurrentView={setCurrentView}/>)}
    </div>);
};
exports.default = LoginTemplate;
