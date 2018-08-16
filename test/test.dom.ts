import {
    createStubPerformance,
    createStubPerformanceNavigation,
    createStubPerformanceTiming,
    performance,
} from "../src";

// This file verifies that types are compatible with TypeScript's `lib.dom.d.ts` types.

export const firstPerformance: Performance = performance;
export const stubPerformance: Performance = createStubPerformance();
export const stubPerformanceNavigation: PerformanceNavigation = createStubPerformanceNavigation();
export const stubPerformanceTiming: PerformanceTiming = createStubPerformanceTiming();
