import { cn as e } from "../../../utils/utils.js";
import { ChevronLeft as t } from "../../../assets/chevron-left.js";
import { ChevronRight as n } from "../../../assets/chevron-right.js";
import { ImagePreview as r } from "./image-preview.js";
import i from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/images/image-carousel.tsx
function s({ size: s = "small", images: c, onRemove: l }) {
	let u = i.useRef(null), [d, f] = i.useState(!1), [p, m] = i.useState(!0), [h, g] = i.useState(!1);
	return i.useEffect(() => {
		let e = u.current;
		e && f(e.scrollWidth > e.clientWidth);
	}, [c]), /* @__PURE__ */ o("div", {
		"data-testid": "image-carousel",
		className: "relative",
		children: [
			d && /* @__PURE__ */ a("div", {
				className: "absolute right-full transform top-1/2 -translate-y-1/2",
				children: /* @__PURE__ */ a(t, { active: !p })
			}),
			/* @__PURE__ */ a("div", {
				ref: u,
				onScroll: (e) => {
					let t = e.currentTarget;
					m(t.scrollLeft === 0), g(t.scrollLeft + t.clientWidth === t.scrollWidth);
				},
				className: e("flex overflow-x-auto", s === "small" && "gap-2", s === "large" && "gap-4"),
				children: c.map((e, t) => /* @__PURE__ */ a(r, {
					size: s,
					src: e,
					onRemove: l ? () => l?.(t) : void 0
				}, t))
			}),
			d && /* @__PURE__ */ a("div", {
				className: "absolute left-full transform top-1/2 -translate-y-1/2",
				children: /* @__PURE__ */ a(n, { active: !h })
			})
		]
	});
}
//#endregion
export { s as ImageCarousel };

//# sourceMappingURL=image-carousel.js.map