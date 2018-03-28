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
     * Creates a stub version of a performance timing object.
     *
     * @param overrides   Any attributes to apply on top of the defaults.
     * @returns Stub version of a performance timing object.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/timing
     */
    exports.createPerformanceTiming = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        var timing = __assign({ connectEnd: 0, connectStart: 0, domainLookupEnd: 0, domainLookupStart: 0, domComplete: 0, domContentLoadedEventEnd: 0, domContentLoadedEventStart: 0, domInteractive: 0, domLoading: 0, fetchStart: 0, loadEventEnd: 0, loadEventStart: 0, msFirstPaint: 0, navigationStart: 0, redirectEnd: 0, redirectStart: 0, requestStart: 0, responseEnd: 0, responseStart: 0, unloadEventEnd: 0, unloadEventStart: 0, secureConnectionStart: 0, toJSON: function () { return JSON.stringify(timing); } }, overrides);
        return timing;
    };
});
