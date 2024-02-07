"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@medusajs/icons");
var ui_1 = require("@medusajs/ui");
var Hero = function () {
    return (<div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <ui_1.Heading level="h1" className="text-3xl leading-10 text-ui-fg-base font-normal">
            Ecommerce Starter Template
          </ui_1.Heading>
          <ui_1.Heading level="h2" className="text-3xl leading-10 text-ui-fg-subtle font-normal">
            Powered by Medusa and Next.js
          </ui_1.Heading>
        </span>
        <a href="https://github.com/medusajs/nextjs-starter-medusa" target="_blank">
          <ui_1.Button variant="secondary">
            View on GitHub
            <icons_1.Github />
          </ui_1.Button>
        </a>
      </div>
    </div>);
};
exports.default = Hero;
