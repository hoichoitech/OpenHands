import { CopyToClipboardButton as e } from "./copy-to-clipboard-button.js";
import t from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/shared/buttons/copyable-content-wrapper.tsx
function i({ text: i, children: a }) {
	let [o, s] = t.useState(!1), [c, l] = t.useState(!1);
	return t.useEffect(() => {
		let e;
		return c && (e = setTimeout(() => l(!1), 2e3)), () => clearTimeout(e);
	}, [c]), /* @__PURE__ */ r("div", {
		className: "relative",
		onMouseEnter: () => s(!0),
		onMouseLeave: () => s(!1),
		children: [/* @__PURE__ */ n("div", {
			className: "absolute top-2 right-2 z-10",
			children: /* @__PURE__ */ n(e, {
				isHidden: !o,
				isDisabled: c,
				onClick: async () => {
					await navigator.clipboard.writeText(i), l(!0);
				},
				mode: c ? "copied" : "copy"
			})
		}), a]
	});
}
//#endregion
export { i as CopyableContentWrapper };

//# sourceMappingURL=copyable-content-wrapper.js.map