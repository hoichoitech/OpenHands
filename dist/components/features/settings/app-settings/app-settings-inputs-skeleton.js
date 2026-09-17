import { InputSkeleton as e } from "../input-skeleton.js";
import { SwitchSkeleton as t } from "../switch-skeleton.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/features/settings/app-settings/app-settings-inputs-skeleton.tsx
function i() {
	return /* @__PURE__ */ r("div", {
		"data-testid": "app-settings-skeleton",
		className: "px-11 py-9 flex flex-col gap-6",
		children: [
			/* @__PURE__ */ n(e, {}),
			/* @__PURE__ */ n(t, {}),
			/* @__PURE__ */ n(t, {})
		]
	});
}
//#endregion
export { i as AppSettingsInputsSkeleton };

//# sourceMappingURL=app-settings-inputs-skeleton.js.map