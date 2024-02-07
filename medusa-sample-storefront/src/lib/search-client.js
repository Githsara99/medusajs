"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_INDEX_NAME = exports.searchClient = void 0;
var instant_meilisearch_1 = require("@meilisearch/instant-meilisearch");
var endpoint = process.env.NEXT_PUBLIC_SEARCH_ENDPOINT || "http://127.0.0.1:7700";
var apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "test_key";
exports.searchClient = (0, instant_meilisearch_1.instantMeiliSearch)(endpoint, apiKey);
exports.SEARCH_INDEX_NAME = process.env.NEXT_PUBLIC_INDEX_NAME || "products";
// If you want to use Algolia instead then uncomment the following lines, and delete the above lines
// you should also install algoliasearch - yarn add algoliasearch
// import algoliasearch from "algoliasearch/lite"
// const appId = process.env.NEXT_PUBLIC_SEARCH_APP_ID || "test_app_id"
// const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "test_key"
// export const searchClient = algoliasearch(appId, apiKey)
// export const SEARCH_INDEX_NAME =
//   process.env.NEXT_PUBLIC_INDEX_NAME || "products"
