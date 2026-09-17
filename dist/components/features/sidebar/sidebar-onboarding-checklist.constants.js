import { I18nKey as e } from "../../../i18n/declaration.js";
//#region src/components/features/sidebar/sidebar-onboarding-checklist.constants.ts
var t = "https://docs.openhands.dev/openhands/usage/agent-canvas/prebuilt-automations", n = "https://openhands.dev/joinslack", r = "openhands-sidebar-onboarding-checklist-dismissed", i = "openhands-sidebar-onboarding-checklist-dismissed-change", a = "openhands-sidebar-onboarding-checklist-minimized", o = "openhands-sidebar-onboarding-checklist-customize-explored", s = "openhands-sidebar-onboarding-checklist-slack-joined", c = [
	"configure-llm",
	"start-conversation",
	"schedule-task",
	"customize-agent",
	"connect-mcp",
	"join-slack"
], l = {
	"configure-llm": "/settings/llm",
	"connect-mcp": "/mcp",
	"start-conversation": "/conversations",
	"schedule-task": "/automations",
	"customize-agent": "/settings/agents"
}, u = {
	"configure-llm": "configure_llm",
	"start-conversation": "start_conversation",
	"schedule-task": "schedule_task",
	"customize-agent": "customize_agent",
	"connect-mcp": "connect_mcp",
	"join-slack": "join_slack"
}, d = {
	"configure-llm": "settings",
	"start-conversation": "conversation",
	"schedule-task": "automation",
	"customize-agent": "settings",
	"connect-mcp": "integration",
	"join-slack": "community"
};
function f(e) {
	return e === "join-slack";
}
function p(e) {
	return f(e) ? {
		kind: "external",
		href: n
	} : {
		kind: "internal",
		href: l[e]
	};
}
var m = {
	"configure-llm": e.SIDEBAR$ONBOARDING_CHECKLIST_CONFIGURE_LLM,
	"connect-mcp": e.SIDEBAR$ONBOARDING_CHECKLIST_CONNECT_MCP,
	"start-conversation": e.SIDEBAR$ONBOARDING_CHECKLIST_START_CHAT,
	"schedule-task": e.SIDEBAR$ONBOARDING_CHECKLIST_SCHEDULE_TASK,
	"customize-agent": e.SIDEBAR$ONBOARDING_CHECKLIST_CUSTOMIZE,
	"join-slack": e.SIDEBAR$ONBOARDING_CHECKLIST_JOIN_SLACK
}, h = {
	"configure-llm": e.SIDEBAR$ONBOARDING_CHECKLIST_CONFIGURE_LLM_DESC,
	"connect-mcp": e.SIDEBAR$ONBOARDING_CHECKLIST_CONNECT_MCP_DESC,
	"start-conversation": e.SIDEBAR$ONBOARDING_CHECKLIST_START_CHAT_DESC,
	"schedule-task": e.SIDEBAR$ONBOARDING_CHECKLIST_SCHEDULE_TASK_DESC,
	"customize-agent": e.SIDEBAR$ONBOARDING_CHECKLIST_CUSTOMIZE_DESC,
	"join-slack": e.SIDEBAR$ONBOARDING_CHECKLIST_JOIN_SLACK_DESC
}, g = {
	"configure-llm": e.SIDEBAR$ONBOARDING_CHECKLIST_ACTION_CONFIGURE_LLM,
	"connect-mcp": e.SIDEBAR$ONBOARDING_CHECKLIST_ACTION_CONNECT_MCP,
	"start-conversation": e.SIDEBAR$ONBOARDING_CHECKLIST_ACTION_START_CHAT,
	"schedule-task": e.SIDEBAR$ONBOARDING_CHECKLIST_ACTION_SCHEDULE_TASK,
	"customize-agent": e.SIDEBAR$ONBOARDING_CHECKLIST_ACTION_CUSTOMIZE,
	"join-slack": e.SIDEBAR$ONBOARDING_CHECKLIST_ACTION_JOIN_SLACK
}, _ = {
	"configure-llm": "https://docs.openhands.dev/openhands/usage/settings/llm-settings#llm-profiles",
	"start-conversation": "https://docs.openhands.dev/openhands/usage/agent-canvas/backends",
	"schedule-task": t,
	"customize-agent": "https://docs.openhands.dev/openhands/usage/agent-canvas/customize-and-settings",
	"connect-mcp": "https://docs.openhands.dev/overview/model-context-protocol",
	"join-slack": "https://docs.openhands.dev/overview/community"
};
function v(e) {
	return e === "/settings/agents" || e.startsWith("/settings/agents/");
}
//#endregion
export { g as SIDEBAR_ONBOARDING_CHECKLIST_ACTION_I18N_KEYS, o as SIDEBAR_ONBOARDING_CHECKLIST_CUSTOMIZE_EXPLORED_STORAGE_KEY, h as SIDEBAR_ONBOARDING_CHECKLIST_DESCRIPTION_I18N_KEYS, d as SIDEBAR_ONBOARDING_CHECKLIST_DESTINATION_TYPES, i as SIDEBAR_ONBOARDING_CHECKLIST_DISMISSED_CHANGE_EVENT, r as SIDEBAR_ONBOARDING_CHECKLIST_DISMISSED_STORAGE_KEY, _ as SIDEBAR_ONBOARDING_CHECKLIST_DOCS_URLS, m as SIDEBAR_ONBOARDING_CHECKLIST_I18N_KEYS, c as SIDEBAR_ONBOARDING_CHECKLIST_ITEM_IDS, u as SIDEBAR_ONBOARDING_CHECKLIST_LINK_IDS, a as SIDEBAR_ONBOARDING_CHECKLIST_MINIMIZED_STORAGE_KEY, s as SIDEBAR_ONBOARDING_CHECKLIST_SLACK_JOINED_STORAGE_KEY, p as getSidebarOnboardingChecklistHref, v as isCustomizeChecklistPath, f as isExternalSidebarOnboardingChecklistItem };

//# sourceMappingURL=sidebar-onboarding-checklist.constants.js.map