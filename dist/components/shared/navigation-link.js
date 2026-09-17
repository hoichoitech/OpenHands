import { useNavigation as e } from "../../context/navigation-context.js";
import t from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/shared/navigation-link.tsx
function r(e) {
	return e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
}
function i(e) {
	return e.split(/[?#]/)[0];
}
function a(e, t, n) {
	let r = i(t);
	return r === "/" || n ? e === r : e === r || e.startsWith(`${r}/`);
}
var o = t.forwardRef(({ to: t, replace: i = !1, end: o = !1, onClick: s, className: c, children: l, target: u, rel: d, ...f }, p) => {
	let { currentPath: m, navigate: h } = e(), g = a(m, t, o), _ = typeof c == "function" ? c({ isActive: g }) : c, v = (e) => {
		s?.(e), !(e.defaultPrevented || e.button !== 0 || r(e) || u === "_blank") && (e.preventDefault(), h(t, { replace: i }));
	};
	return /* @__PURE__ */ n("a", {
		...f,
		ref: p,
		href: t,
		target: u,
		rel: d,
		onClick: v,
		className: _,
		"aria-current": g ? "page" : void 0,
		children: l
	});
});
o.displayName = "NavigationLink";
//#endregion
export { o as NavigationLink };

//# sourceMappingURL=navigation-link.js.map