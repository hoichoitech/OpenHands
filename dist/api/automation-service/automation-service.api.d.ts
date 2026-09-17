import { type TelemetryConsent } from "#/services/telemetry";
import type { Automation, AutomationRun, AutomationSpec, AutomationsResponse, AutomationRunsResponse } from "#/types/automation";
import type { GitSyncCheckResponse, GitSyncConfigUpdateRequest, GitSyncStatus, GitSyncTriggerResponse } from "#/types/git-sync";
import type { DeploymentCapabilities, SetupEntry, SetupRequestBody, ValidateDraftResponse } from "#/manifests/types";
export interface AutomationHealthResponse {
    status: "ok" | "error";
    message?: string;
}
declare class AutomationService {
    static syncTelemetryConsent(consent?: TelemetryConsent): Promise<void>;
    static getSdkVersion(): Promise<string | null>;
    static listAutomations(params?: {
        limit?: number;
        offset?: number;
    }): Promise<AutomationsResponse>;
    static getAutomations(limit?: number, offset?: number): Promise<AutomationsResponse>;
    static getAutomation(id: string): Promise<Automation>;
    static createAutomation(spec: AutomationSpec): Promise<Automation>;
    static updateAutomation(id: string, body: Partial<Automation>): Promise<Automation>;
    static deleteAutomation(id: string): Promise<void>;
    static dispatchAutomation(id: string): Promise<AutomationRun>;
    /**
     * Cancel a pending or running automation run.
     * Backend: POST /api/automation/v1/runs/{run_id}/cancel
     */
    static cancelAutomationRun(runId: string): Promise<AutomationRun>;
    static listAutomationRuns(id: string, params?: {
        limit?: number;
        offset?: number;
    }): Promise<AutomationRunsResponse>;
    static getAutomationRuns(id: string, limit?: number, offset?: number): Promise<AutomationRunsResponse>;
    static toggleAutomation(id: string, enabled: boolean): Promise<Automation>;
    static downloadTarball(id: string, name: string): Promise<void>;
    /**
     * Ask what this deployment supports, before a setup form renders.
     *
     * The setup endpoints answer a contract authored in `OpenHands/extensions`,
     * so their bodies are camelCase where the rest of this service is snake_case.
     */
    static getCapabilities(): Promise<DeploymentCapabilities>;
    /**
     * Validate a draft without creating it. An invalid draft is a 200 carrying
     * field-addressed errors; only a malformed envelope is a 4xx.
     */
    static validateDraft(body: SetupRequestBody): Promise<ValidateDraftResponse>;
    /**
     * Create from a draft a setup form derived. Unlike {@link
     * AutomationService.createAutomation}, which exists for import and has to
     * park the record on a placeholder trigger, this sends the finished record in
     * one request.
     */
    static createAutomationDraft(body: SetupRequestBody, 
    /** The entry and selected action decide the create endpoint. */
    entry?: SetupEntry, selectedAction?: string | null): Promise<Record<string, unknown>>;
    /**
     * Upload a packed bundle, and return the `oh-internal://` path the create
     * call references.
     *
     * The body is the archive itself rather than a multipart form - the service
     * streams it and takes its metadata from the query string, so it never has
     * to buffer the whole file to start writing.
     */
    static uploadAutomationTarball(name: string, archive: Uint8Array): Promise<string>;
    static getGitSyncStatus(): Promise<GitSyncStatus>;
    static updateGitSyncConfig(body: GitSyncConfigUpdateRequest): Promise<GitSyncStatus>;
    /**
     * Ask whether a configuration can reach its repo, without saving it. Takes
     * the same body as `updateGitSyncConfig` and answers for the settings that
     * body would leave in place.
     */
    static checkGitSyncConfig(body: GitSyncConfigUpdateRequest): Promise<GitSyncCheckResponse>;
    static triggerGitSync(): Promise<GitSyncTriggerResponse>;
    static checkHealth(): Promise<AutomationHealthResponse>;
}
export default AutomationService;
