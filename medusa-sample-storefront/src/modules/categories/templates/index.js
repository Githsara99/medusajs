"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var interactive_link_1 = require("@modules/common/components/interactive-link");
var skeleton_product_grid_1 = require("@modules/skeletons/templates/skeleton-product-grid");
var refinement_list_1 = require("@modules/store/components/refinement-list");
var paginated_products_1 = require("@modules/store/templates/paginated-products");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
function CategoryTemplate(_a) {
    var _b;
    var categories = _a.categories, sortBy = _a.sortBy, page = _a.page, countryCode = _a.countryCode;
    var pageNumber = page ? parseInt(page) : 1;
    var category = categories[categories.length - 1];
    var parents = categories.slice(0, categories.length - 1);
    if (!category || !countryCode)
        (0, navigation_1.notFound)();
    return (<div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      <refinement_list_1.default sortBy={sortBy || "created_at"}/>
      <div className="w-full">
        <div className="flex flex-row mb-8 text-2xl-semi gap-4">
          {parents &&
            parents.map(function (parent) { return (<span key={parent.id} className="text-ui-fg-subtle">
                <localized_client_link_1.default className="mr-4 hover:text-black" href={"/categories/".concat(parent.handle)}>
                  {parent.name}
                </localized_client_link_1.default>
                /
              </span>); })}
          <h1>{category.name}</h1>
        </div>
        {category.description && (<div className="mb-8 text-base-regular">
            <p>{category.description}</p>
          </div>)}
        {category.category_children && (<div className="mb-8 text-base-large">
            <ul className="grid grid-cols-1 gap-2">
              {(_b = category.category_children) === null || _b === void 0 ? void 0 : _b.map(function (c) { return (<li key={c.id}>
                  <interactive_link_1.default href={"/categories/".concat(c.handle)}>
                    {c.name}
                  </interactive_link_1.default>
                </li>); })}
            </ul>
          </div>)}
        <react_1.Suspense fallback={<skeleton_product_grid_1.default />}>
          <paginated_products_1.default sortBy={sortBy || "created_at"} page={pageNumber} categoryId={category.id} countryCode={countryCode}/>
        </react_1.Suspense>
      </div>
    </div>);
}
exports.default = CategoryTemplate;
