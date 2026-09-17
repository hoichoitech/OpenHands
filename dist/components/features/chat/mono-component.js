import e from "../../../utils/event-logger.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/chat/mono-component.tsx
var n = (e) => {
	let t = document.createElement("textarea");
	return t.innerHTML = e, t.value;
};
function r(r) {
	let { children: i } = r, a = (t) => {
		try {
			return n(t);
		} catch (n) {
			return e.error(String(n)), t;
		}
	};
	return Array.isArray(i) ? /* @__PURE__ */ t("strong", {
		className: "font-mono",
		children: i.map((e) => typeof e == "string" ? a(e) : e)
	}) : typeof i == "string" ? /* @__PURE__ */ t("strong", {
		className: "font-mono",
		children: a(i)
	}) : /* @__PURE__ */ t("strong", {
		className: "font-mono",
		children: i
	});
}
//#endregion
export { r as MonoComponent };

//# sourceMappingURL=mono-component.js.map