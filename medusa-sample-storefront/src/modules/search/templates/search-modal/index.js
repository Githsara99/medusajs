"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_instantsearch_hooks_web_1 = require("react-instantsearch-hooks-web");
var navigation_1 = require("next/navigation");
var icons_1 = require("@medusajs/icons");
var search_client_1 = require("@lib/search-client");
var hit_1 = require("@modules/search/components/hit");
var hits_1 = require("@modules/search/components/hits");
var search_box_1 = require("@modules/search/components/search-box");
var react_1 = require("react");
function SearchModal() {
    var router = (0, navigation_1.useRouter)();
    var searchRef = (0, react_1.useRef)(null);
    // close modal on outside click
    var handleOutsideClick = function (event) {
        if (event.target === searchRef.current) {
            router.back();
        }
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener("click", handleOutsideClick);
        // cleanup
        return function () {
            window.removeEventListener("click", handleOutsideClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // disable scroll on body when modal is open
    (0, react_1.useEffect)(function () {
        document.body.style.overflow = "hidden";
        return function () {
            document.body.style.overflow = "unset";
        };
    }, []);
    // on escape key press, close modal
    (0, react_1.useEffect)(function () {
        var handleEsc = function (event) {
            if (event.key === "Escape") {
                router.back();
            }
        };
        window.addEventListener("keydown", handleEsc);
        // cleanup
        return function () {
            window.removeEventListener("keydown", handleEsc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<div className="relative z-[75]">
      <div className="fixed inset-0 bg-opacity-75 backdrop-blur-md opacity-100 h-screen w-screen"/>
      <div className="fixed inset-0 px-5 sm:p-0" ref={searchRef}>
        <div className="flex flex-col justify-start w-full h-fit transform p-5 items-center text-left align-middle transition-all max-h-[75vh] bg-transparent shadow-none">
          <react_instantsearch_hooks_web_1.InstantSearch indexName={search_client_1.SEARCH_INDEX_NAME} searchClient={search_client_1.searchClient}>
            <div className="flex absolute flex-col h-fit w-full sm:w-fit">
              <div className="w-full flex items-center gap-x-2 p-4 bg-[rgba(3,7,18,0.5)] text-ui-fg-on-color backdrop-blur-2xl rounded-rounded">
                <icons_1.MagnifyingGlassMini />
                <search_box_1.default />
              </div>
              <div className="flex-1 mt-6">
                <hits_1.default hitComponent={hit_1.default}/>
              </div>
            </div>
          </react_instantsearch_hooks_web_1.InstantSearch>
        </div>
      </div>
    </div>);
}
exports.default = SearchModal;
