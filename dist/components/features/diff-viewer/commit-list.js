import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { CommitRow as n } from "./commit-row.js";
import { UncommittedChangesRow as r } from "./uncommitted-changes-row.js";
import i from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/diff-viewer/commit-list.tsx
var s = "uncommitted";
function c({ commits: c, hasMore: l, uncommittedChanges: u, autoExpandUncommitted: d = !1, onAutoExpandHandled: f }) {
	let { t: p } = e("openhands"), [m, h] = i.useState(null);
	i.useEffect(() => {
		d && (h(s), f?.());
	}, [d, f]);
	let g = new Set(c.map((e) => e.author)).size > 1;
	return /* @__PURE__ */ o("section", {
		"data-testid": "commit-list",
		className: "w-full flex flex-col",
		children: [
			/* @__PURE__ */ a(r, {
				changes: u,
				isExpanded: m === s,
				onToggle: () => h((e) => e === s ? null : s)
			}),
			c.map((e) => /* @__PURE__ */ a(n, {
				commit: e,
				showAuthor: g,
				isExpanded: m === e.sha,
				onToggle: () => h((t) => t === e.sha ? null : e.sha)
			}, e.sha)),
			l && /* @__PURE__ */ a("div", {
				"data-testid": "commit-list-cap-notice",
				className: "px-3 py-2.5 text-xs text-[var(--oh-muted)]",
				children: p(t.DIFF_VIEWER$COMMITS_CAP, { count: c.length })
			})
		]
	});
}
//#endregion
export { c as CommitList };

//# sourceMappingURL=commit-list.js.map