import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ChevronDown as n } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { Globe as r } from "../../../node_modules/lucide-react/dist/esm/icons/globe.js";
import { Info as i } from "../../../node_modules/lucide-react/dist/esm/icons/info.js";
import { Monitor as a } from "../../../node_modules/lucide-react/dist/esm/icons/monitor.js";
import { cn as o } from "../../../utils/utils.js";
import { useNavigation as s } from "../../../context/navigation-context.js";
import { ServerClient as c } from "../../../node_modules/@openhands/typescript-client/dist/client/server-client.js";
import { isOpenHandsCloudHost as l } from "../../../node_modules/@openhands/typescript-client/dist/client/device-flow-client.js";
import "../../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getLockedCloudHost as u } from "../../../api/agent-server-config.js";
import { getUserFacingConnectionErrorMessage as d } from "../../../utils/user-facing-error.js";
import { getAgentServerClientOptions as f } from "../../../api/agent-server-client-options.js";
import { getDisplayAgentServerVersion as p, validateLocalBackend as m } from "../../../api/agent-server-compatibility.js";
import { useQuery as h } from "../../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackendContext as g } from "../../../contexts/active-backend-context.js";
import { useTracking as _ } from "../../../hooks/use-tracking.js";
import { ModalBackdrop as v } from "../../shared/modals/modal-backdrop.js";
import { MODAL_MAX_WIDTH_VIEWPORT as y, modalWidthClassName as b } from "../../shared/modals/modal-body.js";
import { modalTitleLgClassName as x, modalTitleLgMediumClassName as S } from "../../../utils/modal-classes.js";
import { ModalCloseButton as C } from "../../shared/modals/modal-close-button.js";
import { BrandButton as w } from "../settings/brand-button.js";
import { SettingsInput as T } from "../settings/settings-input.js";
import { SegmentedToggle as E } from "../files-tab/segmented-toggle.js";
import { useBackendsHealth as D } from "../../../hooks/query/use-backends-health.js";
import O from "../../../assets/branding/openhands-logo-white.js";
import "../../../api/device-flow-client.js";
import k from "../../../icons/chevron-down-small.js";
import A from "../../../icons/external-link.js";
import j from "../../../icons/server.js";
import { getBackendStatusLabel as M } from "./backend-status-label.js";
import { BackendStatusDot as N } from "./backend-status-dot.js";
import { DeviceFlowAuth as P } from "./device-flow-auth.js";
import F from "react";
import { jsx as I, jsxs as L } from "react/jsx-runtime";
//#region src/components/features/backends/backend-form-modal.tsx
function R(e) {
	return l(e) ? "cloud" : "local";
}
function z(e) {
	let t = e.toLowerCase().replace(/^\[|\]$/g, "");
	return !!(t === "localhost" || t === "::1" || t === "::" || t === "0.0.0.0" || /^127\./.test(t) || /^::ffff:127\./i.test(t) || /^10\./.test(t) || /^192\.168\./.test(t) || /^172\.(1[6-9]|2\d|3[01])\./.test(t) || /^fe[89ab][0-9a-f]:/i.test(t) || /^f[cd][0-9a-f]{2}:/i.test(t) || t.endsWith(".local") || !t.includes(".") && !t.includes(":"));
}
function B(e) {
	let t = e.trim().replace(/\/+$/, "");
	if (!t) return "";
	if (/^https?:\/\//i.test(t)) return t;
	let n = t.match(/^\[([^\]]+)\]/);
	return `${z(n ? n[1] : (t.match(/:/g) ?? []).length > 1 ? t : t.split(":")[0]) ? "http" : "https"}://${t}`;
}
function V(e) {
	let t = e.trim();
	if (!t || /\s/.test(t)) return !1;
	let n = B(t);
	if (!n) return !1;
	try {
		let e = new URL(n);
		return (e.protocol === "http:" || e.protocol === "https:") && e.hostname.length > 0;
	} catch {
		return !1;
	}
}
var H = "https://app.all-hands.dev", U = "agent-canvas --backend-only --port 8001", W = "https://github.com/OpenHands/OpenHands/blob/main/docs/DEVELOPMENT.md#alternative-development-workflows", G = "https://github.com/OpenHands/OpenHands/blob/main/docs/SELF_HOSTING.md", K = "https://docs.openhands.dev/overview/introduction";
function q(e, n) {
	return e(t.BACKEND$CONNECTION_TEST_FAILED, {
		host: n,
		interpolation: { escapeValue: !1 }
	});
}
function J(e) {
	return d(e);
}
function Y(e, t) {
	let n = J(t);
	return n ? `${e}\n${n}` : e;
}
async function X(e) {
	return e.kind === "local" ? { agentServerVersion: await m(e, 5e3) } : { agentServerVersion: null };
}
function ee({ backend: n, testIdRoot: r }) {
	let { t: i } = e("openhands"), a = D([n])[n.id], o = a?.isConnected ?? null, s = a?.disabled === !0, l = a?.consecutiveFailures ?? 0, u = a?.lastError ?? null, { data: d } = h({
		queryKey: [
			"backend-version",
			n.host,
			n.apiKey
		],
		queryFn: async () => p(await new c(f({
			host: n.host,
			sessionApiKey: n.apiKey || null,
			timeout: 5e3
		})).getServerInfo()),
		retry: !1,
		staleTime: 6e4,
		enabled: n.kind === "local" && !s
	}), m = M(i, n, a), g = n.kind === "cloud" ? i(t.BACKEND$KIND_CLOUD) : i(t.BACKEND$KIND_LOCAL);
	return /* @__PURE__ */ L("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ L("div", {
			"data-testid": `${r}-status`,
			className: "flex items-center gap-3 text-sm",
			children: [
				/* @__PURE__ */ I(N, { isConnected: o }),
				/* @__PURE__ */ I("span", {
					className: "text-white",
					"data-testid": `${r}-status-label`,
					children: m
				}),
				/* @__PURE__ */ I("span", {
					className: "text-tertiary-alt",
					children: "·"
				}),
				/* @__PURE__ */ I("span", {
					className: "text-[var(--oh-text-tertiary)]",
					children: g
				}),
				d ? /* @__PURE__ */ I("span", {
					className: "text-xs text-[var(--oh-muted)]",
					"data-testid": `${r}-version`,
					children: i(t.BACKEND$VERSION_LABEL, { version: d })
				}) : null
			]
		}), s ? /* @__PURE__ */ L("div", {
			"data-testid": `${r}-status-error`,
			className: "flex flex-col gap-1 rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm",
			children: [
				/* @__PURE__ */ I("span", {
					className: "font-semibold text-red-300",
					children: i(t.BACKEND$HEALTH_FAILED_TITLE)
				}),
				/* @__PURE__ */ I("span", {
					className: "text-xs text-[var(--oh-text-tertiary)]",
					children: i(t.BACKEND$HEALTH_FAILED_DETAIL, { count: l })
				}),
				u ? /* @__PURE__ */ I("span", {
					"data-testid": `${r}-status-error-message`,
					className: "text-xs text-red-300 whitespace-pre-wrap break-words",
					children: u
				}) : null
			]
		}) : null]
	});
}
function Z({ initialName: t = "", initialHost: n = "", initialApiKey: r = "", onTestConnection: i, onSuccess: a, requireApiKey: o = !1, onSubmitOverride: s, fixedKind: c }) {
	let { t: l } = e("openhands"), [u, d] = F.useState(t), [f, p] = F.useState(n), [m, h] = F.useState(r), [g, _] = F.useState(null), [v, y] = F.useState(!1), [b, x] = F.useState(null), S = c ?? b ?? R(f), C = o || S !== "local", w = u.trim().length > 0 && V(f) && (!C || m.trim().length > 0);
	return {
		name: u,
		setName: d,
		host: f,
		setHost: p,
		apiKey: m,
		setApiKey: h,
		connectionError: g,
		setConnectionError: _,
		isSubmitting: v,
		kind: S,
		setKind: x,
		canSubmit: w,
		handleSubmit: F.useCallback(async (e) => {
			if (e.preventDefault(), !w || v) return;
			let t = {
				name: u.trim(),
				host: B(f),
				apiKey: m.trim(),
				kind: S
			};
			_(null), y(!0);
			try {
				s ? await s(t) : a(await i(t));
			} catch (e) {
				_(Y(q(l, t.host), e));
			} finally {
				y(!1);
			}
		}, [
			w,
			v,
			u,
			f,
			m,
			S,
			i,
			a,
			o,
			s,
			c,
			l
		])
	};
}
function te({ mode: n, backend: r, onSubmitted: i, renderActions: a, testIdRoot: s, hostReadOnly: c, requireApiKey: l, hideConfigurationFields: u = !1, onSubmitOverride: d }) {
	let { t: f } = e("openhands"), { addBackend: p, updateBackend: m } = g(), h = n === "edit" && r ? r.kind : null, { name: _, setName: v, host: y, setHost: b, apiKey: x, setApiKey: S, connectionError: C, setConnectionError: E, isSubmitting: D, kind: O, handleSubmit: k } = Z({
		initialName: r?.name ?? "",
		initialHost: r?.host ?? "",
		initialApiKey: r?.apiKey ?? "",
		onTestConnection: X,
		onSuccess: async () => {
			let e = {
				name: _.trim(),
				host: B(y),
				apiKey: x.trim(),
				kind: h ?? O
			};
			n === "edit" && r ? m(r.id, e) : p(e), i();
		},
		requireApiKey: l,
		onSubmitOverride: d
	}), [A, j] = F.useState(!1), [M, N] = F.useState(!1), P = h ?? O, R = s ?? (n === "edit" ? "edit-backend" : "add-backend"), z = l || P !== "local", U = _.trim().length > 0 && V(y) && (!z || x.trim().length > 0), W = A && !_.trim() ? f(t.BACKEND$NAME_REQUIRED) : void 0, G = M ? y.trim() ? V(y) ? void 0 : f(t.BACKEND$HOST_INVALID) : f(t.BACKEND$HOST_REQUIRED) : void 0;
	return /* @__PURE__ */ L("form", {
		"data-testid": `${R}-form`,
		onSubmit: async (e) => {
			if (!U) {
				j(!0), N(!0);
				return;
			}
			await k(e);
		},
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ L("div", {
			"data-testid": `${R}-configuration-fields`,
			className: o("flex flex-col gap-4", u && "hidden"),
			children: [
				/* @__PURE__ */ I(T, {
					testId: `${R}-name`,
					name: `${R}-name`,
					type: "text",
					label: f(t.BACKEND$NAME_LABEL),
					value: _,
					onChange: (e) => {
						v(e), E(null);
					},
					onBlur: () => j(!0),
					placeholder: "Production",
					className: "w-full",
					showRequiredTag: !0,
					error: W
				}),
				/* @__PURE__ */ I(T, {
					testId: `${R}-host`,
					name: `${R}-host`,
					type: "text",
					label: f(t.BACKEND$HOST_LABEL),
					value: y,
					onChange: c ? void 0 : (e) => {
						b(e), E(null);
					},
					onBlur: () => N(!0),
					placeholder: H,
					className: "w-full",
					showRequiredTag: !0,
					error: G,
					isDisabled: c
				}),
				/* @__PURE__ */ I(T, {
					testId: `${R}-api-key`,
					name: `${R}-api-key`,
					type: "password",
					label: f(t.BACKEND$KEY_LABEL),
					value: x,
					onChange: (e) => {
						S(e), E(null);
					},
					placeholder: "",
					className: "w-full"
				}),
				C ? /* @__PURE__ */ I("div", {
					role: "alert",
					"data-testid": `${R}-error`,
					className: "rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300 whitespace-pre-wrap break-words",
					children: C
				}) : null,
				n === "edit" && r && /* @__PURE__ */ I(ee, {
					backend: r,
					testIdRoot: R
				})
			]
		}), a ? a({
			canSubmit: U && !D,
			isSubmitting: D,
			testIdRoot: R
		}) : /* @__PURE__ */ L("div", {
			className: "flex justify-end gap-2 mt-2 w-full",
			children: [/* @__PURE__ */ I(w, {
				type: "button",
				variant: "secondary",
				onClick: i,
				testId: `${R}-cancel`,
				children: f(t.BUTTON$CANCEL)
			}), /* @__PURE__ */ I(w, {
				type: "submit",
				variant: "primary",
				isDisabled: !U || D,
				testId: `${R}-submit`,
				children: f(t.BACKEND$SAVE)
			})]
		})]
	});
}
function ne() {
	let { currentPath: e, navigate: t } = s();
	return F.useCallback(() => {
		/^\/automations\/[^/]+/.test(e) ? t("/automations") : /^\/conversations\/[^/]+/.test(e) && t("/conversations");
	}, [e, t]);
}
function re({ onConnected: n, testIdRoot: r, initialBackend: i, requireApiKey: a, submitLabel: o, submittingLabel: s, submitTestId: c, fixedKind: l, showKindSelector: u = !0 }) {
	let { t: d } = e("openhands"), { name: f, setName: p, host: m, setHost: h, apiKey: g, setApiKey: _, connectionError: v, setConnectionError: y, isSubmitting: b, kind: x, setKind: S, canSubmit: C, handleSubmit: D } = Z({
		initialName: i?.name ?? "",
		initialHost: i?.host ?? "",
		initialApiKey: i?.apiKey ?? "",
		onTestConnection: X,
		onSuccess: (e) => {
			n({
				name: f.trim(),
				host: B(m),
				apiKey: g.trim(),
				kind: x
			}, "manual", e);
		},
		requireApiKey: a,
		fixedKind: l
	});
	return /* @__PURE__ */ L("form", {
		"data-testid": `${r}-form`,
		onSubmit: D,
		className: "flex flex-col gap-4 flex-1 min-w-0",
		children: [
			/* @__PURE__ */ I(T, {
				testId: `${r}-name`,
				name: `${r}-name`,
				type: "text",
				label: d(t.BACKEND$NAME_LABEL),
				hint: d(t.BACKEND$NAME_HELPER),
				value: f,
				onChange: (e) => {
					p(e), y(null);
				},
				placeholder: "e.g. My Server",
				className: "w-full"
			}),
			/* @__PURE__ */ I(T, {
				testId: `${r}-host`,
				name: `${r}-host`,
				type: "text",
				label: d(t.BACKEND$HOST_LABEL),
				hint: d(t.BACKEND$HOST_HELPER),
				value: m,
				onChange: (e) => {
					h(e), y(null);
				},
				placeholder: "http://localhost:8000",
				className: "w-full"
			}),
			u ? /* @__PURE__ */ L("div", {
				className: "flex flex-col items-start gap-2.5",
				children: [/* @__PURE__ */ I("span", {
					className: "text-sm",
					children: d(t.BACKEND$KIND_LABEL)
				}), /* @__PURE__ */ I(E, {
					value: x,
					options: [{
						value: "local",
						label: d(t.BACKEND$KIND_LOCAL)
					}, {
						value: "cloud",
						label: d(t.BACKEND$KIND_CLOUD)
					}],
					onChange: (e) => S(e),
					ariaLabel: d(t.BACKEND$KIND_LABEL),
					testId: `${r}-kind`
				})]
			}) : null,
			/* @__PURE__ */ I(T, {
				testId: `${r}-api-key`,
				name: `${r}-api-key`,
				type: "password",
				label: d(t.BACKEND$KEY_LABEL),
				value: g,
				onChange: (e) => {
					_(e), y(null);
				},
				placeholder: "sk-••••••••••",
				className: "w-full"
			}),
			v ? /* @__PURE__ */ I("div", {
				role: "alert",
				"data-testid": `${r}-error`,
				className: "rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300 whitespace-pre-wrap break-words",
				children: v
			}) : null,
			/* @__PURE__ */ I(w, {
				type: "submit",
				variant: "secondary",
				isDisabled: !C || b,
				testId: c ?? `${r}-submit`,
				className: "w-full text-center",
				children: b ? s : o
			})
		]
	});
}
function Q({ onConnected: n, testIdRoot: r, lockedHost: i, analyticsSource: a, showBranding: s = !0 }) {
	let { t: c } = e("openhands"), [l, u] = F.useState(!1), [d, f] = F.useState(""), p = `${r}-advanced-panel`, m = i ?? (d.trim() || H);
	return /* @__PURE__ */ L("div", {
		className: "flex w-full min-w-0 flex-col items-center gap-3",
		children: [s ? /* @__PURE__ */ L("div", {
			className: "flex flex-col items-center gap-1",
			children: [/* @__PURE__ */ I(O, {
				width: 56,
				height: 56,
				"aria-hidden": !0
			}), /* @__PURE__ */ I("h4", {
				className: S,
				"data-testid": `${r}-cloud-title`,
				children: c(t.BACKEND$CLOUD_TITLE)
			})]
		}) : null, /* @__PURE__ */ I(P, {
			host: m,
			onSuccess: (e) => {
				n({
					name: "OpenHands Cloud",
					host: B(m),
					apiKey: e,
					kind: "cloud"
				}, "cloud_login");
			},
			testIdRoot: r,
			analyticsSource: a,
			className: "w-full items-center",
			idleDescription: /* @__PURE__ */ I("p", {
				className: "text-center text-sm leading-relaxed text-[var(--oh-muted)]",
				"data-testid": `${r}-cloud-description`,
				children: c(t.BACKEND$CLOUD_DESCRIPTION)
			}),
			idleFooter: i ? null : /* @__PURE__ */ L("div", {
				className: "mx-auto w-full max-w-md",
				children: [/* @__PURE__ */ L("button", {
					type: "button",
					onClick: () => u((e) => !e),
					"aria-expanded": l,
					"aria-controls": p,
					"data-testid": `${r}-advanced-toggle`,
					className: "flex w-full cursor-pointer items-center justify-center gap-1 text-center text-xs text-[var(--oh-muted)] transition-colors hover:text-content-2",
					children: [/* @__PURE__ */ I("span", { children: c(t.BACKEND$ADVANCED) }), /* @__PURE__ */ I(k, {
						className: o("h-4 w-4 shrink-0 text-muted transition-transform duration-200 ease-out", l && "rotate-180"),
						"aria-hidden": !0
					})]
				}), /* @__PURE__ */ I("div", {
					className: o("grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none", l ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
					children: /* @__PURE__ */ I("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ L("div", {
							id: p,
							"data-testid": `${r}-advanced-panel`,
							"aria-hidden": !l,
							inert: l ? void 0 : !0,
							className: o("pt-3 transition-opacity duration-200 ease-out motion-reduce:transition-none", l ? "opacity-100" : "opacity-0"),
							children: [/* @__PURE__ */ I(T, {
								testId: `${r}-cloud-host`,
								name: `${r}-cloud-host`,
								type: "text",
								label: c(t.BACKEND$HOST_LABEL),
								value: d,
								onChange: f,
								placeholder: H,
								className: "w-full"
							}), /* @__PURE__ */ I("p", {
								className: "mt-1 text-xs text-[var(--oh-muted)]",
								children: c(t.BACKEND$LOGIN_CLOUD_HINT)
							})]
						})
					})
				})]
			})
		})]
	});
}
function $({ value: e, selectedValue: t, title: n, description: r, icon: i, onSelect: a, panelId: s, testId: c }) {
	let l = e === t;
	return /* @__PURE__ */ L("button", {
		id: `${c}-tab`,
		type: "button",
		role: "tab",
		"aria-selected": l,
		"aria-controls": s,
		"data-testid": c,
		onClick: () => a(e),
		className: o("relative flex min-h-16 w-full cursor-pointer items-center gap-3 px-3 py-3 text-left transition-colors", "first:border-r first:border-r-[var(--oh-border)]", "focus-visible:z-10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-300", l ? "bg-[var(--oh-surface-raised)] text-white after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary" : "text-[var(--oh-muted)] hover:bg-[var(--oh-surface-raised)] hover:text-white"),
		children: [/* @__PURE__ */ I("span", {
			className: "flex size-8 shrink-0 items-center justify-center",
			"aria-hidden": !0,
			children: i
		}), /* @__PURE__ */ L("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ I("span", {
				className: "block truncate text-sm font-medium",
				children: n
			}), /* @__PURE__ */ I("span", {
				className: "mt-0.5 block text-xs leading-tight text-[var(--oh-muted)]",
				children: r
			})]
		})]
	});
}
function ie({ children: e }) {
	let t = F.useRef(null), [n, r] = F.useState();
	return F.useLayoutEffect(() => {
		let e = t.current;
		if (!e) return;
		let n = () => {
			let t = e.getBoundingClientRect().height;
			r(t > 0 ? t : void 0);
		};
		if (n(), typeof ResizeObserver > "u") return;
		let i = new ResizeObserver(n);
		return i.observe(e), () => i.disconnect();
	}, []), /* @__PURE__ */ I("div", {
		"data-testid": "add-backend-panel-height",
		style: n === void 0 ? void 0 : { height: n },
		className: "overflow-hidden transition-[height] duration-300 ease-in-out motion-reduce:transition-none",
		children: /* @__PURE__ */ I("div", {
			ref: t,
			children: e
		})
	});
}
function ae({ location: r }) {
	let { t: a } = e("openhands"), [s, c] = F.useState(!1), l = r === "remote", u = a(l ? t.BACKEND$REMOTE_SETUP_TITLE : t.BACKEND$BEFORE_CONNECT_TITLE), d = a(l ? t.BACKEND$REMOTE_SETUP_DESCRIPTION : t.BACKEND$LOCAL_SETUP_DESCRIPTION), f = l ? G : W, p = a(l ? t.BACKEND$REMOTE_SETUP_DOCS : t.BACKEND$LOCAL_SETUP_DOCS), m = l ? "add-backend-remote" : "add-backend-local", h = `${m}-guidance-toggle`, g = `${m}-guidance-body`;
	return /* @__PURE__ */ L("aside", {
		"data-testid": `${m}-guidance`,
		className: "rounded-lg bg-[var(--oh-surface-raised)] text-sm text-[var(--oh-muted)]",
		children: [/* @__PURE__ */ I("h4", {
			className: "text-white",
			children: /* @__PURE__ */ L("button", {
				id: h,
				type: "button",
				onClick: () => c((e) => !e),
				"aria-expanded": s,
				"aria-controls": g,
				"data-testid": h,
				className: o("flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 text-left font-medium", "transition-colors hover:bg-[var(--oh-interactive-hover)]", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"),
				children: [/* @__PURE__ */ L("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ I(i, {
						className: "size-4 shrink-0 text-[var(--oh-muted)]",
						"aria-hidden": !0
					}), /* @__PURE__ */ I("span", {
						className: "truncate",
						children: u
					})]
				}), /* @__PURE__ */ I(n, {
					className: o("size-5 shrink-0 text-[var(--oh-muted)] transition-transform duration-200 ease-out", s && "rotate-180"),
					"aria-hidden": !0
				})]
			})
		}), /* @__PURE__ */ I("div", {
			className: o("grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none", s ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
			children: /* @__PURE__ */ I("div", {
				className: "overflow-hidden",
				children: /* @__PURE__ */ L("div", {
					id: g,
					"data-testid": g,
					role: "region",
					"aria-labelledby": h,
					"aria-hidden": !s,
					inert: s ? void 0 : !0,
					className: o("flex flex-col gap-2 px-3 pb-3 transition-opacity duration-200 ease-out motion-reduce:transition-none", s ? "opacity-100" : "opacity-0"),
					children: [
						/* @__PURE__ */ I("p", {
							className: "leading-5",
							children: d
						}),
						l ? /* @__PURE__ */ L("div", { children: [/* @__PURE__ */ I("h5", {
							className: "font-medium text-white",
							children: a(t.BACKEND$REMOTE_CONNECTION_TITLE)
						}), /* @__PURE__ */ I("p", {
							className: "mt-1 leading-5",
							children: a(t.BACKEND$REMOTE_CONNECTION_DESCRIPTION)
						})] }) : /* @__PURE__ */ I("code", {
							className: "block break-words font-mono text-xs text-white",
							children: U
						}),
						/* @__PURE__ */ L("a", {
							href: f,
							target: "_blank",
							rel: "noopener noreferrer",
							"data-testid": `${m}-docs-link`,
							tabIndex: s ? void 0 : -1,
							className: "inline-flex w-fit items-center gap-1.5 text-primary hover:underline",
							children: [/* @__PURE__ */ I("span", { children: p }), /* @__PURE__ */ I(A, {
								className: "size-4 shrink-0",
								"aria-hidden": !0
							})]
						})
					]
				})
			})
		})]
	});
}
function oe({ onConnected: n, source: i }) {
	let { t: s } = e("openhands"), [c, l] = F.useState("cloud"), [u, d] = F.useState("local"), f = "add-backend-selected-panel", p = `add-backend-option-${c}-tab`, m = c === "cloud";
	return /* @__PURE__ */ L("div", {
		"data-testid": "add-backend-chooser",
		className: "flex flex-col",
		children: [/* @__PURE__ */ L("div", {
			role: "tablist",
			"aria-label": s(t.BACKEND$CHOOSER_TITLE),
			className: "grid grid-cols-2 overflow-hidden rounded-lg border border-[var(--oh-border)]",
			children: [/* @__PURE__ */ I($, {
				value: "cloud",
				selectedValue: c,
				title: s(t.BACKEND$CLOUD_TITLE),
				description: s(t.BACKEND$CLOUD_OPTION_DESCRIPTION),
				icon: /* @__PURE__ */ I(O, {
					width: 32,
					height: 32,
					"data-testid": "add-backend-option-cloud-logo"
				}),
				onSelect: l,
				panelId: f,
				testId: "add-backend-option-cloud"
			}), /* @__PURE__ */ I($, {
				value: "agent-server",
				selectedValue: c,
				title: s(t.BACKEND$AGENT_SERVER_TITLE),
				description: s(t.BACKEND$AGENT_SERVER_OPTION_DESCRIPTION),
				icon: /* @__PURE__ */ I(j, { className: "size-6" }),
				onSelect: l,
				panelId: f,
				testId: "add-backend-option-agent-server"
			})]
		}), /* @__PURE__ */ I("div", {
			className: "mt-6",
			children: /* @__PURE__ */ I(ie, { children: /* @__PURE__ */ I("section", {
				id: f,
				role: "tabpanel",
				"aria-labelledby": p,
				className: "min-w-0",
				children: m ? /* @__PURE__ */ I("div", {
					"data-testid": "add-backend-cloud-panel",
					className: o("relative isolate flex min-h-[13.5rem] w-full items-center justify-center rounded-xl border border-[var(--oh-border)] px-5 py-6", "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-xl", "before:bg-[radial-gradient(75%_75%_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_70%)]"),
					children: /* @__PURE__ */ I(Q, {
						onConnected: n,
						testIdRoot: "add-backend",
						analyticsSource: i,
						showBranding: !1
					})
				}) : /* @__PURE__ */ L("div", {
					"data-testid": "add-backend-agent-server-panel",
					className: "mx-auto w-full max-w-xl",
					children: [/* @__PURE__ */ L("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ I("span", {
								className: "h-px flex-1 bg-[var(--oh-border)]",
								"aria-hidden": !0
							}),
							/* @__PURE__ */ I(E, {
								value: u,
								options: [{
									value: "local",
									label: s(t.BACKEND$KIND_LOCAL),
									icon: /* @__PURE__ */ I(a, { "aria-hidden": !0 })
								}, {
									value: "remote",
									label: s(t.BACKEND$KIND_REMOTE),
									icon: /* @__PURE__ */ I(r, { "aria-hidden": !0 })
								}],
								onChange: d,
								ariaLabel: s(t.BACKEND$AGENT_SERVER_LOCATION),
								testId: "add-backend-location"
							}),
							/* @__PURE__ */ I("span", {
								className: "h-px flex-1 bg-[var(--oh-border)]",
								"aria-hidden": !0
							})
						]
					}), /* @__PURE__ */ L("div", {
						className: "mt-4 flex flex-col gap-4",
						children: [/* @__PURE__ */ I(ae, { location: u }, u), /* @__PURE__ */ I(re, {
							onConnected: n,
							testIdRoot: "add-backend",
							requireApiKey: u === "remote",
							submitLabel: s(t.BACKEND$CONNECT),
							submittingLabel: s(t.ONBOARDING$BACKEND_STATUS_CHECKING),
							fixedKind: "local",
							showKindSelector: !1
						})]
					})]
				})
			}) })
		})]
	});
}
function se({ onClose: e, source: t }) {
	let { addBackend: n } = g(), r = ne(), { trackBackendAdded: i } = _(), a = u(), o = F.useCallback((a, o, s) => {
		n(a), i({
			backendKind: a.kind,
			connectionMethod: o,
			hasApiKey: !!a.apiKey,
			source: t,
			agentServerVersion: s?.agentServerVersion
		}), r(), e();
	}, [
		n,
		r,
		e,
		i,
		t
	]);
	return a ? /* @__PURE__ */ I(Q, {
		onConnected: o,
		testIdRoot: "add-backend",
		lockedHost: a,
		analyticsSource: t
	}) : /* @__PURE__ */ I(oe, {
		onConnected: o,
		source: t
	});
}
function ce({ mode: n, backend: r, onClose: i, source: a = "add_backend_modal", hideCloseButton: s = !1 }) {
	let { t: c } = e("openhands");
	if (n === "add") return /* @__PURE__ */ I(v, {
		onClose: s ? void 0 : i,
		closeOnEscape: !1,
		closeOnBackdropClick: !s,
		"aria-label": c(t.BACKEND$ADD_TITLE),
		children: /* @__PURE__ */ L("div", {
			"data-testid": s ? "onboarding-modal" : "add-backend-modal",
			className: o("relative max-h-[92vh] w-[720px] overflow-y-auto rounded-xl border border-[var(--oh-border)] bg-base-secondary p-6", y),
			children: [
				s ? null : /* @__PURE__ */ I(C, {
					onClose: i,
					testId: "add-backend-close"
				}),
				s ? null : /* @__PURE__ */ L("div", {
					className: "pr-8",
					children: [/* @__PURE__ */ I("h2", {
						className: x,
						children: c(t.BACKEND$CHOOSER_TITLE)
					}), /* @__PURE__ */ L("p", {
						className: "mt-2 text-sm leading-6 text-[var(--oh-muted)]",
						"data-testid": "add-backend-description",
						children: [
							c(t.BACKEND$CHOOSER_DESCRIPTION),
							" ",
							/* @__PURE__ */ L("a", {
								href: K,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": c(t.BACKEND$DEPLOYMENT_OPTIONS),
								"data-testid": "add-backend-deployment-options-link",
								className: "text-primary hover:underline",
								children: [c(t.CTA$LEARN_MORE), /* @__PURE__ */ I(A, {
									className: "ml-1 inline size-3.5 align-[-0.125em]",
									"aria-hidden": !0
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ I("div", {
					className: s ? void 0 : "mt-5",
					children: /* @__PURE__ */ I(se, {
						onClose: i,
						source: a
					})
				})
			]
		})
	});
	let l = "edit-backend";
	return /* @__PURE__ */ I(v, {
		onClose: i,
		closeOnEscape: !1,
		"aria-label": c(t.BACKEND$EDIT_TITLE),
		children: /* @__PURE__ */ L("div", {
			"data-testid": `${l}-modal`,
			className: o("relative bg-base-secondary p-6 rounded-xl flex flex-col gap-4 border border-[var(--oh-border)]", b("md")),
			children: [
				/* @__PURE__ */ I(C, {
					onClose: i,
					testId: `${l}-close`
				}),
				/* @__PURE__ */ I("h2", {
					className: o("pr-6", x),
					children: c(t.BACKEND$EDIT_TITLE)
				}),
				/* @__PURE__ */ I(te, {
					mode: "edit",
					backend: r,
					onSubmitted: i,
					testIdRoot: l
				})
			]
		})
	});
}
//#endregion
export { ce as BackendFormModal };

//# sourceMappingURL=backend-form-modal.js.map