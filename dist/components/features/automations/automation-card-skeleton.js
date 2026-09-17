import { extensionModuleCardSurfaceClassName as e } from "../../../utils/extension-module-card-classes.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/features/automations/automation-card-skeleton.tsx
function r() {
	return /* @__PURE__ */ n("div", {
		"data-testid": "automation-card-skeleton",
		className: `${e} border border-transparent p-4`,
		children: [
			/* @__PURE__ */ n("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ t("div", { className: "h-5 w-40 animate-pulse rounded bg-surface-raised" }), /* @__PURE__ */ t("div", { className: "size-8 animate-pulse rounded-md bg-surface-raised" })]
			}),
			/* @__PURE__ */ t("div", { className: "mt-2 h-4 w-72 animate-pulse rounded bg-surface-raised" }),
			/* @__PURE__ */ n("div", {
				className: "mt-3 flex gap-2",
				children: [/* @__PURE__ */ t("div", { className: "h-5 w-20 animate-pulse rounded-full bg-surface-raised" }), /* @__PURE__ */ t("div", { className: "h-5 w-24 animate-pulse rounded bg-surface-raised" })]
			}),
			/* @__PURE__ */ n("div", {
				className: "mt-3 flex gap-2",
				children: [
					/* @__PURE__ */ t("div", { className: "h-7 w-32 animate-pulse rounded-full bg-surface-raised" }),
					/* @__PURE__ */ t("div", { className: "h-7 w-28 animate-pulse rounded-full bg-surface-raised" }),
					/* @__PURE__ */ t("div", { className: "h-7 w-24 animate-pulse rounded-full bg-surface-raised" })
				]
			}),
			/* @__PURE__ */ t("div", { className: "mt-3 h-9 animate-pulse rounded-md bg-surface-raised" })
		]
	});
}
//#endregion
export { r as AutomationCardSkeleton };

//# sourceMappingURL=automation-card-skeleton.js.map