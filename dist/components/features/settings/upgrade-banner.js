import { cn as e } from "../../../utils/utils.js";
import { UpgradeButton as t } from "./upgrade-button.js";
import { BannerMessage as n } from "./banner-message.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/settings/upgrade-banner.tsx
function a({ message: a, onUpgradeClick: o, className: s, isDisabled: c }) {
	return /* @__PURE__ */ i("div", {
		className: e("bg-primary text-base flex items-center justify-center gap-3 p-2 w-full rounded", s),
		"data-testid": "upgrade-banner",
		children: [/* @__PURE__ */ r(n, { message: a }), /* @__PURE__ */ r(t, {
			onClick: o,
			isDisabled: c
		})]
	});
}
//#endregion
export { a as UpgradeBanner };

//# sourceMappingURL=upgrade-banner.js.map