import { FaClock as e } from "../../../node_modules/react-icons/fa/index.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/chat/success-indicator.tsx
function n({ status: n }) {
	return /* @__PURE__ */ t("span", {
		className: "flex-shrink-0",
		children: n === "timeout" && /* @__PURE__ */ t(e, {
			"data-testid": "status-icon",
			className: "h-4 w-4 ml-2 inline fill-yellow-500"
		})
	});
}
//#endregion
export { n as SuccessIndicator };

//# sourceMappingURL=success-indicator.js.map