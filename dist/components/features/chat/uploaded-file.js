import { LoaderCircle as e } from "../../../node_modules/lucide-react/dist/esm/icons/loader-circle.js";
import { cn as t, getFileExtension as n } from "../../../utils/utils.js";
import r from "../../../icons/file.js";
import { RemoveFileButton as i } from "./remove-file-button.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/chat/uploaded-file.tsx
function s({ file: s, onRemove: c, isLoading: l = !1 }) {
	let u = n(s.name);
	return /* @__PURE__ */ o("div", {
		className: "group flex gap-2 rounded-lg bg-[var(--oh-interactive-hover)] max-w-[160px] px-3 py-1 relative",
		children: [/* @__PURE__ */ o("div", {
			className: "flex flex-col justify-center gap-0.25",
			children: [
				/* @__PURE__ */ a(i, { onClick: c }),
				/* @__PURE__ */ a("div", {
					className: "flex items-center gap-2 w-full",
					children: /* @__PURE__ */ a("span", {
						className: t("text-sm font-normal leading-5 flex-1 max-w-[136px] truncate", l ? "max-w-[108px] text-[var(--oh-muted)]" : "text-white"),
						children: s.name
					})
				}),
				/* @__PURE__ */ o("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ a(r, {
						width: 12,
						height: 12,
						color: "var(--oh-muted)"
					}), /* @__PURE__ */ a("span", {
						className: "text-[9px] font-normal leading-5 text-[var(--oh-muted)]",
						children: u
					})]
				})
			]
		}), l && /* @__PURE__ */ a("div", {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ a(e, {
				className: "animate-spin w-5 h-5",
				color: "white"
			})
		})]
	});
}
//#endregion
export { s as UploadedFile };

//# sourceMappingURL=uploaded-file.js.map