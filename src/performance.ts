import { createPerformanceTiming } from "./timing";
import { createPerformanceNavigation } from "./navigation";

/**
 * Deep overrides for stub performance members.
 */
export interface DeepPerformanceOverrides {
    /**
     * Overrides for navigation properties.
     */
    navigation: Partial<PerformanceNavigation>;

    /**
     * Overrides for timing properties.
     */
    timing: Partial<PerformanceTiming>;
}

/**
 * Creates a stub version of the performance object.
 * 
 * @param overrides   Any attributes to apply on top of the defaults.
 * @param deepOverrides   Any attributes to deeply apply to sub-members.
 * @returns Stub version of the performance object.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance
 */
export const createPerformanceStub = (overrides: Partial<Performance> = {}, deepOverrides: Partial<DeepPerformanceOverrides> = {}): Performance => {
    const performance: Performance = {
        clearMarks: () => {},
        clearMeasures: () => {},
        clearResourceTimings: () => {},
        getEntries: () => [],
        getEntriesByName: () => [],
        getEntriesByType: () => [],
        getMarks: () => [],
        getMeasures: () => [],
        mark: () => {},
        measure: () => {},
        navigation: createPerformanceNavigation(deepOverrides.navigation),
        now: () => 0,
        setResourceTimingBufferSize: () => {},
        timing: createPerformanceTiming(deepOverrides.timing),
        timeOrigin: 0,
        toJSON: () => JSON.stringify(performance),
        ...overrides,
    };

    return performance;
};

export const performance = createPerformanceStub();
