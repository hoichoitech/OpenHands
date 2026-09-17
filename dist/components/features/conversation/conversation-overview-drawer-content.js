import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { BrandButton as r } from "../settings/brand-button.js";
import { useConversationOverviewStats as i } from "../../../hooks/use-conversation-overview-stats.js";
import { useConversationOverviewDrawer as a } from "./conversation-overview-drawer-context.js";
import { CONVERSATION_OVERVIEW_DRAWER_SECTION as o } from "./conversation-overview-drawer.types.js";
import s from "../../../icons/x-mark.js";
import { ConversationOverviewAutomationsPanel as c } from "./conversation-overview-automations-panel.js";
import { ConversationOverviewSkillsPanel as l } from "./conversation-overview-skills-panel.js";
import { ConversationOverviewMcpPanel as u } from "./conversation-overview-mcp-panel.js";
import { ConversationOverviewSecretsPanel as d } from "./conversation-overview-secrets-panel.js";
import { ConversationOverviewGitItemsHeaderLink as f, ConversationOverviewGitItemsPanel as p } from "./conversation-overview-git-items-panel.js";
import { CONVERSATION_SECONDARY_DRAWER_CLOSE_BUTTON_CLASSNAME as m, CONVERSATION_SECONDARY_DRAWER_HEADER_ACTION_CLASSNAME as h, CONVERSATION_SECONDARY_DRAWER_HEADER_CLASSNAME as g } from "./conversation-secondary-drawer.classes.js";
import { useEffect as _ } from "react";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-drawer-content.tsx
function b(e) {
	switch (e) {
		case o.automations: return t.CONVERSATION_PANEL$AUTOMATIONS;
		case o.skills: return t.SETTINGS$NAV_SKILLS;
		case o.mcp: return t.CONVERSATION$OVERVIEW_MCP;
		case o.secrets: return t.SETTINGS$NAV_SECRETS;
		case o.pull_requests: return t.CONVERSATION$OVERVIEW_PULL_REQUESTS;
		case o.issues: return t.CONVERSATION$OVERVIEW_ISSUES;
		default: return e;
	}
}
function x({ section: n }) {
	let { t: i } = e("openhands"), { requestAdd: s } = a();
	switch (n) {
		case o.automations: return /* @__PURE__ */ v(r, {
			type: "button",
			variant: "primary",
			testId: "conversation-overview-automations-add",
			className: h,
			onClick: s,
			children: i(t.AUTOMATIONS$ADD_AUTOMATION)
		});
		case o.skills: return /* @__PURE__ */ v(r, {
			type: "button",
			variant: "primary",
			testId: "conversation-overview-skills-add-skill-button",
			className: h,
			onClick: s,
			children: i(t.SETTINGS$SKILLS_ADD_BUTTON)
		});
		case o.mcp: return /* @__PURE__ */ v(r, {
			type: "button",
			variant: "secondary",
			testId: "conversation-overview-mcp-add-server",
			className: h,
			onClick: s,
			children: i(t.MCP$ADD_CUSTOM)
		});
		case o.secrets: return /* @__PURE__ */ v(r, {
			type: "button",
			variant: "primary",
			testId: "conversation-overview-secrets-add-button",
			className: h,
			onClick: s,
			children: i(t.SECRETS$ADD_NEW_SECRET)
		});
		case o.pull_requests: return /* @__PURE__ */ v(f, { kind: "pull_requests" });
		case o.issues: return /* @__PURE__ */ v(f, { kind: "issues" });
		default: return null;
	}
}
function S({ section: e, openAdd: t }) {
	switch (e) {
		case o.automations: return /* @__PURE__ */ v(c, { openAdd: t });
		case o.skills: return /* @__PURE__ */ v(l, { openAdd: t });
		case o.mcp: return /* @__PURE__ */ v(u, { openAdd: t });
		case o.secrets: return /* @__PURE__ */ v(d, { openAdd: t });
		case o.pull_requests: return /* @__PURE__ */ v(p, { kind: "pull_requests" });
		case o.issues: return /* @__PURE__ */ v(p, { kind: "issues" });
		default: return e;
	}
}
function C({ className: r }) {
	let { t: c } = e("openhands"), { section: l, openAdd: u, closeDrawer: d } = a(), { workspaceName: f } = i();
	if (_(() => {
		if (!l) return;
		let e = (e) => {
			e.key === "Escape" && d();
		};
		return document.addEventListener("keydown", e), () => {
			document.removeEventListener("keydown", e);
		};
	}, [d, l]), !l) return null;
	let p = l === o.pull_requests || l === o.issues || l === o.secrets;
	return /* @__PURE__ */ y("aside", {
		"data-testid": "conversation-overview-drawer-content",
		"aria-label": c(b(l)),
		className: n("flex h-full w-full min-h-0 flex-col overflow-hidden bg-base-secondary", r),
		children: [/* @__PURE__ */ y("header", {
			className: g,
			children: [
				/* @__PURE__ */ v("button", {
					type: "button",
					"data-testid": "conversation-overview-drawer-close",
					"aria-label": c(t.BUTTON$CLOSE),
					onClick: d,
					className: m,
					children: /* @__PURE__ */ v(s, {
						className: "size-4",
						"aria-hidden": !0
					})
				}),
				/* @__PURE__ */ y("div", {
					className: "flex min-w-0 flex-1 items-center gap-2",
					children: [/* @__PURE__ */ v("h2", {
						className: "truncate text-sm font-medium text-content",
						children: c(b(l))
					}), f ? /* @__PURE__ */ v("p", {
						"data-testid": "conversation-overview-drawer-workspace",
						className: "truncate text-xs text-muted",
						children: f
					}) : null]
				}),
				/* @__PURE__ */ v("div", {
					className: "shrink-0",
					children: /* @__PURE__ */ v(x, { section: l })
				})
			]
		}), /* @__PURE__ */ v("div", {
			className: n("min-h-0 flex-1 custom-scrollbar-always", p ? "flex flex-col overflow-hidden" : "overflow-y-auto px-4 py-4"),
			children: /* @__PURE__ */ v(S, {
				section: l,
				openAdd: u
			})
		})]
	});
}
//#endregion
export { C as ConversationOverviewDrawerContent };

//# sourceMappingURL=conversation-overview-drawer-content.js.map