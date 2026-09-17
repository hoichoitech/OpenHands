import { getCachedAgentServerVersion as e } from "../api/agent-server-compatibility.js";
import { getBackendTelemetryProperties as t } from "../services/telemetry-context.js";
import { setTelemetryBackendContext as n, trackEvent as r } from "../services/telemetry.js";
import { useActiveBackend as i } from "../contexts/active-backend-context.js";
import { useAutomationSdkVersion as a } from "./query/use-automation-sdk-version.js";
import o from "react";
//#region src/hooks/use-tracking.ts
var s = () => {
	let { backend: s } = i(), c = a(), l = o.useCallback(() => ({
		backendKind: s.kind,
		agentServerVersion: s.kind === "local" ? e(s.host) : null,
		automationSdkVersion: c ?? null
	}), [
		c,
		s.host,
		s.kind
	]);
	o.useEffect(() => {
		n(l());
	}, [l]);
	let u = { current_url: window.location.href }, d = (e, t = {}) => {
		n(l()), r(e, {
			...u,
			...t
		});
	};
	return {
		trackLoginButtonClick: ({ provider: e }) => {
			d("login_button_clicked", { provider: e });
		},
		trackConversationCreated: ({ conversationId: e, taskId: t, hasRepository: n, gitProvider: r, hasWorkspace: i, workspaceMode: a, hasInitialQuery: o, agentType: s, hasParentConversation: c, entryPoint: l }) => {
			d("conversation_start_requested", {
				conversation_id: e,
				task_id: t,
				is_start_task: e.startsWith("task-"),
				has_repository: n,
				git_provider: r,
				has_workspace: i,
				workspace_mode: a,
				has_initial_query: o,
				agent_type: s,
				has_parent_conversation: c,
				entry_point: l
			});
		},
		trackPushButtonClick: () => {
			d("push_button_clicked");
		},
		trackPullButtonClick: () => {
			d("pull_button_clicked");
		},
		trackCreatePrButtonClick: () => {
			d("create_pr_button_clicked");
		},
		trackUserSignupCompleted: () => {
			d("user_signup_completed", { signup_timestamp: (/* @__PURE__ */ new Date()).toISOString() });
		},
		trackPrebuiltAutomationEnabled: ({ automationId: e, automationName: t, automationCategory: n }) => {
			d("prebuilt_automation_enabled", {
				automation_id: e,
				automation_name: t,
				automation_category: n
			});
		},
		trackAutomationSetupOpened: ({ automationId: e }) => {
			d("automation_setup_opened", { automation_id: e });
		},
		trackAutomationSetupValidated: ({ automationId: e }) => {
			d("automation_setup_validated", { automation_id: e });
		},
		trackAutomationSetupCreated: ({ automationId: e, setupMode: t }) => {
			d("automation_setup_created", {
				automation_id: e,
				setup_mode: t
			});
		},
		trackAutomationSetupFailed: ({ automationId: e, setupMode: t }) => {
			d("automation_setup_failed", {
				automation_id: e,
				setup_mode: t
			});
		},
		trackInitialQuerySubmitted: ({ entryPoint: e, queryCharacterLength: t, replayJsonSize: n }) => {
			d("initial_query_submitted", {
				entry_point: e,
				query_character_length: t,
				replay_json_size: n
			});
		},
		trackUserMessageSent: ({ sessionMessageCount: e, currentMessageLength: t }) => {
			d("user_message_sent", {
				session_message_count: e,
				current_message_length: t
			});
		},
		trackDownloadVsCodeButtonClicked: () => {
			d("download_via_vscode_button_clicked");
		},
		trackSettingsSaved: ({ llmModel: e, llmApiKeySet: t, searchApiKeySet: n, remoteRuntimeResourceFactor: r }) => {
			d("settings_saved", {
				LLM_MODEL: e,
				LLM_API_KEY_SET: t,
				SEARCH_API_KEY_SET: n,
				REMOTE_RUNTIME_RESOURCE_FACTOR: r
			});
		},
		trackMcpConfigUpdated: ({ sseServersCount: e, stdioServersCount: t }) => {
			d("mcp_config_updated", {
				has_mcp_config: !0,
				sse_servers_count: e,
				stdio_servers_count: t
			});
		},
		trackDownloadTrajectoryButtonClicked: () => {
			d("download_trajectory_button_clicked");
		},
		trackConversationExported: (e) => {
			d("conversation_exported", { format: e });
		},
		trackAutomationCreatedButton: ({ backendKind: e }) => {
			d("automation_created_button", { backend_kind: e });
		},
		trackAutomationExecuted: ({ backendKind: e }) => {
			d("automation_executed", { backend_kind: e });
		},
		trackAutomationDeleted: ({ backendKind: e }) => {
			d("automation_deleted", { backend_kind: e });
		},
		trackAutomationDisableButton: ({ backendKind: e }) => {
			d("automation_disable_button", { backend_kind: e });
		},
		trackAutomationEdited: ({ backendKind: e }) => {
			d("automation_edited", { backend_kind: e });
		},
		trackAutomationExported: ({ backendKind: e }) => {
			d("automation_exported", { backend_kind: e });
		},
		trackAutomationActivityLogExported: ({ backendKind: e, format: t }) => {
			d("automation_activity_log_exported", {
				backend_kind: e,
				format: t
			});
		},
		trackAutomationImported: ({ backendKind: e }) => {
			d("automation_imported", { backend_kind: e });
		},
		trackGitSyncConfigUpdated: ({ backendKind: e }) => {
			d("git_sync_config_updated", { backend_kind: e });
		},
		trackGitSyncTriggered: ({ backendKind: e }) => {
			d("git_sync_triggered", { backend_kind: e });
		},
		trackBackendAdded: ({ backendKind: e, connectionMethod: n, hasApiKey: r, source: i, agentServerVersion: a, backendVersion: o }) => {
			d("backend_added", {
				...t({
					backendKind: e,
					agentServerVersion: a,
					backendVersion: o,
					connectionMethod: n
				}),
				has_api_key: r,
				source: i
			});
		},
		trackOnboardingStarted: () => {
			d("onboarding_started");
		},
		trackOnboardingStepViewed: ({ step: e, stepIndex: t, totalSteps: n, agent: r }) => {
			d("onboarding_step_viewed", {
				step: e,
				step_index: t,
				total_steps: n,
				agent: r
			});
		},
		trackOnboardingCompleted: ({ agent: e }) => {
			d("onboarding_completed", { agent: e });
		},
		trackOnboardingSkipped: ({ step: e, stepIndex: t, totalSteps: n, agent: r }) => {
			d("onboarding_skipped", {
				step: e,
				step_index: t,
				total_steps: n,
				agent: r
			});
		},
		trackOnboardingLinkClicked: ({ linkId: e, destinationType: t, surface: n, checklistItem: r, stepId: i, isExternal: a }) => {
			d("onboarding_link_clicked", {
				link_id: e,
				destination_type: t,
				surface: n,
				checklist_item: r,
				step_id: i,
				is_external: a
			});
		}
	};
};
//#endregion
export { s as useTracking };

//# sourceMappingURL=use-tracking.js.map