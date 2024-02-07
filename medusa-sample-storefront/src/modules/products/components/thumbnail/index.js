"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var image_1 = require("next/image");
var react_1 = require("react");
var placeholder_image_1 = require("@modules/common/icons/placeholder-image");
var Thumbnail = function (_a) {
    var _b;
    var thumbnail = _a.thumbnail, images = _a.images, _c = _a.size, size = _c === void 0 ? "small" : _c, isFeatured = _a.isFeatured, className = _a.className;
    var initialImage = thumbnail || ((_b = images === null || images === void 0 ? void 0 : images[0]) === null || _b === void 0 ? void 0 : _b.url);
    return (<ui_1.Container className={(0, ui_1.clx)("relative w-full overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150", className, {
            "aspect-[11/14]": isFeatured,
            "aspect-[9/16]": !isFeatured && size !== "square",
            "aspect-[1/1]": size === "square",
            "w-[180px]": size === "small",
            "w-[290px]": size === "medium",
            "w-[440px]": size === "large",
            "w-full": size === "full",
        })}>
      <ImageOrPlaceholder image={initialImage} size={size}/>
    </ui_1.Container>);
};
var ImageOrPlaceholder = function (_a) {
    var image = _a.image, size = _a.size;
    return image ? (<image_1.default src={image} alt="Thumbnail" className="absolute inset-0 object-cover object-center" draggable={false} quality={50} sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px" fill/>) : (<div className="w-full h-full absolute inset-0 flex items-center justify-center">
      <placeholder_image_1.default size={size === "small" ? 16 : 24}/>
    </div>);
};
exports.default = Thumbnail;
