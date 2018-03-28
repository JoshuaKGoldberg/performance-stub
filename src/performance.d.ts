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
export declare const createPerformanceStub: (overrides?: Partial<Performance>, deepOverrides?: Partial<DeepPerformanceOverrides>) => Performance;
export declare const performance: Performance;
