"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
require("styles/globals.css");
var BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000";
exports.metadata = {
    metadataBase: new URL(BASE_URL),
};
function RootLayout(props) {
    return (<html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>);
}
exports.default = RootLayout;
