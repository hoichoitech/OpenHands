import { I18nKey as e } from "../../i18n/declaration.js";
import t from "../../i18n/index.js";
import { isACPToolCallEvent as n, isActionEvent as r, isAgentErrorEvent as i, isConversationStateUpdateEvent as a, isGoalConversationStateUpdateEvent as o, isHookExecutionEvent as s, isMessageEvent as c, isObservationEvent as l, isStreamingDeltaEvent as u, isSwitchLLMObservationEvent as d } from "../../types/agent-server/type-guards.js";
import { getActionThoughtText as f, getReasoningContent as p, splitInlineThink as m } from "../../components/conversation-events/chat/event-thought-helpers.js";
import { handleEventForUI as h } from "../handle-event-for-ui.js";
import { shouldRenderEvent as g } from "../../components/conversation-events/chat/event-content-helpers/should-render-event.js";
import { getACPToolCallContent as _, stripRedundantTitlePrefix as v } from "../../components/conversation-events/chat/event-content-helpers/get-acp-tool-call-content.js";
import { parseMessageFromEvent as y } from "../../components/conversation-events/chat/event-content-helpers/parse-message-from-event.js";
import { getActionContent as b } from "../../components/conversation-events/chat/event-content-helpers/get-action-content.js";
import { getObservationContent as x } from "../../components/conversation-events/chat/event-content-helpers/get-observation-content.js";
import { groupEvents as S } from "../../components/conversation-events/chat/group-events.js";
//#region src/utils/transcript-export/index.ts
var C = new Set([
	"BrowserClickAction",
	"BrowserCloseTabAction",
	"BrowserGetContentAction",
	"BrowserGetStateAction",
	"BrowserGoBackAction",
	"BrowserListTabsAction",
	"BrowserNavigateAction",
	"BrowserScrollAction",
	"BrowserSwitchTabAction",
	"BrowserTypeAction",
	"ExecuteBashAction",
	"FileEditorAction",
	"GlobAction",
	"GrepAction",
	"InvokeSkillAction",
	"MCPToolAction",
	"StrReplaceEditorAction",
	"TaskAction",
	"TaskTrackerAction",
	"TerminalAction",
	"ThinkAction"
]), w = new Set([
	"BrowserObservation",
	"CanvasUIObservation",
	"ExecuteBashObservation",
	"FileEditorObservation",
	"GlobObservation",
	"GrepObservation",
	"InvokeSkillObservation",
	"MCPToolObservation",
	"StrReplaceEditorObservation",
	"SwitchLLMObservation",
	"TaskTrackerObservation",
	"TaskObservation",
	"TerminalObservation"
]), T = (e) => e.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim(), E = (e, t = 100) => e.length > t ? `${e.slice(0, t)}…` : e, D = (e) => {
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? e : t.toISOString();
}, O = (e) => e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;"), k = (e) => e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replace(/(!?)\[([^\]]*)\]\(\s*((?:javascript|data|vbscript):[^)]*)\)/gi, "$1\\[$2\\]($3)").replace(/^(\s{0,3})\[([^\]]+)\]:(\s*<?(?:javascript|data|vbscript):)/gim, "$1\\[$2\\]:$3"), A = (n) => T(n || t.t(e.TRANSCRIPT_EXPORT$DEFAULT_TITLE)) || t.t(e.TRANSCRIPT_EXPORT$DEFAULT_TITLE), j = (e, n) => T(t.t(e, n).replace(/<\/?(?:cmd|path)>/g, "")), M = (e) => /^[a-z][a-z0-9_]*\s*:\s*[[{]/i.test(e), N = (e) => e.replace(/(?:Action|Observation)$/, "").replace(/([a-z])([A-Z])/g, "$1 $2").trim(), P = (e) => {
	let t = T(e.summary || "");
	return t && !M(t) ? t : T(e.tool_name) || N(e.action.kind);
}, F = (e, t) => t ? P(t) : T(e.tool_name) || N(e.observation.kind), I = (e) => e.filter((e) => e.type === "text" && typeof e.text == "string").map((e) => e.text).join("\n"), L = (n) => [`${t.t(e.TASK$SUBAGENT)}: ${n.subagent_type}`, `${t.t(e.TASK$QUERY)}:\n${n.prompt}`].join("\n\n"), R = (n, r) => {
	let i = r?.action.kind === "TaskAction" ? r.action : void 0;
	return [
		`${t.t(e.TASK$SUBAGENT)}: ${n.subagent}`,
		`${t.t(e.TASK$TASK_ID)}: ${n.task_id}`,
		i ? `${t.t(e.TASK$QUERY)}:\n${i.prompt}` : "",
		`${t.t(e.TASK$RESULT)}:\n${I(n.content)}`
	].filter(Boolean).join("\n\n");
}, z = (e) => e.action.kind === "TaskAction" ? L(e.action) : C.has(e.action.kind) ? b(e) : "", B = (e, t) => e.observation.kind === "TaskObservation" ? R(e.observation, t) : w.has(e.observation.kind) ? x(e) : "", V = (e) => s(e) ? [
	e.reason,
	e.error,
	e.stdout,
	e.stderr
].filter((e) => !!e?.trim()).join("\n\n") : "", H = (e) => [p(e), f(e)].map((e) => e.trim()).filter(Boolean).join("\n\n"), U = (e) => ![
	"FinishAction",
	"SwitchLLMAction",
	"ThinkAction"
].includes(e.action.kind), W = (f, p) => {
	let b = f.reduce((e, t) => {
		try {
			return h(t, e);
		} catch {
			return e;
		}
	}, []), x = new Map(f.filter(r).map((e) => [e.id, e])), C = [], w = /* @__PURE__ */ new Set(), D = S(b.filter((e) => d(e) && !e.observation.is_error || g(e)), 2 ** 53 - 1, f), O = (e) => {
		if (w.has(e.id) || !U(e)) return;
		w.add(e.id);
		let t = H(e);
		t && C.push({
			kind: "message",
			author: "assistant",
			content: t,
			timestamp: e.timestamp
		});
	};
	for (let f of D) {
		if (f.kind === "group") continue;
		if (f.kind === "thought") {
			O(f.action);
			continue;
		}
		let { event: h } = f;
		try {
			let f = r(h) ? h : l(h) ? x.get(h.action_id) : void 0;
			if (f && O(f), d(h) && !h.observation.is_error) {
				C.push({
					kind: "note",
					summary: j(e.MODEL$SWITCHED_TO_PROFILE, { name: h.observation.profile_name }),
					content: [h.observation.active_model ? `${t.t(e.TRANSCRIPT_EXPORT$MODEL)}: ${h.observation.active_model}` : "", h.observation.reason ? `${t.t(e.TRANSCRIPT_EXPORT$REASON)}: ${h.observation.reason}` : ""].filter(Boolean).join("\n"),
					timestamp: h.timestamp ?? ""
				});
				continue;
			}
			if (c(h)) {
				let e = y(h).trim();
				if (h.source === "agent") {
					let { reasoning: t, message: n } = m(e);
					[t, n].filter(Boolean).forEach((e) => {
						C.push({
							kind: "message",
							author: "assistant",
							content: e,
							timestamp: h.timestamp ?? ""
						});
					});
				} else e && C.push({
					kind: "message",
					author: "user",
					content: e,
					timestamp: h.timestamp ?? ""
				});
				continue;
			}
			if (u(h)) {
				let { reasoning: e, message: t } = m(h.content ?? "", { streaming: !0 }), n = [h.reasoning_content?.trim() || "", e].filter(Boolean).join("\n\n");
				n && C.push({
					kind: "message",
					author: "assistant",
					content: n,
					timestamp: h.timestamp ?? ""
				}), t.trim() && C.push({
					kind: "message",
					author: "assistant",
					content: t.trim(),
					timestamp: h.timestamp ?? ""
				});
				continue;
			}
			if (i(h)) {
				C.push({
					kind: "error",
					content: h.error,
					timestamp: h.timestamp ?? ""
				});
				continue;
			}
			if (r(h)) {
				if (h.action.kind === "FinishAction") {
					let e = h.action.message.trim();
					e && C.push({
						kind: "message",
						author: "assistant",
						content: e,
						timestamp: h.timestamp ?? ""
					});
				} else C.push({
					kind: "tool",
					summary: P(h),
					details: p ? z(h) : "",
					timestamp: h.timestamp ?? ""
				});
				continue;
			}
			if (l(h)) {
				let e = x.get(h.action_id);
				C.push({
					kind: "tool",
					summary: F(h, e),
					details: p ? B(h, e) : "",
					timestamp: h.timestamp ?? ""
				});
				continue;
			}
			if (n(h)) {
				C.push({
					kind: "tool",
					summary: v(h) || t.t(e.ACTION_MESSAGE$ACP_TOOL),
					details: p ? _(h) : "",
					timestamp: h.timestamp ?? ""
				});
				continue;
			}
			if (s(h)) {
				C.push({
					kind: "tool",
					summary: t.t(e.TRANSCRIPT_EXPORT$HOOK, { command: E(T(h.hook_command), 100) }),
					details: p ? V(h) : "",
					timestamp: h.timestamp ?? ""
				});
				continue;
			}
			a(h) && o(h) && C.push({
				kind: "note",
				summary: `${t.t(e.GOAL$PREFIX)} ${t.t({
					running: e.GOAL$STATUS_RUNNING,
					complete: e.GOAL$STATUS_COMPLETE,
					capped: e.GOAL$STATUS_CAPPED,
					interrupted: e.GOAL$STATUS_INTERRUPTED
				}[h.value.status])}`,
				content: [h.value.objective, h.value.verdict?.missing || ""].filter(Boolean).join("\n\n"),
				timestamp: h.timestamp ?? ""
			});
		} catch {}
	}
	return C;
}, G = (e, t) => t.includeTimestamps ? `<sub>${O(D(e.timestamp))}</sub>\n\n` : "", K = (e) => {
	let t = Math.max(0, ...Array.from(e.matchAll(/`+/g), (e) => e[0].length)), n = "`".repeat(Math.max(3, t + 1));
	return `${n}text\n${e}\n${n}`;
}, q = (n, r) => {
	let i = [`# ${k(A(r.title))}`, ""];
	r.model && i.push(`**${t.t(e.TRANSCRIPT_EXPORT$MODEL)}:** ${k(T(r.model))}`, "");
	for (let a of W(n, r.includeToolDetails)) {
		let n = G(a, r);
		if (a.kind === "message") {
			let r = a.author === "user" ? t.t(e.TRANSCRIPT_EXPORT$USER) : t.t(e.CHAT_INTERFACE$ASSISTANT);
			i.push(`## ${r}`, "", n + k(a.content), "");
		} else if (a.kind === "error") {
			let r = a.content.split("\n").map((e) => `> ${k(e)}`).join("\n");
			i.push(`## ${t.t(e.COMMON$ERROR)}`, "", n + r, "");
		} else if (a.kind === "note") i.push(`> **${O(a.summary)}**`, "", n + k(a.content), "");
		else if (r.includeToolDetails && a.details) i.push("<details>", `<summary><strong>${O(t.t(e.TRANSCRIPT_EXPORT$TOOL))}:</strong> ${O(a.summary)}</summary>`, "", n + K(a.details), "", "</details>", "");
		else {
			let r = n ? `<br>${n.trimEnd()}` : "";
			i.push(`<p><strong>${O(t.t(e.TRANSCRIPT_EXPORT$TOOL))}:</strong> ${O(a.summary)}${r}</p>`, "");
		}
	}
	return `${i.join("\n").trim()}\n`;
}, J = (e, t) => {
	if (!t.includeTimestamps) return "";
	let n = D(e.timestamp);
	return `<time datetime="${O(n)}">${O(n)}</time>`;
}, Y = (n, r) => {
	let i = A(r.title), a = W(n, r.includeToolDetails).map((n) => {
		let i = J(n, r);
		if (n.kind === "message") {
			let r = n.author === "user" ? t.t(e.TRANSCRIPT_EXPORT$USER) : t.t(e.CHAT_INTERFACE$ASSISTANT);
			return `<section class="message ${n.author.toLowerCase()}">
  <header><h2>${O(r)}</h2>${i}</header>
  <div class="content">${O(n.content)}</div>
</section>`;
		}
		return n.kind === "error" ? `<section class="message error">
  <header><h2>${O(t.t(e.COMMON$ERROR))}</h2>${i}</header>
  <div class="content">${O(n.content)}</div>
</section>` : n.kind === "note" ? `<aside class="note">
  <header><strong>${O(n.summary)}</strong>${i}</header>
  ${n.content ? `<div class="content">${O(n.content)}</div>` : ""}
</aside>` : r.includeToolDetails && n.details ? `<details>
  <summary><strong>${O(t.t(e.TRANSCRIPT_EXPORT$TOOL))}:</strong> ${O(n.summary)}${i}</summary>
  <pre>${O(n.details)}</pre>
</details>` : `<div class="tool-summary"><strong>${O(t.t(e.TRANSCRIPT_EXPORT$TOOL))}:</strong> ${O(n.summary)}${i}</div>`;
	}).join("\n"), o = r.model ? `<p class="model"><strong>${O(t.t(e.TRANSCRIPT_EXPORT$MODEL))}:</strong> ${O(T(r.model))}</p>` : "";
	return `<!doctype html>
<html lang="${O(t.resolvedLanguage || t.language || "en")}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:">
  <title>${O(i)}</title>
  <style>
    :root { color-scheme: light dark; font-family: ui-sans-serif, system-ui, sans-serif; }
    body { margin: 0; background: #111827; color: #e5e7eb; line-height: 1.55; }
    main { box-sizing: border-box; width: min(860px, 100%); margin: 0 auto; padding: 48px 24px 80px; }
    h1 { margin: 0; font-size: 2rem; }
    h2 { margin: 0; font-size: 1rem; }
    .model { margin: 8px 0 32px; color: #9ca3af; }
    .message, details, .tool-summary, .note { margin: 16px 0; border: 1px solid #374151; border-radius: 10px; padding: 16px; background: #1f2937; }
    .user { border-left: 4px solid #60a5fa; }
    .assistant { border-left: 4px solid #34d399; }
    .error { border-left: 4px solid #f87171; }
    .note { border-left: 4px solid #a78bfa; }
    header, summary, .tool-summary { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; }
    summary { cursor: pointer; }
    time { flex: none; color: #9ca3af; font-size: .75rem; font-weight: 400; }
    .content { margin-top: 10px; white-space: pre-wrap; overflow-wrap: anywhere; }
    pre { margin: 14px 0 0; padding: 14px; overflow-x: auto; border-radius: 7px; background: #111827; color: #d1d5db; white-space: pre-wrap; overflow-wrap: anywhere; }
    @media (prefers-color-scheme: light) {
      body { background: #f9fafb; color: #111827; }
      .message, details, .tool-summary, .note { border-color: #d1d5db; background: #fff; }
      pre { background: #f3f4f6; color: #1f2937; }
      .model, time { color: #6b7280; }
    }
  </style>
</head>
<body>
  <main>
    <h1>${O(i)}</h1>
    ${o}
    ${a}
  </main>
</body>
</html>
`;
};
//#endregion
export { Y as eventsToHtml, q as eventsToMarkdown };

//# sourceMappingURL=index.js.map