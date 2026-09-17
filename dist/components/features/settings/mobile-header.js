import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Typography as n } from "../../../ui/typography.js";
import r from "../../../icons/settings-gear.js";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/settings/mobile-header.tsx
function s({ isMobileMenuOpen: s, onToggleMenu: c }) {
	let { t: l } = e("openhands");
	return /* @__PURE__ */ o("div", {
		className: "flex items-center justify-between pt-8 mb-4 md:hidden",
		children: [/* @__PURE__ */ o("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ a(r, {
				width: 16,
				height: 16
			}), /* @__PURE__ */ a(n.H2, { children: l(t.SETTINGS$TITLE) })]
		}), /* @__PURE__ */ a("button", {
			type: "button",
			onClick: c,
			className: "p-2 rounded-md bg-tertiary hover:bg-tertiary transition-colors",
			"aria-label": l(t.SETTINGS$TOGGLE_SETTINGS_MENU),
			children: /* @__PURE__ */ a("svg", {
				width: 20,
				height: 20,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: s ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("line", {
					x1: "18",
					y1: "6",
					x2: "6",
					y2: "18"
				}), /* @__PURE__ */ a("line", {
					x1: "6",
					y1: "6",
					x2: "18",
					y2: "18"
				})] }) : /* @__PURE__ */ o(i, { children: [
					/* @__PURE__ */ a("line", {
						x1: "3",
						y1: "6",
						x2: "21",
						y2: "6"
					}),
					/* @__PURE__ */ a("line", {
						x1: "3",
						y1: "12",
						x2: "21",
						y2: "12"
					}),
					/* @__PURE__ */ a("line", {
						x1: "3",
						y1: "18",
						x2: "21",
						y2: "18"
					})
				] })
			})
		})]
	});
}
//#endregion
export { s as MobileHeader };

//# sourceMappingURL=mobile-header.js.map