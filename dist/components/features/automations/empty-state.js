import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { extensionModuleEmptyStateClassName as n } from "../../../utils/extension-module-card-classes.js";
import { CreateInstructions as r } from "./create-instructions.js";
import { RecommendedAutomationsLauncher as i } from "./recommended-automations-launcher.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/automations/empty-state.tsx
function s() {
	let { t: s } = e("openhands");
	return /* @__PURE__ */ o("div", {
		"data-testid": "automations-empty",
		className: n,
		children: [
			/* @__PURE__ */ a("p", {
				className: "text-sm text-white",
				children: s(t.AUTOMATIONS$EMPTY)
			}),
			/* @__PURE__ */ a("div", {
				className: "mt-4 flex justify-center",
				children: /* @__PURE__ */ a(r, {})
			}),
			/* @__PURE__ */ a("div", {
				className: "mt-8 w-full text-left",
				children: /* @__PURE__ */ a(i, {
					className: "pb-0",
					variant: "rail"
				})
			})
		]
	});
}
//#endregion
export { s as EmptyState };

//# sourceMappingURL=empty-state.js.map