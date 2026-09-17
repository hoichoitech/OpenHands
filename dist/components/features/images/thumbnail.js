import { cn as e } from "../../../utils/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/images/thumbnail.tsx
function n({ src: n, size: r = "small" }) {
	return /* @__PURE__ */ t("img", {
		role: "img",
		alt: "",
		src: n,
		className: e("rounded-sm object-cover", r === "small" && "w-[62px] h-[62px]", r === "large" && "w-[100px] h-[100px]")
	});
}
//#endregion
export { n as Thumbnail };

//# sourceMappingURL=thumbnail.js.map