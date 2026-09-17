import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { tooltip_default as r } from "../../../../node_modules/@heroui/tooltip/dist/chunk-AUA5GDXN.js";
import { AutomationRunStatus as i } from "../../../../types/automation.js";
import { formatRelativeTime as a, isInvalidTimestamp as o } from "../../../../utils/format-relative-time.js";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/features/automations/detail/run-phase.tsx
function u(e) {
	return e === i.FAILED || e === i.PENDING || e === i.RUNNING;
}
function d(e) {
	return e === i.PENDING || e === i.RUNNING;
}
var f = {
	queued: t.AUTOMATIONS$DETAIL$PHASE_QUEUED,
	sandbox_provisioning: t.AUTOMATIONS$DETAIL$PHASE_SANDBOX_PROVISIONING,
	bundle_upload: t.AUTOMATIONS$DETAIL$PHASE_BUNDLE_UPLOAD,
	entrypoint_start: t.AUTOMATIONS$DETAIL$PHASE_ENTRYPOINT_START,
	preparing: t.AUTOMATIONS$DETAIL$PHASE_PREPARING,
	running_agent: t.AUTOMATIONS$DETAIL$PHASE_RUNNING_AGENT
};
function p(e, t, n) {
	let r = t && Object.hasOwn(f, t) ? f[t] : void 0;
	return r ? e(r) : n?.trim() || t?.trim() || null;
}
function m(e, t, n) {
	return !e || o(e) ? null : a(e, t, n);
}
function h({ status: t, code: n, label: r, updatedAt: i }) {
	let { t: a, i18n: o } = e("openhands"), s = p(a, n, r);
	return s ? {
		text: s,
		age: d(t) ? m(i, o.language, a) : null
	} : null;
}
function g({ status: e, code: t, label: i, updatedAt: a, wide: o = !1 }) {
	let u = h({
		status: e,
		code: t,
		label: i,
		updatedAt: a
	});
	if (!u) return null;
	let { text: d, age: f } = u;
	return /* @__PURE__ */ c(r, {
		content: /* @__PURE__ */ l(s, { children: [d, f ? /* @__PURE__ */ c("span", {
			className: "mt-1 block text-muted",
			children: f
		}) : null] }),
		placement: "top",
		closeDelay: 100,
		disableAnimation: !1,
		classNames: { content: "max-w-xs whitespace-pre-wrap break-words rounded-xl border border-[var(--oh-border)] bg-base-secondary px-3 py-2 text-left text-xs text-white shadow-xl" },
		children: /* @__PURE__ */ l("span", {
			className: "flex min-w-0 cursor-default items-center gap-1",
			children: [/* @__PURE__ */ c("span", {
				"data-testid": "run-phase",
				className: n("min-w-0 truncate text-xs text-muted", o ? "max-w-[28rem]" : "max-w-[12rem]"),
				children: d
			}), f ? /* @__PURE__ */ l("span", {
				"data-testid": "run-phase-age",
				className: "shrink-0 whitespace-nowrap text-xs text-muted",
				children: ["· ", f]
			}) : null]
		})
	});
}
//#endregion
export { g as RunPhase, u as shouldShowRunPhase, h as useRunPhase };

//# sourceMappingURL=run-phase.js.map