import { Provider } from "#/types/settings";
import type { BackendKind } from "#/api/backend-registry/types";
import type { WorkspaceMode } from "#/api/conversation-metadata-store";
import type { CloudConnectionSource } from "#/services/cloud-funnel-analytics";
import { type BackendConnectionMethod } from "#/services/telemetry-context";
/**
 * Stable semantic identifier for an onboarding link or CTA. Identifies the
 * destination, never the clicked element or its text.
 */
export type OnboardingLinkId = "configure_llm" | "start_conversation" | "schedule_task" | "customize_agent" | "connect_mcp" | "join_slack" | "open_docs";
/** Controlled destination category for `onboarding_link_clicked`. */
export type OnboardingLinkDestinationType = "community" | "integration" | "documentation" | "settings" | "conversation" | "automation";
/** Onboarding surface that presented the link. */
export type OnboardingLinkSurface = "landing_checklist" | "onboarding_modal";
/**
 * Hook that provides tracking functions with automatic data collection
 * from available hooks (settings, etc.)
 *
 * All events require explicit user consent. The shared PostHog client enforces
 * the canonical consent configured by telemetry.ts; this hook must not gate on
 * backend settings because they can be stale while a backend changes.
 */
export declare const useTracking: () => {
    trackLoginButtonClick: ({ provider }: {
        provider: Provider;
    }) => void;
    trackConversationCreated: ({ conversationId, taskId, hasRepository, gitProvider, hasWorkspace, workspaceMode, hasInitialQuery, agentType, hasParentConversation, entryPoint, }: {
        conversationId: string;
        taskId?: string;
        hasRepository: boolean;
        gitProvider?: Provider;
        hasWorkspace: boolean;
        workspaceMode?: WorkspaceMode;
        hasInitialQuery: boolean;
        agentType?: "default" | "plan";
        hasParentConversation: boolean;
        entryPoint?: string;
    }) => void;
    trackPushButtonClick: () => void;
    trackPullButtonClick: () => void;
    trackCreatePrButtonClick: () => void;
    trackUserSignupCompleted: () => void;
    trackPrebuiltAutomationEnabled: ({ automationId, automationName, automationCategory, }: {
        automationId?: string;
        automationName: string;
        automationCategory?: string;
    }) => void;
    trackAutomationSetupOpened: ({ automationId, }: {
        automationId: string;
    }) => void;
    trackAutomationSetupValidated: ({ automationId, }: {
        automationId: string;
    }) => void;
    trackAutomationSetupCreated: ({ automationId, setupMode, }: {
        automationId: string;
        setupMode: string;
    }) => void;
    trackAutomationSetupFailed: ({ automationId, setupMode, }: {
        automationId: string;
        setupMode: string;
    }) => void;
    trackInitialQuerySubmitted: ({ entryPoint, queryCharacterLength, replayJsonSize, }: {
        entryPoint: string;
        queryCharacterLength: number;
        replayJsonSize?: number;
    }) => void;
    trackUserMessageSent: ({ sessionMessageCount, currentMessageLength, }: {
        sessionMessageCount: number;
        currentMessageLength: number;
    }) => void;
    trackDownloadVsCodeButtonClicked: () => void;
    trackSettingsSaved: ({ llmModel, llmApiKeySet, searchApiKeySet, remoteRuntimeResourceFactor, }: {
        llmModel: unknown;
        llmApiKeySet: "SET" | "UNSET";
        searchApiKeySet: "SET" | "UNSET";
        remoteRuntimeResourceFactor?: unknown;
    }) => void;
    trackMcpConfigUpdated: ({ sseServersCount, stdioServersCount, }: {
        sseServersCount: number;
        stdioServersCount: number;
    }) => void;
    trackDownloadTrajectoryButtonClicked: () => void;
    trackConversationExported: (format: "markdown" | "html") => void;
    trackAutomationCreatedButton: ({ backendKind, }: {
        backendKind: BackendKind;
    }) => void;
    trackAutomationExecuted: ({ backendKind, }: {
        backendKind: BackendKind;
    }) => void;
    trackAutomationDeleted: ({ backendKind, }: {
        backendKind: BackendKind;
    }) => void;
    trackAutomationDisableButton: ({ backendKind, }: {
        backendKind: BackendKind;
    }) => void;
    trackAutomationEdited: ({ backendKind, }: {
        backendKind: BackendKind;
    }) => void;
    trackAutomationExported: ({ backendKind, }: {
        backendKind: BackendKind;
    }) => void;
    trackAutomationActivityLogExported: ({ backendKind, format, }: {
        backendKind: BackendKind;
        format: "json" | "csv";
    }) => void;
    trackAutomationImported: ({ backendKind, }: {
        backendKind: BackendKind;
    }) => void;
    trackGitSyncConfigUpdated: ({ backendKind, }: {
        backendKind: BackendKind;
    }) => void;
    trackGitSyncTriggered: ({ backendKind, }: {
        backendKind: BackendKind;
    }) => void;
    trackBackendAdded: ({ backendKind, connectionMethod, hasApiKey, source, agentServerVersion, backendVersion, }: {
        backendKind: BackendKind;
        connectionMethod: BackendConnectionMethod;
        hasApiKey: boolean;
        source?: CloudConnectionSource;
        agentServerVersion?: string | null;
        backendVersion?: string | null;
    }) => void;
    trackOnboardingStarted: () => void;
    trackOnboardingStepViewed: ({ step, stepIndex, totalSteps, agent, }: {
        step: string;
        stepIndex: number;
        totalSteps: number;
        agent: string;
    }) => void;
    trackOnboardingCompleted: ({ agent }: {
        agent: string;
    }) => void;
    trackOnboardingSkipped: ({ step, stepIndex, totalSteps, agent, }: {
        step: string;
        stepIndex: number;
        totalSteps: number;
        agent: string;
    }) => void;
    trackOnboardingLinkClicked: ({ linkId, destinationType, surface, checklistItem, stepId, isExternal, }: {
        linkId: OnboardingLinkId;
        destinationType: OnboardingLinkDestinationType;
        surface: OnboardingLinkSurface;
        checklistItem?: Exclude<OnboardingLinkId, "open_docs">;
        stepId?: string;
        isExternal: boolean;
    }) => void;
};
