import { InputSkeleton as e } from "../input-skeleton.js";
import { SwitchSkeleton as t } from "../switch-skeleton.js";
import { SubtextSkeleton as n } from "../subtext-skeleton.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/settings/llm-settings/llm-settings-inputs-skeleton.tsx
function a() {
	return /* @__PURE__ */ i("div", {
		"data-testid": "app-settings-skeleton",
		className: "px-11 py-9 flex flex-col gap-6",
		children: [
			/* @__PURE__ */ r(t, {}),
			/* @__PURE__ */ r(e, {}),
			/* @__PURE__ */ r(e, {}),
			/* @__PURE__ */ r(e, {}),
			/* @__PURE__ */ r(n, {}),
			/* @__PURE__ */ r(t, {}),
			/* @__PURE__ */ r(t, {}),
			/* @__PURE__ */ r(e, {})
		]
	});
}
//#endregion
export { a as LlmSettingsInputsSkeleton };

//# sourceMappingURL=llm-settings-inputs-skeleton.js.map