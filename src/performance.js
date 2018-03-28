var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports", "./navigation", "./timing"], function (require, exports, navigation_1, timing_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Creates a stub version of the performance object.
     *
     * @param overrides   Any attributes to apply on top of the defaults.
     * @param deepOverrides   Any attributes to deeply apply to sub-members.
     * @returns Stub version of the performance object.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance
     */
    exports.createPerformanceStub = function (overrides, deepOverrides) {
        if (overrides === void 0) { overrides = {}; }
        if (deepOverrides === void 0) { deepOverrides = {}; }
        var performance = __assign({ clearMarks: function () { }, clearMeasures: function () { }, clearResourceTimings: function () { }, getEntries: function () { return []; }, getEntriesByName: function () { return []; }, getEntriesByType: function () { return []; }, getMarks: function () { return []; }, getMeasures: function () { return []; }, mark: function () { }, measure: function () { }, navigation: navigation_1.createPerformanceNavigation(deepOverrides.navigation), now: function () { return 0; }, setResourceTimingBufferSize: function () { }, timing: timing_1.createPerformanceTiming(deepOverrides.timing), timeOrigin: 0, toJSON: function () { return JSON.stringify(performance); } }, overrides);
        return performance;
    };
    exports.performance = exports.createPerformanceStub();
});
