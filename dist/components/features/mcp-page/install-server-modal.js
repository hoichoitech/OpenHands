import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { retrieveAxiosErrorMessage as n } from "../../../utils/retrieve-axios-error-message.js";
import { displaySuccessToast as r } from "../../../utils/custom-toast-handlers.js";
import { useActiveBackend as i } from "../../../contexts/active-backend-context.js";
import { toMcpServerName as a } from "../../../utils/mcp-server-name.js";
import { ModalBackdrop as o } from "../../shared/modals/modal-backdrop.js";
import { modalTitleLgClassName as s } from "../../../utils/modal-classes.js";
import { ModalCloseButton as c } from "../../shared/modals/modal-close-button.js";
import { BrandButton as l } from "../settings/brand-button.js";
import { McpLogoBadge as u } from "../mcp-logo-badge.js";
import { getInstallableMcpConnectionOption as d, getMcpOAuthAuthenticationConfig as ee } from "../../../utils/mcp-marketplace-utils.js";
import { SettingsInput as f } from "../settings/settings-input.js";
import { SaveAsSecretToggle as p } from "./save-as-secret-toggle.js";
import m from "../../../api/mcp-service/mcp-service.api.js";
import { seedMcpServerHealth as h } from "../../../api/mcp-health/probe-mcp-server-health.js";
import { useAddMcpServer as te } from "../../../hooks/mutation/use-add-mcp-server.js";
import { useTestMcpServer as ne } from "../../../hooks/mutation/use-test-mcp-server.js";
import { useSaveFieldsAsSecrets as re } from "../../../hooks/mutation/use-save-fields-as-secrets.js";
import { makeMcpTestErrorMessage as g } from "../../../utils/mcp-test-error-message.js";
import _ from "react";
import { Fragment as v, jsx as y, jsxs as b } from "react/jsx-runtime";
//#region src/components/features/mcp-page/install-server-modal.tsx
function x(e) {
	let t = /\[([^\]]+)\]\(([^)]+)\)/g, n = [], r = 0;
	for (let i of e.matchAll(t)) i.index > r && n.push(e.slice(r, i.index)), n.push(/* @__PURE__ */ y("a", {
		href: /^https?:\/\//i.test(i[2]) ? i[2] : "#",
		target: "_blank",
		rel: "noreferrer",
		className: "underline hover:text-white transition-colors",
		children: i[1]
	}, i.index)), r = i.index + i[0].length;
	return r < e.length && n.push(e.slice(r)), n;
}
function S(e) {
	return e?.transport.kind !== "shttp" && e?.transport.kind !== "sse" ? !1 : ["api_key", "bearer"].includes(e.auth.strategy);
}
function C(e) {
	return !!e && e.auth.strategy === "oauth2";
}
function w(e) {
	return e.transport.kind === "stdio" ? e.auth.apiKeyOptional ?? !1 : e.auth.apiKeyOptional ?? e.transport.apiKeyOptional ?? !1;
}
function T(e) {
	return e?.transport.kind !== "shttp" && e?.transport.kind !== "sse" ? [] : e.transport.headerFields ?? [];
}
function ie(e) {
	let t = {}, n = {}, r = d(e), i = r?.transport;
	if (i?.kind === "stdio") {
		for (let e of i.envFields ?? []) t[e.key] = "", n[e.key] = e.type === "password";
		for (let e of i.argFields ?? []) t[e.key] = "";
	} else if (i?.kind === "shttp" || i?.kind === "sse") {
		t.url = i.url;
		for (let e of T(r)) t[e.key] = "", n[e.key] = e.type === "password";
		S(r) && (t.api_key = "", r?.auth.credentialSecretName && (n.api_key = r.auth.saveCredentialAsSecretByDefault ?? !1));
	}
	return {
		values: t,
		errors: {},
		savedAsSecret: n
	};
}
function E({ entry: E, existingServers: D, onClose: O, onSuccess: k }) {
	let { t: A } = e("openhands"), { mutate: j, isPending: M } = te(), { mutate: N, isPending: P } = ne(), F = re(), { backend: I } = i(), L = I.kind === "cloud", [R, z] = _.useState(() => ie(E)), B = _.useRef(R);
	B.current = R;
	let [V, H] = _.useState(null), [U, W] = _.useState(!1), [G, K] = _.useState(!1), q = d(E), J = q?.transport, Y = P || G || M || U, X = (e, t) => {
		z((n) => ({
			...n,
			values: {
				...n.values,
				[e]: t
			},
			errors: {
				...n.errors,
				[e]: null
			}
		})), H(null);
	}, Z = (e, t) => {
		z((n) => ({
			...n,
			savedAsSecret: {
				...n.savedAsSecret,
				[e]: t
			}
		}));
	}, ae = () => {
		let e = q?.auth.credentialSecretName, t = B.current.values.api_key?.trim();
		return !e || !t || !B.current.savedAsSecret.api_key ? Promise.resolve() : F([{
			key: e,
			label: q.auth.credentialLabel ?? e,
			type: "password",
			required: !0
		}], { [e]: t }, { [e]: !0 });
	}, Q = () => J?.kind === "stdio" ? F(J.envFields ?? [], B.current.values, B.current.savedAsSecret) : J?.kind === "shttp" || J?.kind === "sse" ? Promise.all([ae(), F(T(q), B.current.values, B.current.savedAsSecret)]).then(() => void 0) : Promise.resolve(), $ = (e) => {
		if (e.auth?.strategy === "oauth2") {
			K(!0), m.authorizeOAuth(e).then((i) => {
				if (!i.ok) {
					H(g(A, i.error_kind, i.error));
					return;
				}
				let a = i.oauth_state ? {
					...e,
					auth: {
						...e.auth,
						state: i.oauth_state
					}
				} : e;
				j(a, {
					onSuccess: () => {
						L || h(a, i, D), r(A(t.MCP$INSTALL_SUCCESS)), W(!0), (async () => {
							try {
								await Q();
							} finally {
								k?.(E), O();
							}
						})();
					},
					onError: (e) => {
						H(n(e) || A(t.ERROR$GENERIC));
					}
				});
			}).catch((e) => {
				H(n(e) || A(t.ERROR$GENERIC));
			}).finally(() => K(!1));
			return;
		}
		N(e, {
			onSuccess: (i) => {
				if (!i.ok) {
					H(g(A, i.error_kind, i.error));
					return;
				}
				let a = i.oauth_state && e.auth?.strategy === "oauth2" ? {
					...e,
					auth: {
						...e.auth,
						state: i.oauth_state
					}
				} : e;
				j(a, {
					onSuccess: () => {
						L || h(a, i, D), r(A(t.MCP$INSTALL_SUCCESS)), W(!0), (async () => {
							try {
								await Q();
							} finally {
								k?.(E), O();
							}
						})();
					},
					onError: (e) => {
						H(n(e) || A(t.ERROR$GENERIC));
					}
				});
			},
			onError: (e) => {
				H(n(e) || A(t.ERROR$GENERIC));
			}
		});
	}, oe = () => {
		if (J?.kind !== "shttp" && J?.kind !== "sse" || !q) return;
		let e = R.values.api_key?.trim() ?? "", n = J.urlEditable ? R.values.url?.trim() ?? "" : J.url, r = C(q), i = S(q), o = T(q), s = {};
		if (!n) s.url = A(t.SETTINGS$MCP_ERROR_URL_REQUIRED);
		else try {
			let e = new URL(n);
			["http:", "https:"].includes(e.protocol) || (s.url = A(t.SETTINGS$MCP_ERROR_URL_INVALID_PROTOCOL));
		} catch {
			s.url = A(t.SETTINGS$MCP_ERROR_URL_INVALID);
		}
		for (let e of o) e.required && !(R.values[e.key] ?? "").trim() && (s[e.key] = A(t.MCP$ERROR_FIELD_REQUIRED));
		if (!r && i && !w(q) && !e && (s.api_key = A(t.MCP$ERROR_FIELD_REQUIRED)), Object.values(s).some(Boolean)) {
			z((e) => ({
				...e,
				errors: s
			}));
			return;
		}
		let c = r ? ee(q) : void 0, l = Object.fromEntries(o.map((e) => [e.key, R.values[e.key]?.trim() ?? ""]).filter(([, e]) => e)), u = Object.keys(l).length > 0, d;
		r ? d = {
			strategy: "oauth2",
			...c && { authentication: c }
		} : i && e ? d = q.auth.strategy === "api_key" ? {
			strategy: "api_key",
			value: e,
			...q.auth.apiKeyHeaderName && { header_name: q.auth.apiKeyHeaderName }
		} : {
			strategy: "bearer",
			value: e
		} : u && (d = {
			strategy: "header",
			headers: l
		}), $({
			id: "",
			type: J.kind,
			name: a(E.id),
			url: n,
			...d && { auth: d },
			...u && d?.strategy !== "header" && { headers: l }
		});
	}, se = () => {
		if (J?.kind !== "stdio") return;
		let e = J, n = {};
		for (let r of e.envFields ?? []) r.required && !(R.values[r.key] ?? "").trim() && (n[r.key] = A(t.MCP$ERROR_FIELD_REQUIRED));
		for (let r of e.argFields ?? []) r.required && !(R.values[r.key] ?? "").trim() && (n[r.key] = A(t.MCP$ERROR_FIELD_REQUIRED));
		if (Object.values(n).some(Boolean)) {
			z((e) => ({
				...e,
				errors: n
			}));
			return;
		}
		let r = {};
		for (let t of e.envFields ?? []) {
			let e = R.values[t.key]?.trim();
			e && (r[t.key] = e);
		}
		let i = [];
		for (let t of e.argFields ?? []) {
			let e = R.values[t.key]?.trim();
			if (e) for (let t of e.split(/\s+/)) t && i.push(t);
		}
		$({
			id: "",
			type: "stdio",
			name: e.serverName,
			command: e.command,
			args: [...e.args, ...i],
			...Object.keys(r).length > 0 && { env: r }
		});
	};
	return /* @__PURE__ */ y(o, {
		onClose: O,
		"aria-label": E.name,
		children: /* @__PURE__ */ b("form", {
			"data-testid": "mcp-install-modal",
			"data-marketplace-id": E.id,
			onSubmit: (e) => (e.preventDefault(), H(null), J?.kind === "shttp" || J?.kind === "sse" ? oe() : se()),
			className: "relative bg-base-secondary p-6 rounded-xl flex flex-col gap-4 border border-[var(--oh-border)] w-[520px] max-w-[90vw] max-h-[85vh] overflow-y-auto custom-scrollbar",
			children: [
				/* @__PURE__ */ y(c, {
					onClose: O,
					testId: "mcp-install-modal-close",
					disabled: Y
				}),
				/* @__PURE__ */ b("div", {
					className: "flex items-start gap-3 pr-6",
					children: [/* @__PURE__ */ y(u, { entry: E }), /* @__PURE__ */ b("div", {
						className: "flex flex-col flex-1",
						children: [/* @__PURE__ */ y("h2", {
							className: s,
							children: E.name
						}), /* @__PURE__ */ y("p", {
							className: "text-xs text-tertiary-light",
							children: E.description
						})]
					})]
				}),
				E.installHint && /* @__PURE__ */ y("p", {
					className: "text-xs text-tertiary-light",
					children: E.installHint
				}),
				E.docsUrl && /* @__PURE__ */ y("a", {
					href: E.docsUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "text-xs text-[var(--oh-muted)] hover:text-white hover:underline self-start transition-colors",
					children: A(t.MCP$VIEW_DOCS)
				}),
				/* @__PURE__ */ y("div", {
					className: "flex flex-col gap-3",
					children: (() => {
						if (J?.kind === "shttp" || J?.kind === "sse") {
							let e = C(q), n = S(q), r = q ? w(q) : !1, i = q?.auth.credentialSecretName, a = T(q);
							return /* @__PURE__ */ b(v, { children: [
								/* @__PURE__ */ y(f, {
									testId: "mcp-install-field-url",
									name: "url",
									type: "url",
									label: A(t.SETTINGS$MCP_URL),
									value: R.values.url ?? J.url,
									onChange: (e) => X("url", e),
									isDisabled: !J.urlEditable,
									className: "w-full"
								}),
								R.errors.url && /* @__PURE__ */ y("p", {
									className: "text-xs text-red-500",
									children: R.errors.url
								}),
								a.map((e) => /* @__PURE__ */ b("div", {
									className: "flex flex-col gap-1",
									children: [
										/* @__PURE__ */ y(f, {
											testId: `mcp-install-field-${e.key}`,
											name: e.key,
											type: e.type === "password" ? "password" : "text",
											label: e.label,
											value: R.values[e.key] ?? "",
											onChange: (t) => X(e.key, t),
											placeholder: e.placeholder,
											required: e.required,
											showOptionalTag: !e.required,
											className: "w-full"
										}),
										e.helperText && /* @__PURE__ */ y("p", {
											className: "text-xs text-tertiary-alt",
											children: x(e.helperText)
										}),
										R.errors[e.key] && /* @__PURE__ */ y("p", {
											className: "text-xs text-red-500",
											children: R.errors[e.key]
										}),
										e.key in R.savedAsSecret && /* @__PURE__ */ y(p, {
											fieldKey: e.key,
											checked: R.savedAsSecret[e.key] ?? !1,
											onToggle: (t) => Z(e.key, t)
										})
									]
								}, e.key)),
								e ? /* @__PURE__ */ b("div", {
									"data-testid": "mcp-install-oauth-info",
									className: "flex flex-col gap-2 p-3 rounded-lg border border-[var(--oh-border)] bg-base-tertiary",
									children: [/* @__PURE__ */ y("p", {
										className: "text-sm text-secondary-light",
										children: A(t.MCP$OAUTH_CONNECT_INFO)
									}), /* @__PURE__ */ y("p", {
										className: "text-xs text-tertiary-alt",
										children: A(t.MCP$OAUTH_CONNECT_HINT)
									})]
								}) : n ? /* @__PURE__ */ b("div", {
									className: "flex flex-col gap-1",
									children: [
										/* @__PURE__ */ y(f, {
											testId: "mcp-install-field-api_key",
											name: "api_key",
											type: "password",
											label: q?.auth.credentialLabel ?? A(t.SETTINGS$MCP_API_KEY),
											value: R.values.api_key ?? "",
											onChange: (e) => X("api_key", e),
											placeholder: q?.auth.credentialPlaceholder ?? A(t.SETTINGS$MCP_API_KEY_PLACEHOLDER),
											showOptionalTag: r,
											required: !r,
											className: "w-full"
										}),
										q?.auth.credentialHelp && /* @__PURE__ */ y("p", {
											className: "text-xs text-tertiary-alt",
											children: x(q.auth.credentialHelp)
										}),
										R.errors.api_key && /* @__PURE__ */ y("p", {
											className: "text-xs text-red-500",
											children: R.errors.api_key
										}),
										i && /* @__PURE__ */ y(p, {
											fieldKey: i,
											checked: R.savedAsSecret.api_key ?? !1,
											onToggle: (e) => Z("api_key", e)
										})
									]
								}) : null
							] });
						}
						if (J?.kind !== "stdio") return null;
						let e = J;
						return /* @__PURE__ */ b(v, { children: [
							/* @__PURE__ */ y(f, {
								testId: "mcp-install-field-command-readonly",
								name: "command-readonly",
								type: "text",
								label: A(t.MCP$COMMAND_LABEL),
								value: `${e.command} ${e.args.join(" ")}`.trim(),
								onChange: () => {},
								isDisabled: !0,
								className: "w-full"
							}),
							(e.envFields ?? []).map((e) => /* @__PURE__ */ b("div", {
								className: "flex flex-col gap-1",
								children: [
									/* @__PURE__ */ y(f, {
										testId: `mcp-install-field-${e.key}`,
										name: e.key,
										type: e.type === "password" ? "password" : "text",
										label: e.label,
										value: R.values[e.key] ?? "",
										onChange: (t) => X(e.key, t),
										placeholder: e.placeholder,
										required: e.required,
										showOptionalTag: !e.required,
										className: "w-full"
									}),
									e.helperText && /* @__PURE__ */ y("p", {
										className: "text-xs text-tertiary-alt",
										children: x(e.helperText)
									}),
									R.errors[e.key] && /* @__PURE__ */ y("p", {
										className: "text-xs text-red-500",
										children: R.errors[e.key]
									}),
									e.key in R.savedAsSecret && /* @__PURE__ */ y(p, {
										fieldKey: e.key,
										checked: R.savedAsSecret[e.key],
										onToggle: (t) => Z(e.key, t)
									})
								]
							}, e.key)),
							(e.argFields ?? []).map((e) => /* @__PURE__ */ b("div", {
								className: "flex flex-col gap-1",
								children: [
									/* @__PURE__ */ y(f, {
										testId: `mcp-install-field-${e.key}`,
										name: e.key,
										type: e.type === "password" ? "password" : "text",
										label: e.label,
										value: R.values[e.key] ?? "",
										onChange: (t) => X(e.key, t),
										placeholder: e.placeholder,
										required: e.required,
										showOptionalTag: !e.required,
										className: "w-full"
									}),
									e.helperText && /* @__PURE__ */ y("p", {
										className: "text-xs text-tertiary-alt",
										children: x(e.helperText)
									}),
									R.errors[e.key] && /* @__PURE__ */ y("p", {
										className: "text-xs text-red-500",
										children: R.errors[e.key]
									})
								]
							}, e.key))
						] });
					})()
				}),
				V && /* @__PURE__ */ y("p", {
					"data-testid": "mcp-install-modal-error",
					className: "text-sm text-red-500 whitespace-pre-wrap",
					children: V
				}),
				/* @__PURE__ */ b("div", {
					className: "flex justify-end gap-2 mt-2",
					children: [/* @__PURE__ */ y(l, {
						type: "button",
						variant: "secondary",
						onClick: O,
						testId: "mcp-install-cancel",
						isDisabled: Y,
						children: A(t.BUTTON$CANCEL)
					}), /* @__PURE__ */ y(l, {
						type: "submit",
						variant: "primary",
						isDisabled: Y,
						testId: "mcp-install-submit",
						children: A(P || G ? t.MCP$VERIFYING : M || U ? t.SETTINGS$SAVING : t.MCP$INSTALL_BUTTON)
					})]
				})
			]
		})
	});
}
//#endregion
export { E as InstallServerModal };

//# sourceMappingURL=install-server-modal.js.map