import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { retrieveAxiosErrorMessage as r } from "../../../utils/retrieve-axios-error-message.js";
import { displayErrorToast as i, displaySuccessToast as a } from "../../../utils/custom-toast-handlers.js";
import { useActiveBackend as o } from "../../../contexts/active-backend-context.js";
import "../../../utils/mcp-config.js";
import { ModalBackdrop as s } from "../../shared/modals/modal-backdrop.js";
import { modalTitleLgClassName as c } from "../../../utils/modal-classes.js";
import { ModalCloseButton as l } from "../../shared/modals/modal-close-button.js";
import u from "../../../api/mcp-service/mcp-service.api.js";
import { seedMcpServerHealth as d } from "../../../api/mcp-health/probe-mcp-server-health.js";
import { useAddMcpServer as f } from "../../../hooks/mutation/use-add-mcp-server.js";
import { useTestMcpServer as p } from "../../../hooks/mutation/use-test-mcp-server.js";
import { makeMcpTestErrorMessage as m } from "../../../utils/mcp-test-error-message.js";
import { ConfirmationModal as h } from "../../shared/modals/confirmation-modal.js";
import { useDeleteMcpServer as g } from "../../../hooks/mutation/use-delete-mcp-server.js";
import { useUpdateMcpServer as _ } from "../../../hooks/mutation/use-update-mcp-server.js";
import { MCPServerForm as v } from "../settings/mcp-settings/mcp-server-form.js";
import y from "react";
import { Fragment as b, jsx as x, jsxs as S } from "react/jsx-runtime";
//#region src/components/features/mcp-page/custom-server-editor.tsx
function C({ server: C, existingServers: w, onClose: T }) {
	let { t: E } = e("openhands"), { mutate: D, isPending: O } = f(), { mutate: k, isPending: A } = _(), { mutate: j, isPending: M } = g(), { mutate: N, isPending: P, data: F, reset: I } = p(), [L, R] = y.useState(!1), [z, B] = y.useState(null), [V, H] = y.useState(!1), { backend: U } = o(), W = U.kind === "cloud", G = !!C.id, K = O || A || M, q = K || P || V || L, J = y.useMemo(() => {
		let e = z ?? F;
		return e ? e.ok ? {
			ok: !0,
			text: E(t.MCP$TEST_SUCCESS, { count: e.tools.length })
		} : {
			ok: !1,
			text: m(E, e.error_kind, e.error)
		} : null;
	}, [
		z,
		F,
		E
	]), Y = (e, t) => {
		W || d(e, t, G ? w.filter((e) => e.id !== C.id) : w);
	}, X = (e) => {
		if (e instanceof Error && e.message === "Replace or clear the stored credential before renaming this MCP server.") {
			i(e.message);
			return;
		}
		i(r(e) || E(t.ERROR$GENERIC));
	};
	return /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(s, {
		onClose: q ? void 0 : T,
		closeOnEscape: !q,
		"aria-label": E(G ? t.MCP$EDIT_CUSTOM_TITLE : t.MCP$ADD_CUSTOM_TITLE),
		children: /* @__PURE__ */ S("div", {
			"data-testid": "mcp-custom-editor",
			className: "relative bg-base-secondary p-6 rounded-xl border border-[var(--oh-border)] w-[520px] max-w-[90vw] max-h-[90vh] overflow-y-auto custom-scrollbar",
			children: [
				/* @__PURE__ */ x(l, {
					onClose: T,
					testId: "mcp-custom-editor-close",
					disabled: q
				}),
				/* @__PURE__ */ x("h2", {
					className: n("mb-4 pr-6", c),
					children: E(G ? t.MCP$EDIT_CUSTOM_TITLE : t.MCP$ADD_CUSTOM_TITLE)
				}),
				/* @__PURE__ */ x(v, {
					mode: G ? "edit" : "add",
					server: G ? C : void 0,
					existingServers: w,
					onSubmit: (e) => {
						if (I(), B(null), e.auth?.strategy === "oauth2") {
							H(!0), u.authorizeOAuth(e).then((t) => {
								if (B(t), !t.ok) return;
								let n = t.oauth_state ? {
									...e,
									auth: {
										...e.auth,
										state: t.oauth_state
									}
								} : e, r = () => {
									Y(n, t), T();
								};
								G ? k({
									serverId: C.id,
									server: n
								}, {
									onSuccess: r,
									onError: X
								}) : D(n, {
									onSuccess: r,
									onError: X
								});
							}).catch(X).finally(() => H(!1));
							return;
						}
						N(e, {
							onSuccess: (t) => {
								if (!t.ok) return;
								let n = t.oauth_state && e.auth?.strategy === "oauth2" ? {
									...e,
									auth: {
										...e.auth,
										state: t.oauth_state
									}
								} : e, r = () => {
									Y(n, t), T();
								};
								G ? k({
									serverId: C.id,
									server: n
								}, {
									onSuccess: r,
									onError: X
								}) : D(n, {
									onSuccess: r,
									onError: X
								});
							},
							onError: X
						});
					},
					onCancel: T,
					onDelete: G ? () => R(!0) : void 0,
					isActionDisabled: K,
					onTest: W ? void 0 : (e) => {
						if (B(null), e.auth?.strategy === "oauth2" && !W) {
							H(!0), u.authorizeOAuth(e).then(B).catch(X).finally(() => H(!1));
							return;
						}
						N(e);
					},
					isTestPending: P || V,
					testMessage: W ? null : J
				})
			]
		})
	}), L ? /* @__PURE__ */ x(h, {
		text: E(t.SETTINGS$MCP_CONFIRM_DELETE),
		onCancel: () => R(!1),
		onConfirm: () => {
			j(C, {
				onSuccess: () => {
					a(E(t.MCP$REMOVE_SUCCESS)), R(!1), T();
				},
				onError: (e) => {
					X(e), R(!1);
				}
			});
		},
		isConfirming: M
	}) : null] });
}
//#endregion
export { C as CustomServerEditor };

//# sourceMappingURL=custom-server-editor.js.map