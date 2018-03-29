import {
    createStubPerformance,
    createStubPerformanceNavigation,
    createStubPerformanceTiming,
    performance,
} from "../src";

const firstPerformance: Performance = performance;
const stubPerformance: Performance = createStubPerformance();
const stubPerformanceNavigation: PerformanceNavigation = createStubPerformanceNavigation();
const stubPerformanceTiming: PerformanceTiming = createStubPerformanceTiming();
