"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
var login_template_1 = require("@modules/account/templates/login-template");
exports.metadata = {
    title: "Sign in",
    description: "Sign in to your Medusa Store account.",
};
function Login() {
    return <login_template_1.default />;
}
exports.default = Login;
