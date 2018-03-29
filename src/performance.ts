import { createStubPerformanceNavigation } from "./navigation";
import { createStubPerformanceTiming } from "./timing";

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
 * @param shallowOverrides   Any attributes to apply on top of the defaults.
 * @param deepOverrides   Any attributes to deeply apply to sub-members.
 * @returns Stub version of the performance object.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance
 */
export const createStubPerformance = (shallowOverrides: Partial<Performance> = {}, deepOverrides: Partial<DeepPerformanceOverrides> = {}) => {
    const performance = {
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
        navigation: createStubPerformanceNavigation(deepOverrides.navigation),
        now: () => 0,
        setResourceTimingBufferSize: () => {},
        timeOrigin: 0,
        timing: createStubPerformanceTiming(deepOverrides.timing),
        toJSON: (): string => JSON.stringify(performance),
        ...shallowOverrides,
    };

    return performance;
};

export const performance = createStubPerformance();
