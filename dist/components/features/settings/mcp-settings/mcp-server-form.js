import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Trash2 as n } from "../../../../node_modules/lucide-react/dist/esm/icons/trash-2.js";
import { cn as r } from "../../../../utils/utils.js";
import { MCP_SERVER_NAME_PATTERN as i, isValidMcpServerName as a } from "../../../../utils/mcp-server-name.js";
import { formControlMultilineFieldClassName as o } from "../../../../utils/form-control-classes.js";
import { BrandButton as s } from "../brand-button.js";
import { OptionalTag as c } from "../optional-tag.js";
import { SettingsInput as l } from "../settings-input.js";
import { SettingsDropdownInput as u } from "../settings-dropdown-input.js";
import d from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/settings/mcp-settings/mcp-server-form.tsx
function h({ mode: h, server: g, existingServers: _, onSubmit: v, onCancel: y, onDelete: b, isActionDisabled: x = !1, onTest: S, isTestPending: C = !1, testMessage: w = null }) {
	let { t: T } = e("openhands"), [E, D] = d.useState(g?.type || "sse"), [O, k] = d.useState(() => g?.auth?.strategy === "oauth2" ? "oauth2" : g?.auth?.strategy === "header" ? "header" : g?.auth?.strategy === "bearer" || g?.auth?.strategy === "api_key" ? "bearer" : "none"), [A, j] = d.useState(() => g?.auth?.strategy === "oauth2" ? g.auth.authentication?.client_auth_method ?? "auto" : "auto"), [M, N] = d.useState(null), P = d.useRef(null), F = [
		{
			key: "sse",
			label: T(t.SETTINGS$MCP_SERVER_TYPE_SSE)
		},
		{
			key: "stdio",
			label: T(t.SETTINGS$MCP_SERVER_TYPE_STDIO)
		},
		{
			key: "shttp",
			label: T(t.SETTINGS$MCP_SERVER_TYPE_SHTTP)
		}
	], I = [
		{
			key: "none",
			label: T(t.SETTINGS$MCP_AUTH_MODE_NONE)
		},
		{
			key: "bearer",
			label: T(t.SETTINGS$MCP_AUTH_MODE_BEARER)
		},
		{
			key: "header",
			label: T(t.SETTINGS$MCP_AUTH_MODE_HEADER)
		},
		{
			key: "oauth2",
			label: T(t.SETTINGS$MCP_AUTH_MODE_OAUTH)
		}
	], ee = [
		{
			key: "auto",
			label: T(t.SETTINGS$MCP_OAUTH_CLIENT_AUTH_AUTO)
		},
		{
			key: "none",
			label: T(t.SETTINGS$MCP_OAUTH_CLIENT_AUTH_NONE)
		},
		{
			key: "client_secret_post",
			label: T(t.SETTINGS$MCP_OAUTH_CLIENT_AUTH_SECRET_POST)
		},
		{
			key: "client_secret_basic",
			label: T(t.SETTINGS$MCP_OAUTH_CLIENT_AUTH_SECRET_BASIC)
		},
		{
			key: "private_key_jwt",
			label: T(t.SETTINGS$MCP_OAUTH_CLIENT_AUTH_PRIVATE_KEY_JWT)
		}
	], L = (e) => {
		if (!e) return T(t.SETTINGS$MCP_ERROR_URL_REQUIRED);
		try {
			let n = new URL(e);
			if (!["http:", "https:"].includes(n.protocol)) return T(t.SETTINGS$MCP_ERROR_URL_INVALID_PROTOCOL);
		} catch {
			return T(t.SETTINGS$MCP_ERROR_URL_INVALID);
		}
		return null;
	}, R = (e) => e ? a(e) ? null : T(t.SETTINGS$MCP_ERROR_NAME_INVALID) : T(t.SETTINGS$MCP_ERROR_NAME_REQUIRED), z = (e) => !_ || !(h === "add" || h === "edit" && g?.name !== e) ? null : _.filter((e) => e.type === "stdio").map((e) => e.name).filter(Boolean).includes(e) ? T(t.SETTINGS$MCP_ERROR_NAME_DUPLICATE) : null, B = (e) => e ? e.includes(" ") ? T(t.SETTINGS$MCP_ERROR_COMMAND_NO_SPACES) : null : T(t.SETTINGS$MCP_ERROR_COMMAND_REQUIRED), V = (e) => {
		if (!_) return null;
		let n = g?.url;
		return (h === "add" || h === "edit" && n !== e) && _.some((t) => (t.type === "sse" || t.type === "shttp") && t.url === e) ? T(t.SETTINGS$MCP_ERROR_URL_DUPLICATE) : null;
	}, H = (e) => {
		if (!e.trim()) return null;
		let n = e.split("\n");
		for (let e = 0; e < n.length; e += 1) {
			let r = n[e].trim();
			if (r) {
				let e = r.indexOf("=");
				if (e === -1 || !r.substring(0, e).trim()) return T(t.SETTINGS$MCP_ERROR_ENV_INVALID_FORMAT);
			}
		}
		return null;
	}, U = (e) => {
		if (O === "header") {
			let n = e.get("headers")?.toString() || "";
			return n.trim() ? H(n) : T(t.SETTINGS$MCP_ERROR_HEADER_REQUIRED);
		}
		if (O === "oauth2") {
			let n = e.get("oauth_client_id")?.toString().trim();
			if (e.get("oauth_client_secret")?.toString().trim() && !n) return T(t.SETTINGS$MCP_ERROR_OAUTH_SECRET_REQUIRES_ID);
		}
		return null;
	}, W = (e) => {
		if (!e.trim()) return null;
		let n = parseInt(e.trim(), 10);
		return Number.isNaN(n) ? T(t.SETTINGS$MCP_ERROR_TIMEOUT_INVALID_NUMBER) : n <= 0 ? T(t.SETTINGS$MCP_ERROR_TIMEOUT_POSITIVE) : n > 3600 ? T(t.SETTINGS$MCP_ERROR_TIMEOUT_MAX_EXCEEDED) : null;
	}, G = (e) => {
		let t = e.get("name")?.toString().trim() || "", n = e.get("command")?.toString().trim() || "", r = e.get("env")?.toString() || "";
		return R(t) || z(t) || B(n) || H(r) || null;
	}, K = (e) => {
		if (E === "sse" || E === "shttp") {
			let n = e.get("url")?.toString().trim() || "", r = L(n);
			if (r) return r;
			let i = V(n);
			if (i) return i;
			let o = e.get("name")?.toString().trim() || "";
			if (o && !a(o)) return T(t.SETTINGS$MCP_ERROR_NAME_INVALID);
			if (E === "shttp") {
				let t = W(e.get("timeout")?.toString() || "");
				if (t) return t;
			}
			return U(e);
		}
		return E === "stdio" ? G(e) : null;
	}, q = (e) => {
		let t = {}, n = e.trim();
		if (!n) return t;
		for (let e of n.split("\n")) {
			let n = e.trim(), r = n.indexOf("="), i = r >= 0 ? n.substring(0, r).trim() : "";
			n && r !== -1 && i && (t[i] = n.substring(r + 1).trim());
		}
		return t;
	}, J = (e) => e ? Object.entries(e).map(([e, t]) => `${e}=${t}`).join("\n") : "", Y = (e) => e?.strategy === "bearer" || e?.strategy === "api_key" ? e.value ?? "" : "", X = (e) => e?.strategy === "header" ? J(e.headers) : "", Z = g?.auth?.strategy === "oauth2" ? g.auth.authentication : void 0, Q = g?.auth?.strategy === "oauth2" ? g.auth.state : void 0, te = (e) => {
		if (O === "none") return;
		if (O === "bearer") {
			let t = e.get("api_key")?.toString().trim();
			return t ? g?.auth?.strategy === "api_key" ? {
				...g.auth,
				value: t
			} : {
				strategy: "bearer",
				value: t
			} : void 0;
		}
		if (O === "header") return {
			strategy: "header",
			headers: q(e.get("headers")?.toString() || "")
		};
		let t = e.get("oauth_scopes")?.toString().trim(), n = e.get("oauth_client_id")?.toString().trim(), r = e.get("oauth_client_secret")?.toString().trim();
		return {
			strategy: "oauth2",
			authentication: {
				type: "oauth",
				...A !== "auto" && { client_auth_method: A },
				...t && { scopes: t },
				...n && { client_id: n },
				...r && { client_secret: r }
			},
			...Q && { state: Q }
		};
	}, $ = (e) => {
		let t = {
			id: g?.id || "",
			type: E,
			...g?.enabled === !1 && { enabled: !1 }
		};
		if (E === "sse" || E === "shttp") {
			let n = e.get("name")?.toString().trim(), r = e.get("url")?.toString().trim(), i = e.get("timeout")?.toString().trim(), a = te(e), o = {
				...t,
				...n && { name: n },
				url: r,
				...g?.headers && { headers: g.headers },
				...a && { auth: a }
			};
			if (E === "shttp" && i) {
				let e = parseInt(i, 10);
				Number.isNaN(e) || (o.timeout = e);
			}
			return o;
		}
		let n = e.get("name")?.toString().trim(), r = e.get("command")?.toString().trim(), i = e.get("args")?.toString().trim(), a = e.get("env")?.toString().trim(), o = i ? i.split("\n").map((e) => e.trim()).filter(Boolean) : [], s = q(a || "");
		return {
			...t,
			name: n,
			command: r,
			...o.length > 0 && { args: o },
			...Object.keys(s).length > 0 && { env: s }
		};
	};
	return /* @__PURE__ */ m("form", {
		ref: P,
		"data-testid": h === "add" ? "add-mcp-server-form" : "edit-mcp-server-form",
		onSubmit: (e) => {
			e.preventDefault(), N(null);
			let t = new FormData(e.currentTarget), n = K(t);
			if (n) {
				N(n);
				return;
			}
			v($(t));
		},
		className: "flex flex-col items-start gap-6",
		noValidate: !0,
		children: [
			h === "add" && /* @__PURE__ */ p(u, {
				testId: "server-type-dropdown",
				name: "server-type",
				label: T(t.SETTINGS$MCP_SERVER_TYPE),
				items: F,
				selectedKey: E,
				onSelectionChange: (e) => D(e),
				onInputChange: () => {},
				isClearable: !1,
				allowsCustomValue: !1,
				required: !0,
				wrapperClassName: "w-full min-w-0"
			}),
			M && /* @__PURE__ */ p("p", {
				className: "text-red-500 text-sm",
				children: M
			}),
			(E === "sse" || E === "shttp") && /* @__PURE__ */ m(f, { children: [
				/* @__PURE__ */ p(l, {
					testId: "server-name-input",
					name: "name",
					type: "text",
					label: T(t.SETTINGS$MCP_SERVER_NAME),
					className: "w-full min-w-0",
					showOptionalTag: !0,
					defaultValue: g?.name || "",
					placeholder: "my_search_server",
					pattern: i.source
				}),
				/* @__PURE__ */ p(l, {
					testId: "url-input",
					name: "url",
					type: "url",
					label: T(t.SETTINGS$MCP_URL),
					className: "w-full min-w-0",
					required: !0,
					defaultValue: g?.url || "",
					placeholder: "https://api.example.com"
				}),
				/* @__PURE__ */ p(u, {
					testId: "auth-mode-dropdown",
					name: "auth-mode",
					label: T(t.SETTINGS$MCP_AUTHENTICATION),
					items: I,
					selectedKey: O,
					onSelectionChange: (e) => k(e),
					onInputChange: () => {},
					isClearable: !1,
					allowsCustomValue: !1,
					wrapperClassName: "w-full min-w-0"
				}),
				O === "bearer" && /* @__PURE__ */ p(l, {
					testId: "api-key-input",
					name: "api_key",
					type: "password",
					label: T(t.SETTINGS$MCP_API_KEY),
					className: "w-full min-w-0",
					required: !0,
					defaultValue: Y(g?.auth),
					placeholder: T(t.SETTINGS$MCP_API_KEY_PLACEHOLDER)
				}),
				O === "header" && /* @__PURE__ */ m("label", {
					className: "flex flex-col gap-2.5 w-full min-w-0",
					children: [/* @__PURE__ */ p("span", {
						className: "text-sm",
						children: T(t.SETTINGS$MCP_HEADERS)
					}), /* @__PURE__ */ p("textarea", {
						"data-testid": "headers-input",
						name: "headers",
						rows: 4,
						defaultValue: X(g?.auth),
						placeholder: T(t.SETTINGS$MCP_HEADERS_PLACEHOLDER),
						className: r(o, "resize-none placeholder:italic", "disabled:bg-[var(--oh-surface-raised)] disabled:border-[var(--oh-border-subtle)]")
					})]
				}),
				O === "oauth2" && /* @__PURE__ */ m(f, { children: [
					/* @__PURE__ */ p(u, {
						testId: "oauth-client-auth-method-dropdown",
						name: "oauth_client_auth_method",
						label: T(t.SETTINGS$MCP_OAUTH_CLIENT_AUTH),
						items: ee,
						selectedKey: A,
						onSelectionChange: (e) => j(e),
						onInputChange: () => {},
						isClearable: !1,
						allowsCustomValue: !1,
						wrapperClassName: "w-full min-w-0"
					}),
					/* @__PURE__ */ p(l, {
						testId: "oauth-client-id-input",
						name: "oauth_client_id",
						type: "text",
						label: T(t.SETTINGS$MCP_OAUTH_CLIENT_ID),
						className: "w-full min-w-0",
						showOptionalTag: !0,
						defaultValue: Z?.client_id || "",
						placeholder: T(t.SETTINGS$MCP_OAUTH_CLIENT_ID_PLACEHOLDER)
					}),
					/* @__PURE__ */ p(l, {
						testId: "oauth-client-secret-input",
						name: "oauth_client_secret",
						type: "password",
						label: T(t.SETTINGS$MCP_OAUTH_CLIENT_SECRET),
						className: "w-full min-w-0",
						showOptionalTag: !0,
						defaultValue: Z?.client_secret || "",
						placeholder: T(t.SETTINGS$MCP_OAUTH_CLIENT_SECRET_PLACEHOLDER)
					}),
					/* @__PURE__ */ p(l, {
						testId: "oauth-scopes-input",
						name: "oauth_scopes",
						type: "text",
						label: T(t.SETTINGS$MCP_OAUTH_SCOPES),
						className: "w-full min-w-0",
						showOptionalTag: !0,
						defaultValue: Array.isArray(Z?.scopes) ? Z.scopes.join(" ") : Z?.scopes || "",
						placeholder: T(t.SETTINGS$MCP_OAUTH_SCOPES_PLACEHOLDER)
					})
				] }),
				E === "shttp" && /* @__PURE__ */ p(l, {
					testId: "timeout-input",
					name: "timeout",
					type: "number",
					label: T(t.SETTINGS$MCP_TIMEOUT_LABEL),
					className: "w-full min-w-0",
					showOptionalTag: !0,
					defaultValue: g?.timeout?.toString() || "",
					placeholder: "60",
					min: 1,
					max: 3600
				})
			] }),
			E === "stdio" && /* @__PURE__ */ m(f, { children: [
				/* @__PURE__ */ p(l, {
					testId: "name-input",
					name: "name",
					type: "text",
					label: T(t.SETTINGS$MCP_NAME),
					className: "w-full min-w-0",
					required: !0,
					defaultValue: g?.name || "",
					placeholder: "my_mcp_server",
					pattern: i.source
				}),
				/* @__PURE__ */ p(l, {
					testId: "command-input",
					name: "command",
					type: "text",
					label: T(t.SETTINGS$MCP_COMMAND),
					className: "w-full min-w-0",
					required: !0,
					defaultValue: g?.command || "",
					placeholder: "npx"
				}),
				/* @__PURE__ */ m("label", {
					className: "flex flex-col gap-2.5 w-full min-w-0",
					children: [
						/* @__PURE__ */ m("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ p("span", {
								className: "text-sm",
								children: T(t.SETTINGS$MCP_COMMAND_ARGUMENTS)
							}), /* @__PURE__ */ p(c, {})]
						}),
						/* @__PURE__ */ p("textarea", {
							"data-testid": "args-input",
							name: "args",
							rows: 3,
							defaultValue: g?.args?.join("\n") || "",
							placeholder: "arg1\narg2\narg3",
							className: r(o, "resize-none placeholder:italic", "disabled:bg-[var(--oh-surface-raised)] disabled:border-[var(--oh-border-subtle)]")
						}),
						/* @__PURE__ */ p("p", {
							className: "text-xs text-tertiary-alt",
							children: T(t.SETTINGS$MCP_COMMAND_ARGUMENTS_HELP)
						})
					]
				}),
				/* @__PURE__ */ m("label", {
					className: "flex flex-col gap-2.5 w-full min-w-0",
					children: [/* @__PURE__ */ m("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ p("span", {
							className: "text-sm",
							children: T(t.SETTINGS$MCP_ENVIRONMENT_VARIABLES)
						}), /* @__PURE__ */ p(c, {})]
					}), /* @__PURE__ */ p("textarea", {
						"data-testid": "env-input",
						name: "env",
						rows: 4,
						defaultValue: J(g?.env),
						placeholder: "KEY1=value1\nKEY2=value2",
						className: r(o, "resize-none placeholder:italic", "disabled:bg-[var(--oh-surface-raised)] disabled:border-[var(--oh-border-subtle)]")
					})]
				})
			] }),
			w && /* @__PURE__ */ p("p", {
				"data-testid": "mcp-test-message",
				className: w.ok ? "text-sm text-green-500 whitespace-pre-wrap" : "text-sm text-red-500 whitespace-pre-wrap",
				children: w.text
			}),
			/* @__PURE__ */ m("div", {
				className: r("flex w-full items-center gap-2", b ? "justify-between" : "justify-end"),
				children: [b ? /* @__PURE__ */ p(s, {
					testId: "mcp-custom-editor-delete",
					type: "button",
					variant: "secondary",
					onClick: b,
					isDisabled: x,
					startContent: /* @__PURE__ */ p(n, {
						"aria-hidden": !0,
						className: "size-4",
						strokeWidth: 2
					}),
					children: T(t.BUTTON$DELETE)
				}) : null, /* @__PURE__ */ m("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ p(s, {
							testId: "cancel-button",
							type: "button",
							variant: "secondary",
							onClick: y,
							isDisabled: x,
							children: T(t.BUTTON$CANCEL)
						}),
						S && /* @__PURE__ */ p(s, {
							testId: "mcp-test-connection",
							type: "button",
							variant: "secondary",
							onClick: () => {
								if (!S || !P.current) return;
								N(null);
								let e = new FormData(P.current), t = K(e);
								if (t) {
									N(t);
									return;
								}
								S($(e));
							},
							isDisabled: x || C,
							children: T(C ? t.MCP$VERIFYING : t.MCP$TEST_BUTTON)
						}),
						/* @__PURE__ */ m(s, {
							testId: "submit-button",
							type: "submit",
							variant: "primary",
							isDisabled: x || C,
							children: [h === "add" && T(t.SETTINGS$MCP_ADD_SERVER), h === "edit" && T(t.SETTINGS$MCP_SAVE_SERVER)]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { h as MCPServerForm };

//# sourceMappingURL=mcp-server-form.js.map