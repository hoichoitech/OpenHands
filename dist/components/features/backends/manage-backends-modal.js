import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Plus as n } from "../../../node_modules/lucide-react/dist/esm/icons/plus.js";
import { cn as r } from "../../../utils/utils.js";
import { getLockedCloudHost as i } from "../../../api/agent-server-config.js";
import { useActiveBackendContext as a } from "../../../contexts/active-backend-context.js";
import { ModalBackdrop as o } from "../../shared/modals/modal-backdrop.js";
import { MODAL_MAX_WIDTH_VIEWPORT as s, modalWidthClassName as c } from "../../shared/modals/modal-body.js";
import { modalTitleLgClassName as l } from "../../../utils/modal-classes.js";
import { ModalCloseButton as u } from "../../shared/modals/modal-close-button.js";
import { BrandButton as d } from "../settings/brand-button.js";
import { useAllCloudOrganizations as f } from "../../../hooks/query/use-cloud-organizations.js";
import { useCloudCurrentUserId as p } from "../../../hooks/query/use-cloud-current-user-id.js";
import { ConfirmationModal as m } from "../../shared/modals/confirmation-modal.js";
import { useBackendsHealth as h } from "../../../hooks/query/use-backends-health.js";
import { DeviceFlowAuth as g } from "./device-flow-auth.js";
import { BackendFormModal as _ } from "./backend-form-modal.js";
import { BackendRow as v } from "./backend-row.js";
import y from "react";
import { Fragment as b, jsx as x, jsxs as S } from "react/jsx-runtime";
//#region src/components/features/backends/manage-backends-modal.tsx
function C(e, t, n, r) {
	if (e.kind !== "cloud") return;
	let i = t[e.id];
	if (!i || i.orgs.length === 0) return;
	let a = n[e.id]?.userId ?? null;
	return i.orgs.map((e) => a && a === e.id ? r : e.name).join(", ");
}
function w({ onClose: w, recoveryMode: T = !1 }) {
	let { t: E } = e("openhands"), { backends: D, active: O, removeBackend: k, setActive: A, updateBackend: j } = a(), M = h(D, { probeDisabledOnce: !0 }), N = f(), P = p(), F = E(t.BACKEND$PERSONAL_WORKSPACE), I = i(), L = I !== null, R = O.backend.authMode === "cookie", z = L && !R && O.backend.kind === "cloud" ? O.backend : null, B = I ?? z?.host ?? "", V = E(L && !R ? t.BACKEND$RECONNECT_CLOUD_TITLE : t.BACKEND$MANAGE_TITLE), [H, U] = y.useState(null), [W, G] = y.useState(null), [K, q] = y.useState(!1), J = () => {
		H && (k(H.id), U(null));
	}, Y = y.useCallback((e) => {
		(O.backend.id !== e.id || O.orgId !== null) && A(e.id), w();
	}, [
		O.backend.id,
		O.orgId,
		w,
		A
	]), X = y.useCallback((e, t) => {
		j(e.id, { apiKey: t });
	}, [j]), Z = y.useCallback((e) => {
		z && j(z.id, { apiKey: e });
	}, [z, j]);
	return /* @__PURE__ */ S(b, { children: [
		/* @__PURE__ */ x(o, {
			onClose: T ? void 0 : w,
			closeOnEscape: !T,
			closeOnBackdropClick: !T,
			"aria-label": V,
			children: /* @__PURE__ */ S("div", {
				"data-testid": "manage-backends-modal",
				className: r("relative flex flex-col bg-[var(--oh-surface)] border border-[var(--oh-border)] rounded-xl", c("lg"), s, "max-h-[70vh]"),
				children: [
					T ? null : /* @__PURE__ */ x(u, {
						onClose: w,
						testId: "close-manage-backends-modal"
					}),
					/* @__PURE__ */ x("div", {
						className: r("p-5", !T && "pr-12"),
						children: /* @__PURE__ */ x("h2", {
							className: l,
							children: V
						})
					}),
					/* @__PURE__ */ x("div", {
						className: "flex min-h-0 flex-1 flex-col px-5",
						children: /* @__PURE__ */ x("div", {
							className: "flex-1 overflow-auto rounded-md border border-[var(--oh-border)] bg-surface-raised custom-scrollbar-always",
							"data-testid": "manage-backends-list",
							children: D.length === 0 ? /* @__PURE__ */ x("p", {
								className: "px-3 py-6 text-center text-sm text-[var(--oh-text-secondary)]",
								children: E(t.BACKEND$MANAGE_EMPTY)
							}) : /* @__PURE__ */ x("ul", {
								className: "divide-y divide-[var(--oh-border)]",
								children: D.map((e) => /* @__PURE__ */ x(v, {
									backend: e,
									health: M[e.id],
									orgLabel: C(e, N, P, F),
									onSelect: () => Y(e),
									onEdit: () => G(e),
									onRemove: () => U({
										id: e.id,
										name: e.name
									}),
									onLogin: e.authMode === "cookie" ? void 0 : (t) => X(e, t)
								}, e.id))
							})
						})
					}),
					/* @__PURE__ */ S("div", {
						className: "flex justify-end gap-2 p-5",
						children: [L ? z ? /* @__PURE__ */ x(g, {
							host: B,
							onSuccess: Z,
							testIdRoot: "manage-backends-reconnect-cloud",
							idleButtonLabel: E(t.BACKEND$RECONNECT_CLOUD),
							className: "w-full sm:w-auto",
							buttonClassName: "w-full sm:w-auto",
							statusDisplay: "modal"
						}) : null : /* @__PURE__ */ x(d, {
							type: "button",
							variant: T ? "primary" : "secondary",
							onClick: () => q(!0),
							testId: "manage-backends-add",
							startContent: /* @__PURE__ */ x(n, {
								width: 14,
								height: 14
							}),
							children: E(t.BACKEND$ADD)
						}), T ? null : /* @__PURE__ */ x(d, {
							type: "button",
							variant: "primary",
							onClick: w,
							testId: "manage-backends-done",
							children: E(t.HOME$DONE)
						})]
					})
				]
			})
		}),
		K ? /* @__PURE__ */ x(_, {
			mode: "add",
			source: "manage_backends_modal",
			onClose: () => q(!1)
		}) : null,
		W ? /* @__PURE__ */ x(_, {
			mode: "edit",
			backend: W,
			onClose: () => G(null)
		}) : null,
		H ? /* @__PURE__ */ x(m, {
			text: E(t.BACKEND$REMOVE_CONFIRMATION, { name: H.name }),
			onConfirm: J,
			onCancel: () => U(null)
		}) : null
	] });
}
//#endregion
export { w as ManageBackendsModal };

//# sourceMappingURL=manage-backends-modal.js.map