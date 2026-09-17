import { Markdown as e } from "../../../node_modules/react-markdown/lib/index.js";
import t from "../../../node_modules/remark-gfm/lib/index.js";
import n from "../../../node_modules/remark-breaks/lib/index.js";
import r from "../../../node_modules/rehype-raw/lib/index.js";
import { defaultSchema as i } from "../../../node_modules/hast-util-sanitize/lib/schema.js";
import a from "../../../node_modules/rehype-sanitize/lib/index.js";
import { code as o } from "./code.js";
import { li as s, ol as c, ul as l } from "./list.js";
import { paragraph as u } from "./paragraph.js";
import { anchor as d } from "./anchor.js";
import { h1 as f, h2 as p, h3 as m, h4 as h, h5 as g, h6 as _ } from "./headings.js";
import { table as v, td as y, th as b } from "./table.js";
import { blockquote as x } from "./blockquote.js";
import { hr as S } from "./horizontal-rule.js";
import { remarkGithubAlerts as C } from "./remark-github-alerts.js";
import { jsx as w } from "react/jsx-runtime";
//#region src/components/features/markdown/markdown-renderer.tsx
var T = {
	...i,
	attributes: {
		...i.attributes,
		"*": [
			...i.attributes?.["*"] ?? [],
			"className",
			"id"
		],
		a: [
			"href",
			"title",
			"target",
			"rel"
		],
		img: [
			...i.attributes?.img ?? [],
			"src",
			"alt",
			"title",
			"width",
			"height",
			"loading"
		]
	},
	tagNames: [
		...i.tagNames ?? [],
		"img",
		"details",
		"summary",
		"figure",
		"figcaption",
		"mark",
		"kbd",
		"sub",
		"sup"
	],
	protocols: {
		...i.protocols,
		src: ["http", "https"],
		href: [
			"http",
			"https",
			"mailto",
			"tel"
		]
	}
};
function E({ children: i, content: E, components: D, includeStandard: O = !1, includeHeadings: k = !1, allowHtml: A = !0 }) {
	return /* @__PURE__ */ w("div", {
		"data-testid": "markdown-renderer",
		children: /* @__PURE__ */ w(e, {
			components: {
				code: o,
				ul: l,
				ol: c,
				li: s,
				hr: S,
				table: v,
				th: b,
				td: y,
				blockquote: x,
				...O && {
					a: d,
					p: u
				},
				...k && {
					h1: f,
					h2: p,
					h3: m,
					h4: h,
					h5: g,
					h6: _
				},
				...D
			},
			remarkPlugins: [
				C,
				t,
				n
			],
			rehypePlugins: A ? [r, [a, T]] : void 0,
			children: E ?? i ?? ""
		})
	});
}
//#endregion
export { E as MarkdownRenderer };

//# sourceMappingURL=markdown-renderer.js.map