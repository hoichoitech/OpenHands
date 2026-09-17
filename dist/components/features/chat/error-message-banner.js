import { Trans as e } from "../../../node_modules/react-i18next/dist/es/Trans.js";
import { useTranslation as t } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as n } from "../../../i18n/declaration.js";
import { Check as r } from "../../../node_modules/lucide-react/dist/esm/icons/check.js";
import { CircleAlert as i } from "../../../node_modules/lucide-react/dist/esm/icons/circle-alert.js";
import { CircleX as a } from "../../../node_modules/lucide-react/dist/esm/icons/circle-x.js";
import { Copy as o } from "../../../node_modules/lucide-react/dist/esm/icons/copy.js";
import { X as s } from "../../../node_modules/lucide-react/dist/esm/icons/x.js";
import { OH_STATUS_ERROR_COLOR as c } from "../../../constants/status-colors.js";
import { cn as l } from "../../../utils/utils.js";
import { displayErrorToast as u } from "../../../utils/custom-toast-handlers.js";
import { getAcpErrorHeaderKey as d } from "../../../utils/acp-error-codes.js";
import f from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/chat/error-message-banner.tsx
var h = 220;
function g({ message: g, code: _, onDismiss: v, onRetry: y, onReauth: b, classification: x }) {
	let { t: S, i18n: C } = t("openhands"), w = d(_), [T, E] = f.useState(!1), [D, O] = f.useState(!1), [k, A] = f.useState(!1), j = f.useRef(null), M = C.exists(g, { ns: "openhands" }), N = M ? String(S(g)) : g, P = N.length > h, F = P && !T;
	return f.useEffect(() => {
		if (!k) return;
		let e = setTimeout(() => {
			A(!1);
		}, 2e3);
		return () => clearTimeout(e);
	}, [k]), f.useEffect(() => {
		A(!1);
	}, [N]), f.useLayoutEffect(() => {
		let e = j.current;
		if (!e) return;
		let t = () => {
			let t = Number.parseFloat(getComputedStyle(e).lineHeight);
			if (!Number.isFinite(t) || t <= 0) {
				O(!1);
				return;
			}
			O(e.getBoundingClientRect().height > t * 1.5);
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, [
		N,
		F,
		T,
		g
	]), /* @__PURE__ */ m("div", {
		className: l("flex w-full gap-2 rounded-lg border border-[var(--oh-border)] bg-[var(--oh-surface-raised)] p-2 text-[var(--oh-foreground)]", D ? "items-start" : "items-center"),
		"data-testid": "error-message-banner",
		children: [
			x != null && x.kind !== "internal" && x.kind !== "unknown" ? /* @__PURE__ */ p(i, {
				"aria-hidden": !0,
				className: "h-4 w-4 shrink-0 text-[var(--oh-warning)]",
				strokeWidth: 2,
				"data-testid": "warning-message-banner-icon"
			}) : /* @__PURE__ */ p(a, {
				"aria-hidden": !0,
				className: "h-4 w-4 shrink-0",
				strokeWidth: 2,
				style: { color: c },
				"data-testid": "error-message-banner-icon"
			}),
			/* @__PURE__ */ m("div", {
				className: "min-w-0 flex-1",
				children: [
					w && /* @__PURE__ */ p("div", {
						className: "text-sm font-medium text-[var(--oh-foreground)]",
						"data-testid": "error-message-banner-header",
						children: S(w)
					}),
					/* @__PURE__ */ p("div", {
						ref: j,
						className: l("whitespace-pre-wrap break-words text-sm text-[var(--oh-muted)]", F && "line-clamp-3"),
						"data-testid": "error-message-banner-content",
						children: M ? /* @__PURE__ */ p(e, {
							ns: "openhands",
							i18nKey: g
						}) : g
					}),
					b && /* @__PURE__ */ p("button", {
						type: "button",
						onClick: b,
						className: "mt-2 cursor-pointer rounded-md border border-[var(--oh-border)] px-2 py-1 text-xs font-normal text-[var(--oh-foreground)] hover:bg-[var(--oh-interactive-hover)]",
						"data-testid": "error-message-banner-reauth",
						children: S(n.ERROR$ACP_UPDATE_CREDENTIALS)
					}),
					P && /* @__PURE__ */ p("button", {
						type: "button",
						className: "mt-1 cursor-pointer text-xs font-normal text-[var(--oh-foreground)] underline",
						onClick: () => E((e) => !e),
						"data-testid": "error-message-banner-toggle",
						children: S(T ? n.COMMON$VIEW_LESS : n.COMMON$VIEW_MORE)
					})
				]
			}),
			/* @__PURE__ */ m("div", {
				className: l("flex shrink-0 gap-1", D ? "self-start" : "items-center"),
				children: [
					y && /* @__PURE__ */ p("button", {
						type: "button",
						onClick: y,
						className: "cursor-pointer rounded-md border border-[var(--oh-border)] px-2 py-1 text-xs font-normal text-[var(--oh-foreground)] hover:bg-[var(--oh-interactive-hover)]",
						"data-testid": "error-message-banner-retry",
						children: S(n.CHAT_INTERFACE$MESSAGE_RETRY)
					}),
					/* @__PURE__ */ p("button", {
						type: "button",
						onClick: async () => {
							try {
								await navigator.clipboard.writeText(N), A(!0);
							} catch {
								u(S(n.CHAT_INTERFACE$CHAT_MESSAGE_COPY_FAILED));
							}
						},
						className: "shrink-0 cursor-pointer rounded-md p-1 text-[var(--oh-muted)] hover:bg-[var(--oh-interactive-hover)] hover:text-[var(--oh-foreground)]",
						"aria-label": S(k ? n.BUTTON$COPIED : n.BUTTON$COPY),
						"data-testid": "error-message-banner-copy",
						children: p(k ? r : o, {
							className: "h-4 w-4",
							"aria-hidden": !0
						})
					}),
					v && /* @__PURE__ */ p("button", {
						type: "button",
						onClick: v,
						className: "shrink-0 cursor-pointer rounded-md p-1 text-[var(--oh-muted)] hover:bg-[var(--oh-interactive-hover)] hover:text-[var(--oh-foreground)]",
						"aria-label": S(n.BUTTON$CLOSE),
						"data-testid": "error-message-banner-dismiss",
						children: /* @__PURE__ */ p(s, {
							className: "h-4 w-4",
							"aria-hidden": !0
						})
					})
				]
			})
		]
	});
}
//#endregion
export { g as ErrorMessageBanner };

//# sourceMappingURL=error-message-banner.js.map