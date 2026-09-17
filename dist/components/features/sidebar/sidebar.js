import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { useNavigation as r } from "../../../context/navigation-context.js";
import { displayErrorToast as i } from "../../../utils/custom-toast-handlers.js";
import { useActiveBackendContext as a } from "../../../contexts/active-backend-context.js";
import { getErrorStatus as o, useSettings as s } from "../../../hooks/query/use-settings.js";
import { useClickOutsideElement as c } from "../../../hooks/use-click-outside-element.js";
import { useConfig as l } from "../../../hooks/query/use-config.js";
import { useSidebarMobileNav as ee } from "./sidebar-mobile-nav-context.js";
import { useBackendsHealth as u } from "../../../hooks/query/use-backends-health.js";
import { SidebarRailBody as d } from "./sidebar-rail-body.js";
import { useSidebarStore as f } from "../../../stores/sidebar-store.js";
import p from "react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/components/features/sidebar/sidebar.tsx
var te = p.lazy(() => import("../../shared/modals/settings/settings-modal.js").then((e) => ({ default: e.SettingsModal }))), _ = p.lazy(() => import("../backends/add-backend-modal.js").then((e) => ({ default: e.AddBackendModal }))), v = p.lazy(() => import("../backends/manage-backends-modal.js").then((e) => ({ default: e.ManageBackendsModal }))), y = 250;
function b() {
	let { t: b } = e("openhands"), { currentPath: x } = r(), { data: S } = l(), { data: C, error: w, isError: T, isFetching: E } = s(), { backends: D, active: O } = a(), k = u(D)[O.backend.id], A = f((e) => e.collapsed), j = f((e) => e.setCollapsed), [M, N] = p.useState(!1), [P, F] = p.useState(!1), I = p.useRef(null), [L, R] = p.useState(!1), [z, B] = p.useState(!1), [V, H] = p.useState(!1), U = p.useRef(!1), [, W] = p.useReducer((e) => e + 1, 0), { isOpen: G, close: K } = ee(), [q, J] = p.useState(!1), [Y, X] = p.useState(!1), Z = c(() => F(!1)), Q = o(w);
	p.useEffect(() => {
		K();
	}, [x, K]), p.useEffect(() => {
		if (G) {
			J(!0);
			let e = requestAnimationFrame(() => {
				X(!0);
			});
			return () => cancelAnimationFrame(e);
		}
		X(!1);
		let e = window.setTimeout(() => {
			J(!1);
		}, y);
		return () => window.clearTimeout(e);
	}, [G]), p.useEffect(() => {
		if (!G) return;
		let e = (e) => {
			e.key === "Escape" && K();
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [G, K]), p.useEffect(() => {
		x === "/settings" ? N(!1) : !E && T && Q !== 404 ? i(b(t.SETTINGS$FETCH_ERROR)) : Q === 404 && !S?.feature_flags?.hide_llm_settings && N(!0);
	}, [
		x,
		E,
		T,
		Q,
		S?.feature_flags?.hide_llm_settings,
		b
	]);
	let ne = b(A ? t.SIDEBAR$EXPAND : t.SIDEBAR$COLLAPSE), re = p.useCallback((e) => {
		if (!A) return;
		let t = e.target;
		t instanceof HTMLElement && (t.closest("a,button,input,textarea,select,[role='button'],[role='link']") || j(!1));
	}, [A, j]), $ = {
		collapseToggleLabel: ne,
		onCollapse: p.useCallback(() => {
			H(!1), U.current = !0, W(), j(!0), window.setTimeout(() => {
				U.current = !1, W();
			}, 250);
		}, [j]),
		onExpand: () => j(!1),
		showCollapsedExpandButton: A && V && !U.current,
		isExtensionsActive: x === "/customize" || x.startsWith("/skills") || x === "/plugins" || x === "/apps" || x === "/mcp",
		currentPath: x,
		activeBackend: O.backend,
		activeOrgId: O.orgId,
		activeBackendHealth: k,
		collapsedBackendPopoverOpen: P,
		setCollapsedBackendPopoverOpen: F,
		collapsedBackendPopoverRef: Z,
		collapsedBackendCloseTimer: I,
		onOpenAddBackend: () => R(!0),
		onOpenManageBackends: () => B(!0)
	};
	return /* @__PURE__ */ g(m, { children: [
		/* @__PURE__ */ h("aside", {
			"aria-label": b(t.SIDEBAR$NAVIGATION_LABEL),
			"data-collapsed": A ? "true" : "false",
			onClick: re,
			onMouseEnter: () => {
				A && H(!0);
			},
			onMouseLeave: () => {
				H(!1);
			},
			className: n("max-md:hidden flex bg-base flex-col min-h-0 transition-[width,min-width] duration-200", "md:border-r md:border-[var(--oh-border)] md:h-full", A ? "md:w-[60px] md:min-w-[60px] md:px-2.5" : "md:w-[300px] md:min-w-[300px] pb-2 md:pl-2.5 md:pr-0", x === "/" && "md:pb-3"),
			children: /* @__PURE__ */ h(d, {
				collapsed: A,
				showCollapseToggle: !0,
				...$
			})
		}),
		q ? /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("div", {
			className: n("fixed inset-0 z-40 bg-black/50 md:hidden", "transition-opacity ease-in-out motion-reduce:transition-none", Y ? "opacity-100" : "pointer-events-none opacity-0"),
			style: { transitionDuration: `${y}ms` },
			onClick: K,
			"aria-hidden": !Y
		}), /* @__PURE__ */ h("aside", {
			"aria-label": b(t.SIDEBAR$NAVIGATION_LABEL),
			"data-testid": "sidebar-mobile-drawer",
			"aria-hidden": !Y,
			className: n("fixed inset-y-0 left-0 z-50 flex min-h-0 w-[min(300px,85vw)] flex-col bg-base", "border-r border-[var(--oh-border)] pb-2 pl-2.5 pr-0 md:hidden", "transition-transform ease-in-out motion-reduce:transition-none", Y ? "translate-x-0" : "-translate-x-full"),
			style: { transitionDuration: `${y}ms` },
			children: /* @__PURE__ */ h(d, {
				collapsed: !1,
				showCollapseToggle: !1,
				showMobileCloseButton: !0,
				onCloseMobile: K,
				...$
			})
		})] }) : null,
		M && /* @__PURE__ */ h(p.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ h(te, {
				settings: C,
				onClose: () => N(!1)
			})
		}),
		L && /* @__PURE__ */ h(p.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ h(_, { onClose: () => R(!1) })
		}),
		z && /* @__PURE__ */ h(p.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ h(v, { onClose: () => B(!1) })
		})
	] });
}
//#endregion
export { b as Sidebar };

//# sourceMappingURL=sidebar.js.map