"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var image_1 = require("next/image");
var ImageGallery = function (_a) {
    var images = _a.images;
    return (<div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {images.map(function (image, index) {
            return (<ui_1.Container key={image.id} className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle" id={image.id}>
              <image_1.default src={image.url} priority={index <= 2 ? true : false} className="absolute inset-0 rounded-rounded" alt={"Product image ".concat(index + 1)} fill sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px" style={{
                    objectFit: "cover",
                }}/>
            </ui_1.Container>);
        })}
      </div>
    </div>);
};
exports.default = ImageGallery;
