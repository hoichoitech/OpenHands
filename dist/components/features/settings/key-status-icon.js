import { cn as e } from "../../../utils/utils.js";
import t from "../../../icons/success.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/settings/key-status-icon.tsx
function r({ testId: r, isSet: i }) {
	return /* @__PURE__ */ n("span", {
		"data-testid": r || (i ? "set-indicator" : "unset-indicator"),
		children: /* @__PURE__ */ n(t, { className: e(i ? "text-success" : "text-danger") })
	});
}
//#endregion
export { r as KeyStatusIcon };

//# sourceMappingURL=key-status-icon.js.map