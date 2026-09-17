import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { CopyToClipboardButton as r } from "../../shared/buttons/copy-to-clipboard-button.js";
import { MarkdownRenderer as i } from "../markdown/markdown-renderer.js";
import { StyledTooltip as a } from "../../shared/buttons/styled-tooltip.js";
import { formatEventTimestamp as o } from "../../../utils/format-event-timestamp.js";
import { TextShimmer as s } from "../../shared/text-shimmer.js";
import { PendingStopIcon as c } from "./pending-stop-icon.js";
import { UserMessageBody as l, chatBubbleMarkdownComponents as u } from "./user-message-body.js";
import d from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/features/chat/chat-message.tsx
function m({ type: m, message: h, children: g, actions: _, isFromPlanningAgent: v = !1, pendingStatus: y, onRetry: b, onDismiss: x, onStop: S, timestamp: C }) {
	let { t: w, i18n: T } = e("openhands"), [E, D] = d.useState(!1), [O, k] = d.useState(!1), [A, j] = d.useState(!1), [M, N] = d.useState(!1), [P, F] = d.useState(!0), I = d.useRef(null), L = o(C, T?.language);
	d.useEffect(() => {
		j(!1);
	}, [h]);
	let R = async () => {
		await navigator.clipboard.writeText(h), k(!0);
	};
	d.useEffect(() => {
		let e;
		return O && (e = setTimeout(() => {
			k(!1);
		}, 2e3)), () => {
			clearTimeout(e);
		};
	}, [O]);
	let z = m === "user" && (y === "error" || y === "sending"), B = y === "sending" && S != null, V = B && E, H = m === "user" && y == null, U = H && M && !A, W = d.Children.count(g) > 0;
	d.useLayoutEffect(() => {
		if (!B || H) return;
		let e = I.current;
		if (!e) return;
		let t = () => {
			let t = Number.parseFloat(getComputedStyle(e).lineHeight), n = Number.isFinite(t) && t > 0 ? t : 24;
			F(e.scrollHeight <= n + 1);
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, [
		h,
		B,
		H
	]);
	let G = H ? /* @__PURE__ */ f(l, {
		message: h,
		isHovering: E,
		isExpanded: A,
		onTruncatableChange: N
	}) : /* @__PURE__ */ f("div", {
		ref: I,
		className: "min-w-0 text-sm leading-6 whitespace-normal [word-break:break-word]",
		children: /* @__PURE__ */ f(i, {
			includeStandard: !0,
			includeHeadings: !0,
			allowHtml: m !== "user",
			components: u,
			children: h
		})
	}), K = /* @__PURE__ */ p("article", {
		"data-testid": `${m}-message`,
		"data-pending-status": y,
		onMouseEnter: () => D(!0),
		onMouseLeave: () => D(!1),
		className: n("rounded-xl relative w-fit max-w-full flex flex-col", W && "gap-2", m === "user" && "mt-6 bg-tertiary self-end px-4 py-2.5", m === "agent" && "mt-6 w-full max-w-full bg-transparent", v && m === "agent" && "border border-[#597ff4] bg-tertiary p-4 mt-2", y === "error" && "border border-[var(--oh-status-error)]/40", !z && "last:mb-4"),
		children: [
			/* @__PURE__ */ p("div", {
				className: n("absolute -top-2.5 -right-2.5 z-10", !E || y === "sending" ? "hidden" : "flex", "items-center gap-1"),
				onClick: (e) => e.stopPropagation(),
				children: [_?.map((e, t) => e.tooltip ? /* @__PURE__ */ f(a, {
					content: e.tooltip,
					placement: "top",
					children: /* @__PURE__ */ f("button", {
						type: "button",
						onClick: e.onClick,
						className: "button-base p-1 cursor-pointer",
						"aria-label": e.tooltip,
						children: e.icon
					})
				}, t) : /* @__PURE__ */ f("button", {
					type: "button",
					onClick: e.onClick,
					className: "button-base p-1 cursor-pointer",
					"aria-label": `Action ${t + 1}`,
					children: e.icon
				}, t)), /* @__PURE__ */ f(r, {
					isHidden: !E,
					isDisabled: O,
					onClick: R,
					mode: O ? "copied" : "copy"
				})]
			}),
			G,
			B ? /* @__PURE__ */ f("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), S?.();
				},
				"data-testid": "chat-message-stop",
				"aria-label": w(t.BUTTON$STOP),
				"aria-hidden": !V,
				tabIndex: V ? 0 : -1,
				className: n("group absolute z-10 inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[var(--oh-color-tertiary)] text-[var(--oh-foreground)] transition-opacity duration-150", P ? "right-3 top-1/2 -translate-y-1/2" : "right-3 bottom-2.5", V ? "opacity-100" : "pointer-events-none opacity-0"),
				children: /* @__PURE__ */ f(c, { className: "block h-7 w-7 max-w-none" })
			}) : null,
			U ? /* @__PURE__ */ f("button", {
				type: "button",
				"data-testid": "chat-message-expand",
				"aria-expanded": !1,
				"aria-label": w(t.COMMON$VIEW_MORE),
				className: "absolute inset-0 z-[1] cursor-pointer rounded-xl border-0 bg-transparent p-0",
				onClick: () => j(!0)
			}) : null,
			g
		]
	}), q = L ? /* @__PURE__ */ f(a, {
		content: /* @__PURE__ */ f("time", {
			dateTime: C,
			children: L
		}),
		placement: "top",
		isOpen: E,
		children: K
	}) : K;
	return m === "user" && y === "error" ? /* @__PURE__ */ p("div", {
		className: "flex w-fit max-w-full flex-col items-end gap-1.5 self-end last:mb-4",
		children: [q, /* @__PURE__ */ p("div", {
			role: "alert",
			"data-testid": "chat-message-error",
			className: "flex items-center gap-2 text-xs text-[var(--oh-status-error)]",
			children: [
				/* @__PURE__ */ f("span", { children: w(t.CHAT_INTERFACE$MESSAGE_SEND_FAILED) }),
				b ? /* @__PURE__ */ f("button", {
					type: "button",
					onClick: b,
					className: "cursor-pointer rounded-md border border-[var(--oh-border)] px-2 py-1 text-xs font-normal text-[var(--oh-foreground)] hover:bg-[var(--oh-interactive-hover)]",
					"data-testid": "chat-message-retry",
					children: w(t.CHAT_INTERFACE$MESSAGE_RETRY)
				}) : null,
				x ? /* @__PURE__ */ f("button", {
					type: "button",
					onClick: x,
					className: "cursor-pointer rounded-md border border-[var(--oh-border)] px-2 py-1 text-xs font-normal text-[var(--oh-foreground)] hover:bg-[var(--oh-interactive-hover)]",
					"data-testid": "chat-message-dismiss",
					children: w(t.CHAT_INTERFACE$MESSAGE_DISMISS)
				}) : null
			]
		})]
	}) : m === "user" && y === "sending" ? /* @__PURE__ */ p("div", {
		className: "flex w-full max-w-full flex-col last:mb-4",
		children: [q, /* @__PURE__ */ f("div", {
			className: "my-1 w-full py-1 text-sm",
			children: /* @__PURE__ */ f(s, {
				as: "p",
				role: "status",
				"aria-live": "polite",
				"data-testid": "chat-message-sending",
				className: "block w-full text-sm font-normal",
				duration: 1,
				spread: 2,
				children: w(t.CHAT_INTERFACE$MESSAGE_SENDING)
			})
		})]
	}) : q;
}
//#endregion
export { m as ChatMessage };

//# sourceMappingURL=chat-message.js.map