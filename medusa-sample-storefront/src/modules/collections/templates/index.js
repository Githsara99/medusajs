"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var skeleton_product_grid_1 = require("@modules/skeletons/templates/skeleton-product-grid");
var refinement_list_1 = require("@modules/store/components/refinement-list");
var paginated_products_1 = require("@modules/store/templates/paginated-products");
function CollectionTemplate(_a) {
    var sortBy = _a.sortBy, collection = _a.collection, page = _a.page, countryCode = _a.countryCode;
    var pageNumber = page ? parseInt(page) : 1;
    return (<div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      <refinement_list_1.default sortBy={sortBy || "created_at"}/>
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1>{collection.title}</h1>
        </div>
        <react_1.Suspense fallback={<skeleton_product_grid_1.default />}>
          <paginated_products_1.default sortBy={sortBy || "created_at"} page={pageNumber} collectionId={collection.id} countryCode={countryCode}/>
        </react_1.Suspense>
      </div>
    </div>);
}
exports.default = CollectionTemplate;
