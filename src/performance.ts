import { createStubPerformanceNavigation } from "./navigation";
import { createStubPerformanceTiming } from "./timing";

/**
 * Base stub for creating Performance objects.
 */
export const performance = {
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
    navigation: createStubPerformanceNavigation(),
    now: () => 0,
    setResourceTimingBufferSize: () => {},
    timeOrigin: 0,
    timing: createStubPerformanceTiming(),
    toJSON: (): string => JSON.stringify(performance),
};

/**
 * Equivalent stub type to the DOM Performance type.
 */
export type StubPerformance = typeof performance;

/**
 * Deep overrides for stub performance members.
 */
export interface DeepPerformanceOverrides {
    /**
     * Overrides for navigation properties.
     */
    navigation: Partial<typeof performance.navigation>;

    /**
     * Overrides for timing properties.
     */
    timing: Partial<typeof performance.timing>;
}

/**
 * Creates a stub version of the performance object.
 *
 * @param shallowOverrides   Any attributes to apply on top of the defaults.
 * @param deepOverrides   Any attributes to deeply apply to sub-members.
 * @returns Stub version of the performance object.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance
 */
export const createStubPerformance = (shallowOverrides: Partial<StubPerformance> = {}, deepOverrides: Partial<DeepPerformanceOverrides> = {}) => {
    const stubPerformance = {
        ...performance,
        ...shallowOverrides,
    };

    if (deepOverrides.navigation !== undefined) {
        stubPerformance.navigation = {
            ...stubPerformance.navigation,
            ...deepOverrides.navigation,
        };
    }

    if (deepOverrides.timing !== undefined) {
        stubPerformance.timing = {
            ...stubPerformance.timing,
            ...deepOverrides.timing,
        };
    }

    return stubPerformance;
};
