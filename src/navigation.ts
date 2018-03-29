/**
 * Base stub for creating PerformanceNavigation objects.
 */
export const performanceNavigation = {
    TYPE_BACK_FORWARD: 2,
    TYPE_NAVIGATE: 0,
    TYPE_RELOAD: 1,
    TYPE_RESERVED: 255,
    redirectCount: 0,
    toJSON: (): string => JSON.stringify(performanceNavigation),
    type: 0,
};

/**
 * Creates a stub version of a performance navigation object.
 *
 * @param overrides   Any attributes to apply on top of the defaults.
 * @returns Stub version of a performance navigation object.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation
 */
export const createStubPerformanceNavigation = (overrides: Partial<typeof performanceNavigation> = {}) => {
    return {
        ...performanceNavigation,
        ...overrides,
    };
};
