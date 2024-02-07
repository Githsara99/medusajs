"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("@medusajs/ui");
var refinement_list_1 = require("@modules/store/components/refinement-list");
var paginated_products_1 = require("@modules/store/templates/paginated-products");
var localized_client_link_1 = require("@modules/common/components/localized-client-link");
var SearchResultsTemplate = function (_a) {
    var query = _a.query, ids = _a.ids, sortBy = _a.sortBy, page = _a.page, countryCode = _a.countryCode;
    var pageNumber = page ? parseInt(page) : 1;
    return (<>
      <div className="flex justify-between border-b w-full py-6 px-8 small:px-14 items-center">
        <div className="flex flex-col items-start">
          <ui_1.Text className="text-ui-fg-muted">Search Results for:</ui_1.Text>
          <ui_1.Heading>
            {decodeURI(query)} ({ids.length})
          </ui_1.Heading>
        </div>
        <localized_client_link_1.default href="/store" className="txt-medium text-ui-fg-subtle hover:text-ui-fg-base">
          Clear
        </localized_client_link_1.default>
      </div>
      <div className="flex flex-col small:flex-row small:items-start p-6">
        {ids.length > 0 ? (<>
            <refinement_list_1.default sortBy={sortBy || "created_at"} search/>
            <div className="content-container">
              <paginated_products_1.default productsIds={ids} sortBy={sortBy} page={pageNumber} countryCode={countryCode}/>
            </div>
          </>) : (<ui_1.Text className="ml-8 small:ml-14 mt-3">No results.</ui_1.Text>)}
      </div>
    </>);
};
exports.default = SearchResultsTemplate;
