import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Plus as n } from "../../../node_modules/lucide-react/dist/esm/icons/plus.js";
import { Settings as r } from "../../../node_modules/lucide-react/dist/esm/icons/settings.js";
import { cn as i } from "../../../utils/utils.js";
import { useConversationStore as a } from "../../../stores/conversation-store.js";
import { getLockedCloudHost as o } from "../../../api/agent-server-config.js";
import { isNoBackend as s } from "../../../api/backend-registry/active-store.js";
import { useActiveBackendContext as ee } from "../../../contexts/active-backend-context.js";
import { StyledTooltip as te } from "../../shared/buttons/styled-tooltip.js";
import { formControlTransitionClassName as c } from "../../../utils/form-control-classes.js";
import { dropdownFooterActionClassName as l, dropdownMenuListClassName as u, dropdownMenuRowIconWrapperClassName as d } from "../../../utils/dropdown-classes.js";
import { NavigationLink as ne } from "../../shared/navigation-link.js";
import { useAllCloudOrganizations as re } from "../../../hooks/query/use-cloud-organizations.js";
import { useCloudCurrentUserId as ie } from "../../../hooks/query/use-cloud-current-user-id.js";
import { Dropdown as ae } from "../../../ui/dropdown/dropdown.js";
import { useBackendsHealth as oe } from "../../../hooks/query/use-backends-health.js";
import { triggerEnvironmentSwitch as se } from "./environment-switch-store.js";
import { BackendStatusDot as f } from "./backend-status-dot.js";
import { AddBackendModal as p } from "./add-backend-modal.js";
import { ManageBackendsModal as ce } from "./manage-backends-modal.js";
import m from "react";
import { Fragment as le, jsx as h, jsxs as g } from "react/jsx-runtime";
import { useMatch as _, useNavigate as ue } from "react-router";
//#region src/components/features/backends/backend-selector.tsx
var v = "::";
function y(e, t) {
	return t ? `${e}${v}${t}` : e;
}
function de(e) {
	let [t, n] = e.split(v);
	return {
		backendId: t,
		orgId: n ?? null
	};
}
function b(e) {
	return /* @__PURE__ */ h(f, { isConnected: e?.isConnected ?? null });
}
function x() {
	return /* @__PURE__ */ h(f, { isConnected: "unavailable" });
}
function S(e, t, n, r, i) {
	let a = [], o = e.filter((e) => e.kind === "local"), s = e.filter((e) => e.kind === "cloud");
	for (let e of o) a.push({
		value: y(e.id, null),
		label: e.name,
		prefix: b(i[e.id])
	});
	for (let e of s) {
		let o = n[e.id], s = b(i[e.id]);
		if (!o || o.orgs.length === 0) a.push({
			value: y(e.id, null),
			label: e.name,
			prefix: s
		});
		else {
			let n = r[e.id]?.userId ?? null;
			for (let r of o.orgs) {
				let i = n && n === r.id ? t : r.name;
				a.push({
					value: y(e.id, r.id),
					label: `${e.name} – ${i}`,
					prefix: s
				});
			}
		}
	}
	return a;
}
function C({ openUpward: f = !1, hideTrigger: v = !1, defaultOpen: C = !1, onSelectOption: w, onOpenAddBackend: T, onOpenManageBackends: E, sidebarCollapsed: fe = !1 } = {}) {
	let { t: D } = e("openhands"), { backends: O, active: k, setActive: A } = ee(), j = re(), M = ie(), N = oe(O), P = ue(), pe = _("/settings"), F = _("/settings/*"), I = _("/conversations/:conversationId"), L = _("/automations/:automationId"), [R, z] = m.useState(!1), [me, B] = m.useState(!1), V = D(t.BACKEND$PERSONAL_WORKSPACE), H = m.useMemo(() => S(O, V, j, M, N), [
		O,
		V,
		j,
		M,
		N
	]), U = s(k.backend), W = D(t.BACKEND$NO_BACKEND_AVAILABLE), G = y(k.backend.id, k.orgId), K = U ? void 0 : H.find((e) => e.value === G), q = !!(pe || F), J = D(t.SIDEBAR$SETTINGS), he = k.orgId ? `?org=${encodeURIComponent(k.orgId)}` : "", ge = a((e) => e.isRightPanelShown), _e = !fe || I && ge ? "top" : "left", ve = Object.values(j).some((e) => e.isLoading);
	m.useEffect(() => {
		if (U || k.backend.kind !== "cloud" || k.orgId) return;
		let { backend: e } = k, t = j[e.id];
		if (!t || t.orgs.length === 0) return;
		let n = t.currentOrgId ? t.orgs.find((e) => e.id === t.currentOrgId) : void 0, r = M[e.id]?.userId ?? null, i = r ? t.orgs.find((e) => e.id === r) : void 0, a = n ?? i ?? t.orgs[0];
		a && A(e.id, a.id);
	}, [
		k,
		j,
		M,
		A,
		U
	]);
	let Y = m.useCallback(() => {
		if (T) {
			T(), w?.();
			return;
		}
		z(!0);
	}, [T, w]), X = m.useCallback(() => {
		if (E) {
			E(), w?.();
			return;
		}
		B(!0);
	}, [E, w]), Z = o() !== null, Q = Z && k.backend.authMode === "cookie", $ = m.useCallback((e) => {
		e.preventDefault(), e.stopPropagation();
	}, []), ye = m.useCallback((e) => {
		$(e), Y();
	}, [Y, $]), be = m.useCallback((e) => {
		$(e), Y();
	}, [Y, $]), xe = m.useCallback((e) => {
		$(e), X();
	}, [X, $]), Se = m.useCallback((e) => {
		$(e), X();
	}, [X, $]), Ce = Q ? void 0 : /* @__PURE__ */ g("div", {
		className: u,
		children: [Z ? null : /* @__PURE__ */ g("button", {
			type: "button",
			"data-testid": "add-backend-menu-item",
			onMouseDown: $,
			onTouchStart: $,
			onTouchEnd: be,
			onClick: ye,
			className: i(l, "cursor-pointer rounded-md"),
			children: [/* @__PURE__ */ h("span", {
				className: d,
				"aria-hidden": !0,
				children: /* @__PURE__ */ h(n, {
					width: 16,
					height: 16
				})
			}), D(t.BACKEND$ADD)]
		}), /* @__PURE__ */ g("button", {
			type: "button",
			"data-testid": "manage-backends-menu-item",
			onMouseDown: $,
			onTouchStart: $,
			onTouchEnd: Se,
			onClick: xe,
			className: i(l, "cursor-pointer rounded-md"),
			children: [/* @__PURE__ */ h("span", {
				className: d,
				"aria-hidden": !0,
				children: /* @__PURE__ */ h(r, {
					width: 16,
					height: 16
				})
			}), D(Z ? t.BACKEND$RECONNECT_CLOUD : t.BACKEND$MANAGE)]
		})]
	}), we = m.useCallback(async (e) => {
		if (e === G) return;
		let { backendId: t, orgId: n } = de(e), r = O.find((e) => e.id === t);
		r && (se(H.find((t) => t.value === e)?.label ?? r.name), await new Promise((e) => {
			setTimeout(e, 400);
		}), I ? P("/conversations") : L && P("/automations"), A(r.id, n), w?.());
	}, [
		G,
		O,
		I,
		L,
		P,
		H,
		A,
		D,
		w
	]);
	return /* @__PURE__ */ g(le, { children: [
		/* @__PURE__ */ g("div", {
			className: "flex items-center gap-2 w-full",
			children: [/* @__PURE__ */ h("div", {
				className: "flex-1 min-w-0",
				children: /* @__PURE__ */ h(ae, {
					testId: "backend-selector",
					defaultValue: K ?? {
						value: G,
						label: U ? W : k.backend.name,
						prefix: U ? x() : b(N[k.backend.id])
					},
					footer: Ce,
					openUpward: f,
					hideTrigger: v,
					defaultOpen: C,
					openOnHover: !v,
					onChange: (e) => {
						e && we(e.value);
					},
					placeholder: U ? W : k.backend.name,
					loading: ve,
					options: H,
					className: "h-10 px-2 py-0 bg-transparent border-transparent hover:bg-[var(--oh-surface-raised)] focus-within:bg-[var(--oh-surface-raised)] focus-within:border-transparent focus-within:ring-0"
				}, `${G}-${K?.label ?? ""}`)
			}), v ? null : /* @__PURE__ */ h(te, {
				content: J,
				placement: _e,
				offset: 10,
				children: k.backend.kind === "cloud" ? /* @__PURE__ */ h("a", {
					href: `${k.backend.host.replace(/\/+$/, "")}/settings${he}`,
					target: Z ? void 0 : "_blank",
					rel: Z ? void 0 : "noopener noreferrer",
					"data-testid": "backend-selector-settings-link",
					"aria-label": J,
					className: i("inline-flex items-center justify-center shrink-0 w-9 h-9 rounded-md text-[var(--oh-muted)] hover:text-white hover:bg-[var(--oh-surface-raised)] cursor-pointer", c),
					children: /* @__PURE__ */ h(r, {
						width: 16,
						height: 16
					})
				}) : /* @__PURE__ */ h(ne, {
					to: "/settings",
					"data-testid": "backend-selector-settings-link",
					"data-active": q,
					"aria-label": J,
					className: i(q ? "inline-flex items-center justify-center shrink-0 w-9 h-9 rounded-md bg-tertiary text-white font-normal cursor-pointer" : "inline-flex items-center justify-center shrink-0 w-9 h-9 rounded-md text-[var(--oh-muted)] hover:text-white hover:bg-[var(--oh-surface-raised)] cursor-pointer", c),
					children: /* @__PURE__ */ h(r, {
						width: 16,
						height: 16
					})
				})
			})]
		}),
		R ? /* @__PURE__ */ h(p, { onClose: () => z(!1) }) : null,
		me ? /* @__PURE__ */ h(ce, { onClose: () => B(!1) }) : null
	] });
}
//#endregion
export { C as BackendSelector };

//# sourceMappingURL=backend-selector.js.map