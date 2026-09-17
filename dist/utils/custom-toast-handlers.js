import { I18nKey as e } from "../i18n/declaration.js";
import { CircleX as t } from "../node_modules/lucide-react/dist/esm/icons/circle-x.js";
import { OH_STATUS_ERROR_COLOR as n } from "../constants/status-colors.js";
import { cn as r } from "./utils.js";
import { isBackendRequestTimeoutMessage as i, isCorsOrNetworkErrorMessage as a } from "./user-facing-error.js";
import o from "../i18n/index.js";
import { zt as s } from "../node_modules/react-hot-toast/dist/index.js";
import { calculateToastDuration as c } from "./toast-duration.js";
import l from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/utils/custom-toast-handlers.tsx
var f = {
	background: "var(--oh-color-tertiary)",
	border: "1px solid var(--oh-border-input)",
	color: "#fff",
	borderRadius: "var(--oh-radius)",
	maxWidth: "400px",
	wordBreak: "break-word",
	overflowWrap: "anywhere",
	whiteSpace: "pre-wrap"
}, p = {
	position: "top-right",
	style: f
}, m = {
	...f,
	color: "var(--oh-muted)"
};
function h({ message: e }) {
	let i = l.useRef(null), [a, o] = l.useState(!1);
	return l.useLayoutEffect(() => {
		let e = i.current;
		if (!e) return;
		let t = () => {
			let t = Number.parseFloat(getComputedStyle(e).lineHeight);
			if (!Number.isFinite(t) || t <= 0) {
				o(!1);
				return;
			}
			o(e.getBoundingClientRect().height > t * 1.5);
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, [e]), /* @__PURE__ */ d("div", {
		className: r("flex min-w-0 gap-2", a ? "items-start" : "items-center"),
		children: [/* @__PURE__ */ u(t, {
			"aria-hidden": !0,
			className: "h-4 w-4 shrink-0",
			strokeWidth: 2,
			style: { color: n }
		}), /* @__PURE__ */ u("span", {
			ref: i,
			className: "min-w-0 flex-1 text-sm leading-5 [word-break:break-word] [overflow-wrap:anywhere]",
			children: e
		})]
	});
}
var g = {
	...p,
	icon: null,
	style: m
}, _ = (t) => {
	let n = t || o.t(e.STATUS$ERROR);
	a(n) ? n = o.t(e.ERROR$CORS_OR_NETWORK) : i(n) && (n = o.t(e.ERROR$BACKEND_REQUEST_TIMEOUT));
	let r = c(n, 4e3);
	s(/* @__PURE__ */ u(h, { message: n }), {
		...g,
		duration: r
	});
}, v = (e) => {
	let t = c(e, 5e3);
	s.success(/* @__PURE__ */ u("span", {
		className: "[word-break:break-word] [overflow-wrap:anywhere]",
		children: e
	}), {
		...p,
		duration: t
	});
}, y = (e, t, n) => {
	let r = c(`${e} ${t}`, 5e3);
	s.success(/* @__PURE__ */ d("span", {
		className: "[word-break:break-word] [overflow-wrap:anywhere]",
		children: [
			e,
			" ",
			/* @__PURE__ */ u("a", {
				className: "underline hover:no-underline",
				href: n,
				children: t
			})
		]
	}), {
		...p,
		duration: r
	});
};
//#endregion
export { p as TOAST_OPTIONS, _ as displayErrorToast, v as displaySuccessToast, y as displaySuccessToastWithLink };

//# sourceMappingURL=custom-toast-handlers.js.map