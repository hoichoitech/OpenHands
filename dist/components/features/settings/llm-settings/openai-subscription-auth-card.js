import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { ExternalLink as n } from "../../../../node_modules/lucide-react/dist/esm/icons/external-link.js";
import { displayErrorToast as r, displaySuccessToast as i } from "../../../../utils/custom-toast-handlers.js";
import { CopyToClipboardButton as a } from "../../../shared/buttons/copy-to-clipboard-button.js";
import { Typography as o } from "../../../../ui/typography.js";
import { BrandButton as s } from "../brand-button.js";
import { useLogoutOpenAISubscription as c, usePollOpenAISubscriptionLogin as l, useStartOpenAISubscriptionLogin as u } from "../../../../hooks/mutation/use-llm-subscription-auth.js";
import { useOpenAISubscriptionStatus as d } from "../../../../hooks/query/use-llm-subscription-status.js";
import f from "react";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/components/features/settings/llm-settings/openai-subscription-auth-card.tsx
var g = 5, _ = 1;
function v(e) {
	let t = e.verificationUriComplete ?? e.verificationUri;
	window.open(t, "_blank", "noopener,noreferrer");
}
function y({ isDisabled: y = !1 }) {
	let { t: b } = e("openhands"), x = d(), S = u(), C = l(), w = c(), [T, E] = f.useState(null), [D, O] = f.useState(!1), [k, A] = f.useState(!1), j = f.useRef(null), M = f.useCallback(() => {
		j.current !== null && (window.clearTimeout(j.current), j.current = null);
	}, []), N = () => {
		T && (navigator.clipboard.writeText(T.userCode), O(!0), setTimeout(() => O(!1), 2e3));
	}, P = S.isPending || C.isPending || w.isPending, F = !!x.data?.connected, I = f.useCallback(async (e) => {
		try {
			return (await C.mutateAsync(e)).connected ? (E(null), A(!1), i(b(t.SETTINGS$SUBSCRIPTION_CONNECTED_TOAST)), !0) : (A(!0), !1);
		} catch {
			return r(b(t.SETTINGS$SUBSCRIPTION_CONNECT_ERROR)), !0;
		}
	}, [C, b]);
	return f.useEffect(() => {
		if (!T || F || y) return;
		let e = !1, t = Math.max(T.intervalSeconds ?? g, _), n = () => {
			M(), j.current = window.setTimeout(async () => {
				if (e) return;
				let t = await I(T.deviceCode);
				!e && !t && n();
			}, t * 1e3);
		};
		return n(), () => {
			e = !0, M();
		};
	}, [
		T,
		M,
		F,
		y,
		I
	]), /* @__PURE__ */ h("section", {
		"data-testid": "openai-subscription-auth-card",
		className: "flex flex-col gap-4 rounded-xl border border-[var(--oh-border)] bg-[var(--oh-surface-raised)] p-4",
		children: [
			/* @__PURE__ */ h("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ m(o.H3, { children: b(t.SETTINGS$SUBSCRIPTION_CARD_TITLE) }), /* @__PURE__ */ m(o.Paragraph, {
					className: "text-tertiary-alt text-sm leading-5",
					children: b(t.SETTINGS$SUBSCRIPTION_CARD_DESCRIPTION)
				})]
			}),
			/* @__PURE__ */ m("div", {
				className: "flex flex-col gap-1 text-sm",
				"data-testid": "subscription-status",
				children: x.isLoading ? /* @__PURE__ */ m("span", {
					className: "text-tertiary-light",
					children: b(t.SETTINGS$SUBSCRIPTION_STATUS_CHECKING)
				}) : x.isError ? /* @__PURE__ */ m("span", {
					className: "text-danger",
					children: b(t.SETTINGS$SUBSCRIPTION_STATUS_UNAVAILABLE)
				}) : F ? /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m("span", {
					className: "text-success",
					children: b(t.SETTINGS$SUBSCRIPTION_STATUS_CONNECTED)
				}), x.data?.accountEmail ? /* @__PURE__ */ m("span", {
					className: "text-tertiary-light",
					children: b(t.SETTINGS$SUBSCRIPTION_ACCOUNT, { account: x.data.accountEmail })
				}) : null] }) : /* @__PURE__ */ m("span", {
					className: "text-warning",
					children: b(t.SETTINGS$SUBSCRIPTION_STATUS_DISCONNECTED)
				})
			}),
			T ? /* @__PURE__ */ h("div", {
				"data-testid": "subscription-device-challenge",
				className: "flex flex-col gap-2 rounded-lg border border-[var(--oh-border-subtle)] p-3 text-sm",
				children: [
					/* @__PURE__ */ m("span", { children: b(t.SETTINGS$SUBSCRIPTION_DEVICE_INSTRUCTIONS) }),
					/* @__PURE__ */ h("div", {
						className: "flex items-center gap-2 rounded-lg bg-[var(--oh-surface-deep)] px-3 py-2 font-mono text-base font-semibold text-white",
						children: [/* @__PURE__ */ m("span", {
							"data-testid": "subscription-user-code",
							className: "flex-1 select-all tracking-[0.08em]",
							children: T.userCode
						}), /* @__PURE__ */ m(a, {
							isHidden: !1,
							isDisabled: !1,
							onClick: N,
							mode: D ? "copied" : "copy"
						})]
					}),
					/* @__PURE__ */ h("a", {
						href: T.verificationUriComplete ?? T.verificationUri,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1 text-sm text-[var(--oh-accent)] underline",
						children: [b(t.SETTINGS$SUBSCRIPTION_OPEN_LOGIN), /* @__PURE__ */ m(n, {
							size: 14,
							"aria-hidden": !0
						})]
					}),
					k ? /* @__PURE__ */ m("span", {
						className: "text-warning",
						children: b(t.SETTINGS$SUBSCRIPTION_PENDING_TOAST)
					}) : null
				]
			}) : null,
			/* @__PURE__ */ h("div", {
				className: "flex flex-wrap gap-2",
				children: [F ? /* @__PURE__ */ m(s, {
					testId: "subscription-disconnect",
					type: "button",
					variant: "tertiary",
					isDisabled: y || P,
					onClick: async () => {
						try {
							await w.mutateAsync(), M(), E(null), A(!1), i(b(t.SETTINGS$SUBSCRIPTION_DISCONNECTED_TOAST));
						} catch {
							r(b(t.ERROR$GENERIC));
						}
					},
					children: b(t.SETTINGS$SUBSCRIPTION_DISCONNECT)
				}) : /* @__PURE__ */ m(s, {
					testId: "subscription-connect",
					type: "button",
					variant: "primary",
					isDisabled: y || P,
					onClick: async () => {
						try {
							let e = await S.mutateAsync();
							E(e), A(!0), v(e);
						} catch {
							r(b(t.SETTINGS$SUBSCRIPTION_CONNECT_ERROR));
						}
					},
					children: b(t.SETTINGS$SUBSCRIPTION_CONNECT)
				}), T ? /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m(s, {
					testId: "subscription-poll",
					type: "button",
					variant: "secondary",
					isDisabled: y || P,
					onClick: async () => {
						T && (M(), I(T.deviceCode));
					},
					children: b(t.SETTINGS$SUBSCRIPTION_FINISH_SIGN_IN)
				}), /* @__PURE__ */ m(s, {
					testId: "subscription-cancel",
					type: "button",
					variant: "tertiary",
					isDisabled: y || P,
					onClick: () => {
						M(), E(null), A(!1);
					},
					children: b(t.BUTTON$CANCEL)
				})] }) : null]
			})
		]
	});
}
//#endregion
export { y as OpenAISubscriptionAuthCard };

//# sourceMappingURL=openai-subscription-auth-card.js.map