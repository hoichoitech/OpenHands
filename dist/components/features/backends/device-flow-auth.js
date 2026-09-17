import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { ModalBackdrop as r } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as i } from "../../shared/modals/modal-body.js";
import { BrandButton as a } from "../settings/brand-button.js";
import { useDeviceFlow as o } from "../../../hooks/use-device-flow.js";
import s from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/features/backends/device-flow-auth.tsx
function u(e) {
	try {
		return new URL(e).protocol === "https:";
	} catch {
		return !1;
	}
}
function d({ host: d, onSuccess: p, testIdRoot: m, isDisabled: h = !1, idleButtonLabel: g, idleButtonContent: _, idleDescription: v, idleFooter: y, className: b, buttonClassName: x, buttonVariant: S = "primary", statusDisplay: C = "inline", analyticsSource: w }) {
	let { t: T } = e("openhands"), E = o(), D = s.useRef(null);
	s.useEffect(() => () => {
		D.current?.close();
	}, []), s.useEffect(() => {
		if (E.status === "awaiting_authorization" && E.verificationUrl && D.current && !D.current.closed) {
			if (!u(E.verificationUrl)) {
				console.error("Invalid verification URL protocol");
				return;
			}
			try {
				D.current.location.href = E.verificationUrl;
			} catch {
				D.current = window.open(E.verificationUrl, "_blank", "noopener,noreferrer");
			}
		}
	}, [E.status, E.verificationUrl]), s.useEffect(() => {
		if (E.status === "success" && E.apiKey) try {
			p(E.apiKey);
		} finally {
			E.reset(), D.current?.close();
		}
	}, [
		E.status,
		E.apiKey,
		E.reset,
		p
	]);
	let O = () => {
		let e = d.trim().replace(/\/+$/, ""), t = /^https?:\/\//i.test(e) ? e : `https://${e}`;
		try {
			let e = new URL(t);
			if (e.username || e.password) throw Error("Invalid URL format");
		} catch {
			return;
		}
		D.current = window.open("about:blank", "_blank"), D.current || console.warn("Popup blocked - user will need to use manual link"), E.start(t, w);
	}, k = () => {
		E.cancel(), D.current?.close();
	}, A = /* @__PURE__ */ c(f, {
		status: E.status,
		error: E.error,
		verificationUrl: E.verificationUrl,
		testIdRoot: m,
		onCancel: k,
		onRetry: O
	}), j = C === "modal" && E.status !== "idle", M = g ?? T(t.BACKEND$LOGIN_WITH_OPENHANDS);
	return /* @__PURE__ */ l("div", {
		"data-testid": `${m}-device-flow`,
		className: n("flex flex-col gap-3", b),
		children: [
			E.status === "idle" ? v : null,
			E.status === "idle" && S === "unstyled" && /* @__PURE__ */ c("button", {
				type: "button",
				onClick: O,
				"data-testid": `${m}-login-button`,
				className: x,
				disabled: h,
				"aria-label": _ ? M : void 0,
				children: _ ?? M
			}),
			E.status === "idle" && S !== "unstyled" && /* @__PURE__ */ c(a, {
				type: "button",
				variant: S,
				onClick: O,
				testId: `${m}-login-button`,
				className: x,
				isDisabled: h,
				ariaLabel: _ ? M : void 0,
				children: _ ?? M
			}),
			E.status === "idle" ? y : null,
			C === "inline" ? A : null,
			j ? /* @__PURE__ */ c(r, {
				onClose: k,
				"aria-label": T(t.BACKEND$LOGIN_WITH_OPENHANDS),
				closeOnBackdropClick: !1,
				children: /* @__PURE__ */ c(i, {
					testID: `${m}-auth-modal`,
					width: "sm",
					className: "items-stretch border border-[var(--oh-border)]",
					children: A
				})
			}) : null
		]
	});
}
function f({ status: n, error: r, verificationUrl: i, testIdRoot: o, onCancel: s, onRetry: d }) {
	let { t: f } = e("openhands");
	if (n === "idle" || n === "success") return null;
	if (n === "starting") return /* @__PURE__ */ l("div", {
		className: "flex items-center justify-center gap-2",
		"data-testid": `${o}-auth-starting`,
		role: "status",
		"aria-live": "polite",
		children: [/* @__PURE__ */ c(p, {}), /* @__PURE__ */ c("span", {
			className: "text-sm text-[var(--oh-text-tertiary)]",
			children: f(t.BACKEND$AUTH_STARTING)
		})]
	});
	if (n === "awaiting_authorization") {
		let e = i && u(i) ? i : null;
		return /* @__PURE__ */ l("div", {
			className: "flex flex-col gap-4",
			"data-testid": `${o}-auth-awaiting`,
			role: "status",
			"aria-live": "polite",
			children: [
				/* @__PURE__ */ l("div", {
					className: "flex items-center justify-center gap-2",
					children: [/* @__PURE__ */ c(p, {}), /* @__PURE__ */ c("span", {
						className: "text-sm font-medium text-white",
						children: f(t.BACKEND$AUTH_AWAITING)
					})]
				}),
				/* @__PURE__ */ l("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ c("p", {
						className: "text-center text-sm leading-5 text-[var(--oh-text-tertiary)]",
						children: e ? `${f(t.BACKEND$AUTH_BROWSER_OPENED)} ${f(t.BACKEND$AUTH_OPEN_MANUALLY)}` : f(t.BACKEND$AUTH_BROWSER_OPENED)
					}), e ? /* @__PURE__ */ c("a", {
						href: e,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "max-h-16 overflow-auto break-all text-center text-xs text-blue-400 hover:underline",
						children: e
					}) : null]
				}),
				/* @__PURE__ */ c(a, {
					type: "button",
					variant: "secondary",
					onClick: s,
					testId: `${o}-auth-cancel`,
					className: "w-full",
					children: f(t.BACKEND$AUTH_CANCEL)
				})
			]
		});
	}
	return /* @__PURE__ */ l("div", {
		className: "flex flex-col gap-3 rounded-lg border border-red-700 bg-red-900/20 p-4",
		"data-testid": `${o}-auth-error`,
		role: "alert",
		children: [/* @__PURE__ */ c("p", {
			className: "text-sm text-red-400",
			children: r
		}), /* @__PURE__ */ c(a, {
			type: "button",
			variant: "secondary",
			onClick: d,
			testId: `${o}-auth-retry`,
			className: "w-full",
			children: f(t.BACKEND$AUTH_RETRY)
		})]
	});
}
function p() {
	return /* @__PURE__ */ c("svg", {
		className: "animate-spin h-4 w-4 text-white",
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: /* @__PURE__ */ c("path", {
			className: "opacity-75",
			fill: "currentColor",
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		})
	});
}
//#endregion
export { d as DeviceFlowAuth };

//# sourceMappingURL=device-flow-auth.js.map