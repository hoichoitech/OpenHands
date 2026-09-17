import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { cn as n } from "../../utils/utils.js";
import { isHookExecutionEvent as r } from "../../types/agent-server/type-guards.js";
import { GenericEventMessage as i } from "../features/chat/generic-event-message.js";
import "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/shared/hook-execution-event-message.tsx
function s(e, t) {
	if (t) return "🚫";
	switch (e) {
		case "PreToolUse": return "⏳";
		case "PostToolUse": return "✅";
		case "UserPromptSubmit": return "📝";
		case "SessionStart": return "🚀";
		case "SessionEnd": return "🏁";
		case "Stop": return "⏹️";
		default: return "🔗";
	}
}
function c(e) {
	return e.length > 80 ? `${e.slice(0, 77)}...` : e;
}
function l(e, t) {
	return e ? "blocked" : t ? "ok" : "failed";
}
function u(e, t) {
	return e ? "bg-amber-900/50 text-amber-300" : t ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300";
}
function d({ event: d }) {
	let { t: f } = e("openhands");
	if (!r(d)) return null;
	let p = s(d.hook_event_type, d.blocked), m = l(d.blocked, d.success), h = u(d.blocked, d.success), g = (() => {
		if (!d.blocked) return d.success ? "success" : "error";
	})();
	return /* @__PURE__ */ a(i, {
		title: /* @__PURE__ */ o("span", { children: [
			p,
			" ",
			f(t.HOOK$HOOK_LABEL),
			": ",
			d.hook_event_type,
			d.tool_name && /* @__PURE__ */ o("span", {
				className: "text-[var(--oh-muted)] ml-2",
				children: [
					"(",
					d.tool_name,
					")"
				]
			}),
			/* @__PURE__ */ a("span", {
				className: n("ml-2 px-1 py-0.5 rounded text-xs", h),
				children: m
			})
		] }),
		details: /* @__PURE__ */ o("div", {
			className: "flex flex-col gap-2 text-[var(--oh-muted)]",
			children: [
				/* @__PURE__ */ o("div", { children: [
					/* @__PURE__ */ o("span", {
						className: "text-[var(--oh-text-subtle)]",
						children: [f(t.HOOK$COMMAND), ":"]
					}),
					" ",
					/* @__PURE__ */ a("code", {
						className: "text-xs bg-[var(--oh-surface)] px-1 py-0.5 rounded",
						children: c(d.hook_command)
					})
				] }),
				d.exit_code !== null && /* @__PURE__ */ o("div", { children: [
					/* @__PURE__ */ o("span", {
						className: "text-[var(--oh-text-subtle)]",
						children: [f(t.HOOK$EXIT_CODE), ":"]
					}),
					" ",
					d.exit_code
				] }),
				d.blocked && d.reason && /* @__PURE__ */ o("div", {
					className: "text-amber-400",
					children: [
						/* @__PURE__ */ o("span", {
							className: "text-[var(--oh-text-subtle)]",
							children: [f(t.HOOK$BLOCKED_REASON), ":"]
						}),
						" ",
						d.reason
					]
				}),
				d.additional_context && /* @__PURE__ */ o("div", { children: [
					/* @__PURE__ */ o("span", {
						className: "text-[var(--oh-text-subtle)]",
						children: [f(t.HOOK$CONTEXT), ":"]
					}),
					" ",
					d.additional_context
				] }),
				d.error && /* @__PURE__ */ o("div", {
					className: "text-red-400",
					children: [
						/* @__PURE__ */ o("span", {
							className: "text-[var(--oh-text-subtle)]",
							children: [f(t.HOOK$ERROR), ":"]
						}),
						" ",
						d.error
					]
				}),
				d.stdout && /* @__PURE__ */ o("div", { children: [/* @__PURE__ */ o("span", {
					className: "text-[var(--oh-text-subtle)]",
					children: [f(t.HOOK$OUTPUT), ":"]
				}), /* @__PURE__ */ a("pre", {
					className: "text-xs bg-[var(--oh-surface)] p-2 rounded mt-1 overflow-x-auto max-h-40 overflow-y-auto",
					children: d.stdout
				})] }),
				d.stderr && /* @__PURE__ */ o("div", { children: [/* @__PURE__ */ o("span", {
					className: "text-[var(--oh-text-subtle)]",
					children: [f(t.HOOK$STDERR), ":"]
				}), /* @__PURE__ */ a("pre", {
					className: "text-xs bg-[var(--oh-surface)] p-2 rounded mt-1 overflow-x-auto max-h-40 overflow-y-auto text-amber-300",
					children: d.stderr
				})] })
			]
		}),
		success: g
	});
}
//#endregion
export { d as HookExecutionEventMessage };

//# sourceMappingURL=hook-execution-event-message.js.map