var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Creates a stub version of a performance navigation object.
     *
     * @param overrides   Any attributes to apply on top of the defaults.
     * @returns Stub version of a performance navigation object.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation
     */
    exports.createPerformanceNavigation = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        var navigation = __assign({ TYPE_BACK_FORWARD: 2, TYPE_NAVIGATE: 0, TYPE_RELOAD: 1, TYPE_RESERVED: 255, redirectCount: 0, toJSON: function () { return JSON.stringify(navigation); }, type: 0 }, overrides);
        return navigation;
    };
});
