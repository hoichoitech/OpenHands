import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Folder as n } from "../../../../node_modules/lucide-react/dist/esm/icons/folder.js";
import { resolveAcpProviderIcon as r } from "../../../../constants/acp-providers.js";
import { getDisplayConversationTags as i } from "../../../../api/agent-server-adapter.js";
import { FaCodeBranch as a } from "../../../../node_modules/react-icons/fa/index.js";
import { FaBitbucket as o, FaGithub as s, FaGitlab as c } from "../../../../node_modules/react-icons/fa6/index.js";
import l from "../../../../assets/branding/azure-devops-logo.js";
import { ConversationStatusDot as u } from "../conversation-status-dot.js";
import { AgentBrandIcon as d } from "../../../shared/agent-brand-icon.js";
import { getConversationTagLabel as f } from "./conversation-tag-display.js";
import { getConversationTagIcon as p } from "./conversation-tag-icons.js";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-card/conversation-card-preview.tsx
var _ = {
	bitbucket: o,
	bitbucket_data_center: o,
	github: s,
	gitlab: c
};
function v({ label: e, children: t }) {
	return /* @__PURE__ */ g("div", {
		className: "flex items-start gap-2 text-xs leading-4",
		children: [/* @__PURE__ */ h("span", {
			className: "w-20 shrink-0 whitespace-normal break-words text-[var(--oh-muted)]",
			children: e
		}), /* @__PURE__ */ h("span", {
			className: "min-w-0 flex-1 overflow-visible whitespace-normal break-words text-[var(--oh-foreground)]",
			children: t
		})]
	});
}
function y({ icon: e, children: t, testId: n, tagKey: r }) {
	return /* @__PURE__ */ g("span", {
		"data-testid": n,
		"data-tag-key": r,
		className: "inline-flex min-w-0 max-w-full items-start gap-1.5",
		children: [e ? /* @__PURE__ */ h("span", {
			className: "inline-flex h-4 min-w-3 shrink-0 items-center justify-center [&_svg]:block",
			children: e
		}) : null, /* @__PURE__ */ h("span", {
			className: "min-w-0 flex-1 whitespace-normal break-all",
			children: t
		})]
	});
}
function b({ title: o, executionStatus: s, sandboxStatus: c, selectedRepository: b, workspaceWorkingDir: x, llmModel: S, agentKind: C = null, acpServer: w = null, createdAt: T, tags: E = null }) {
	let { t: D } = e("openhands"), O = b?.selected_repository ?? null, k = b?.selected_branch ?? null, A = b?.git_provider ?? null, j = A ? _[A] : null, M = T ? new Date(T).toLocaleString(void 0, {
		dateStyle: "medium",
		timeStyle: "short"
	}) : null, N = i(E);
	return /* @__PURE__ */ g("div", {
		"data-testid": "conversation-card-preview",
		className: "flex w-[280px] max-w-[min(280px,90vw)] flex-col gap-3 overflow-visible p-3",
		children: [/* @__PURE__ */ g("div", {
			className: "flex items-start gap-2",
			children: [s === void 0 ? null : /* @__PURE__ */ h("span", {
				className: "inline-flex h-5 w-2.5 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ h(u, {
					executionStatus: s,
					sandboxStatus: c,
					showTooltip: !1
				})
			}), /* @__PURE__ */ h("span", {
				className: "break-words text-sm font-medium leading-5 text-white",
				children: o
			})]
		}), /* @__PURE__ */ g("dl", {
			className: "flex flex-col gap-1.5",
			children: [
				O ? /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h(v, {
					label: D(t.CONVERSATION_PANEL$PREVIEW_REPO),
					children: /* @__PURE__ */ h(y, {
						icon: j ? /* @__PURE__ */ h(j, { size: 12 }) : A === "azure_devops" ? /* @__PURE__ */ h(l, { className: "h-3 w-3" }) : void 0,
						children: O
					})
				}), k ? /* @__PURE__ */ h(v, {
					label: D(t.CONVERSATION_PANEL$PREVIEW_BRANCH),
					children: /* @__PURE__ */ h(y, {
						icon: /* @__PURE__ */ h(a, { size: 11 }),
						children: k
					})
				}) : null] }) : x ? /* @__PURE__ */ h(v, {
					label: D(t.CONVERSATION_PANEL$PREVIEW_DIRECTORY),
					children: /* @__PURE__ */ h(y, {
						icon: /* @__PURE__ */ h(n, { size: 12 }),
						children: x
					})
				}) : null,
				S ? /* @__PURE__ */ h(v, {
					label: D(t.CONVERSATION_PANEL$PREVIEW_MODEL),
					children: /* @__PURE__ */ h(y, {
						testId: "conversation-card-preview-model",
						icon: /* @__PURE__ */ h(d, {
							kind: C === "acp" ? r(w) : "openhands",
							size: 12
						}),
						children: S
					})
				}) : null,
				N.map(([e, t]) => {
					let n = p(e, t);
					return /* @__PURE__ */ h(v, {
						label: f(e, D),
						children: /* @__PURE__ */ h(y, {
							testId: "conversation-card-preview-tag-row",
							tagKey: e,
							icon: /* @__PURE__ */ h(n, {
								"aria-hidden": !0,
								className: "h-3 w-3"
							}),
							children: t || "—"
						})
					}, e);
				}),
				M ? /* @__PURE__ */ h(v, {
					label: D(t.CONVERSATION$CREATED),
					children: M
				}) : null
			]
		})]
	});
}
//#endregion
export { b as ConversationCardPreview };

//# sourceMappingURL=conversation-card-preview.js.map