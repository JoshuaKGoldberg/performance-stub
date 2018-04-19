import { performanceEntryStub } from "./performance-timeline";

/**
 * The base stub for a PerformanceResourceTiming.
 * @see https://www.w3.org/TR/resource-timing-1/#performanceresourcetiming
 */
export const performanceResourceTimingStub = {
    // Extends PerformanceEntry and override the entryType from PerformanceEntry.
    ...performanceEntryStub,
    entryType: "resource",

    // Properties defined by the spec.
    initiatorType: "",
    redirectStart: 0,
    redirectEnd: 0,
    fetchStart: 0,
    domainLookupStart: 0,
    domainLookupEnd: 0,
    connectStart: 0,
    connectEnd: 0,
    secureConnectionStart: 0,
    requestStart: 0,
    responseStart: 0,
    responseEnd: 0,

    // Serializer
    toJSON: () => "",
};

export const createPerformanceResourceTiming = (overrides: Partial<typeof performanceResourceTimingStub>): typeof performanceResourceTimingStub => {
    return {
        ...performanceResourceTimingStub,
        ...overrides,
    };
};
