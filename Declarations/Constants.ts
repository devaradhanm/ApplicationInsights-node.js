import Contracts = require("./Contracts")

export const DEFAULT_BREEZE_ENDPOINT = "https://dc.services.visualstudio.com";
export const DEFAULT_LIVEMETRICS_ENDPOINT = "https://rt.services.visualstudio.com";
export const DEFAULT_LIVEMETRICS_HOST = "rt.services.visualstudio.com";

export enum QuickPulseCounter {
    // Memory
    COMMITTED_BYTES= "\\Memory\\Committed Bytes",

    // CPU
    PROCESSOR_TIME= "\\Processor(_Total)\\% Processor Time",

    // Request
    REQUEST_RATE= "\\ApplicationInsights\\Requests\/Sec",
    REQUEST_FAILURE_RATE= "\\ApplicationInsights\\Requests Failed\/Sec",
    REQUEST_DURATION= "\\ApplicationInsights\\Request Duration",

    // Dependency
    DEPENDENCY_RATE= "\\ApplicationInsights\\Dependency Calls\/Sec",
    DEPENDENCY_FAILURE_RATE= "\\ApplicationInsights\\Dependency Calls Failed\/Sec",
    DEPENDENCY_DURATION= "\\ApplicationInsights\\Dependency Call Duration",

    // Exception
    EXCEPTION_RATE= "\\ApplicationInsights\\Exceptions\/Sec"
}

export enum PerformanceCounter {
    // Memory
    PRIVATE_BYTES= "\\Process(??APP_WIN32_PROC??)\\Private Bytes",
    AVAILABLE_BYTES= "\\Memory\\Available Bytes",

    // CPU
    PROCESSOR_TIME= "\\Processor(_Total)\\% Processor Time",
    PROCESS_TIME= "\\Process(??APP_WIN32_PROC??)\\% Processor Time",

    // Requests
    REQUEST_RATE= "\\ASP.NET Applications(??APP_W3SVC_PROC??)\\Requests/Sec",
    REQUEST_DURATION= "\\ASP.NET Applications(??APP_W3SVC_PROC??)\\Request Execution Time"
};

/**
 * Map a PerformanceCounter/QuickPulseCounter to a QuickPulseCounter. If no mapping exists, mapping is *undefined*
 */
export const PerformanceToQuickPulseCounter: {[key: string]: QuickPulseCounter} = {
    [PerformanceCounter.PROCESSOR_TIME]: QuickPulseCounter.PROCESSOR_TIME,
    [PerformanceCounter.REQUEST_RATE]: QuickPulseCounter.REQUEST_RATE,
    [PerformanceCounter.REQUEST_DURATION]: QuickPulseCounter.REQUEST_DURATION,

    // Remap quick pulse only counters
    [QuickPulseCounter.COMMITTED_BYTES]: QuickPulseCounter.COMMITTED_BYTES,
    [QuickPulseCounter.REQUEST_FAILURE_RATE]: QuickPulseCounter.REQUEST_FAILURE_RATE,
    [QuickPulseCounter.DEPENDENCY_RATE]: QuickPulseCounter.DEPENDENCY_RATE,
    [QuickPulseCounter.DEPENDENCY_FAILURE_RATE]: QuickPulseCounter.DEPENDENCY_FAILURE_RATE,
    [QuickPulseCounter.DEPENDENCY_DURATION]: QuickPulseCounter.DEPENDENCY_DURATION,
    [QuickPulseCounter.EXCEPTION_RATE]: QuickPulseCounter.EXCEPTION_RATE
};

// Note: Explicitly define these types instead of using enum due to
// potential 'export enum' issues with typescript < 2.0.
export type QuickPulseDocumentType = "Event" | "Exception" | "Trace" | "Metric" | "Request" | "RemoteDependency";
export type QuickPulseType = "EventTelemetryDocument" | "ExceptionTelemetryDocument" | "TraceTelemetryDocument" | "MetricTelemetryDocument" | "RequestTelemetryDocument" | "DependencyTelemetryDocument";

export const QuickPulseDocumentType: {[key in Contracts.TelemetryTypeKeys]: QuickPulseDocumentType} = {
    Event: "Event",
    Exception: "Exception",
    Trace: "Trace",
    Metric: "Metric",
    Request: "Request",
    Dependency: "RemoteDependency"
};

export const QuickPulseType: {[key in Contracts.TelemetryTypeKeys]: QuickPulseType} = {
    Event: "EventTelemetryDocument",
    Exception: "ExceptionTelemetryDocument",
    Trace: "TraceTelemetryDocument",
    Metric: "MetricTelemetryDocument",
    Request: "RequestTelemetryDocument",
    Dependency: "DependencyTelemetryDocument"
};

export const TelemetryTypeStringToQuickPulseType: {[key in Contracts.TelemetryTypeValues]: QuickPulseType} = {
    EventData: QuickPulseType.Event,
    ExceptionData: QuickPulseType.Exception,
    MessageData: QuickPulseType.Trace,
    MetricData: QuickPulseType.Metric,
    RequestData: QuickPulseType.Request,
    RemoteDependencyData: QuickPulseType.Dependency
};

export const TelemetryTypeStringToQuickPulseDocumentType: {[key in Contracts.TelemetryTypeValues]: QuickPulseDocumentType} = {
    EventData: QuickPulseDocumentType.Event,
    ExceptionData: QuickPulseDocumentType.Exception,
    MessageData: QuickPulseDocumentType.Trace,
    MetricData: QuickPulseDocumentType.Metric,
    RequestData: QuickPulseDocumentType.Request,
    RemoteDependencyData: QuickPulseDocumentType.Dependency
};
