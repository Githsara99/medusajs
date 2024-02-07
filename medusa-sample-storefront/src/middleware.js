"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.middleware = void 0;
var server_1 = require("next/server");
var BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;
var DEFAULT_REGION = process.env.NEXT_PUBLIC_DEFAULT_REGION || "us";
/**
 * Fetches regions from Medusa and sets the region cookie.
 * @param request
 * @param response
 */
function getCountryCode(request, regionMap) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var countryCode, vercelCountryCode, urlCountryCode;
        return __generator(this, function (_c) {
            try {
                countryCode = void 0;
                vercelCountryCode = (_a = request.headers
                    .get("x-vercel-ip-country")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                urlCountryCode = (_b = request.nextUrl.pathname.split("/")[1]) === null || _b === void 0 ? void 0 : _b.toLowerCase();
                if (urlCountryCode && regionMap.has(urlCountryCode)) {
                    countryCode = urlCountryCode;
                }
                else if (vercelCountryCode && regionMap.has(vercelCountryCode)) {
                    countryCode = vercelCountryCode;
                }
                else if (regionMap.has(DEFAULT_REGION)) {
                    countryCode = DEFAULT_REGION;
                }
                else if (regionMap.keys().next().value) {
                    countryCode = regionMap.keys().next().value;
                }
                return [2 /*return*/, countryCode];
            }
            catch (error) {
                if (process.env.NODE_ENV === "development") {
                    console.error("Middleware.ts: Error getting the country code. Did you set up regions in your Medusa Admin and define a NEXT_PUBLIC_MEDUSA_BACKEND_URL environment variable?");
                }
            }
            return [2 /*return*/];
        });
    });
}
function listCountries() {
    return __awaiter(this, void 0, void 0, function () {
        var regions, regionMap_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("".concat(BACKEND_URL, "/store/regions"), {
                            next: {
                                revalidate: 3600,
                                tags: ["regions"],
                            },
                        }).then(function (res) { return res.json(); })
                        // Create a map of country codes to regions.
                    ];
                case 1:
                    regions = (_a.sent()).regions;
                    regionMap_1 = new Map();
                    regions.forEach(function (region) {
                        region.countries.forEach(function (c) {
                            regionMap_1.set(c.iso_2, region);
                        });
                    });
                    return [2 /*return*/, regionMap_1];
                case 2:
                    error_1 = _a.sent();
                    if (process.env.NODE_ENV === "development") {
                        console.error("Middleware.ts: Error fetching regions. Did you set up regions in your Medusa Admin and define a NEXT_PUBLIC_MEDUSA_BACKEND_URL environment variable?");
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Middleware to handle region selection and onboarding status.
 */
function middleware(request) {
    return __awaiter(this, void 0, void 0, function () {
        var searchParams, isOnboarding, onboardingCookie, regionMap, countryCode, _a, urlHasCountryCode, response, redirectPath;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    searchParams = request.nextUrl.searchParams;
                    isOnboarding = searchParams.get("onboarding") === "true";
                    onboardingCookie = request.cookies.get("_medusa_onboarding");
                    return [4 /*yield*/, listCountries()];
                case 1:
                    regionMap = _b.sent();
                    _a = regionMap;
                    if (!_a) return [3 /*break*/, 3];
                    return [4 /*yield*/, getCountryCode(request, regionMap)];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3:
                    countryCode = _a;
                    urlHasCountryCode = countryCode && request.nextUrl.pathname.split("/")[1].includes(countryCode);
                    // check if one of the country codes is in the url
                    if (urlHasCountryCode && (!isOnboarding || onboardingCookie)) {
                        return [2 /*return*/, server_1.NextResponse.next()];
                    }
                    response = server_1.NextResponse.redirect(request.nextUrl, 307);
                    // If no country code is set, we redirect to the relevant region.
                    if (!urlHasCountryCode && countryCode) {
                        redirectPath = request.nextUrl.pathname === "/" ? "" : request.nextUrl.pathname;
                        response = server_1.NextResponse.redirect("".concat(request.nextUrl.origin, "/").concat(countryCode).concat(redirectPath), 307);
                    }
                    // Set a cookie to indicate that we're onboarding. This is used to show the onboarding flow.
                    if (isOnboarding) {
                        response.cookies.set("_medusa_onboarding", "true", { maxAge: 60 * 60 * 24 });
                    }
                    return [2 /*return*/, response];
            }
        });
    });
}
exports.middleware = middleware;
exports.config = {
    matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};
