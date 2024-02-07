"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var ui_1 = require("@medusajs/ui");
var navigation_1 = require("next/navigation");
function Pagination(_a) {
    var page = _a.page, totalPages = _a.totalPages;
    var router = (0, navigation_1.useRouter)();
    var pathname = (0, navigation_1.usePathname)();
    var searchParams = (0, navigation_1.useSearchParams)();
    // Helper function to generate an array of numbers within a range
    var arrayRange = function (start, stop) {
        return Array.from({ length: stop - start + 1 }, function (_, index) { return start + index; });
    };
    // Function to handle page changes
    var handlePageChange = function (newPage) {
        var params = new URLSearchParams(searchParams);
        params.set("page", newPage.toString());
        router.push("".concat(pathname, "?").concat(params.toString()));
    };
    // Function to render a page button
    var renderPageButton = function (p, label, isCurrent) { return (<button key={p} className={(0, ui_1.clx)("txt-xlarge-plus text-ui-fg-muted", {
            "text-ui-fg-base hover:text-ui-fg-subtle": isCurrent,
        })} disabled={isCurrent} onClick={function () { return handlePageChange(p); }}>
      {label}
    </button>); };
    // Function to render ellipsis
    var renderEllipsis = function (key) { return (<span key={key} className="txt-xlarge-plus text-ui-fg-muted items-center cursor-default">
      ...
    </span>); };
    // Function to render page buttons based on the current page and total pages
    var renderPageButtons = function () {
        var buttons = [];
        if (totalPages <= 7) {
            // Show all pages
            buttons.push.apply(buttons, arrayRange(1, totalPages).map(function (p) {
                return renderPageButton(p, p, p === page);
            }));
        }
        else {
            // Handle different cases for displaying pages and ellipses
            if (page <= 4) {
                // Show 1, 2, 3, 4, 5, ..., lastpage
                buttons.push.apply(buttons, arrayRange(1, 5).map(function (p) { return renderPageButton(p, p, p === page); }));
                buttons.push(renderEllipsis("ellipsis1"));
                buttons.push(renderPageButton(totalPages, totalPages, totalPages === page));
            }
            else if (page >= totalPages - 3) {
                // Show 1, ..., lastpage - 4, lastpage - 3, lastpage - 2, lastpage - 1, lastpage
                buttons.push(renderPageButton(1, 1, 1 === page));
                buttons.push(renderEllipsis("ellipsis2"));
                buttons.push.apply(buttons, arrayRange(totalPages - 4, totalPages).map(function (p) {
                    return renderPageButton(p, p, p === page);
                }));
            }
            else {
                // Show 1, ..., page - 1, page, page + 1, ..., lastpage
                buttons.push(renderPageButton(1, 1, 1 === page));
                buttons.push(renderEllipsis("ellipsis3"));
                buttons.push.apply(buttons, arrayRange(page - 1, page + 1).map(function (p) {
                    return renderPageButton(p, p, p === page);
                }));
                buttons.push(renderEllipsis("ellipsis4"));
                buttons.push(renderPageButton(totalPages, totalPages, totalPages === page));
            }
        }
        return buttons;
    };
    // Render the component
    return (<div className="flex justify-center w-full mt-12">
      <div className="flex gap-3 items-end">{renderPageButtons()}</div>
    </div>);
}
exports.Pagination = Pagination;
