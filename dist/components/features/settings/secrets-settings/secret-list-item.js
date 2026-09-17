import { Pencil as e } from "../../../../node_modules/lucide-react/dist/esm/icons/pencil.js";
import { Trash2 as t } from "../../../../node_modules/lucide-react/dist/esm/icons/trash-2.js";
import { cn as n } from "../../../../utils/utils.js";
import { settingsListIconActionButtonClassName as r, settingsListRowClassName as i, settingsListTableCellClassName as a, settingsListTableRowClassName as o } from "../../../../utils/settings-list-classes.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/settings/secrets-settings/secret-list-item.tsx
function l() {
	return /* @__PURE__ */ c("div", {
		className: n(i, "justify-between border-t border-[var(--oh-border)] first:border-t-0"),
		children: [/* @__PURE__ */ c("div", {
			className: "flex min-w-0 flex-1 items-center gap-4",
			children: [/* @__PURE__ */ s("span", { className: "skeleton h-4 w-1/4" }), /* @__PURE__ */ s("span", { className: "skeleton h-4 w-1/2" })]
		}), /* @__PURE__ */ c("div", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ s("span", { className: "skeleton h-4 w-4" }), /* @__PURE__ */ s("span", { className: "skeleton h-4 w-4" })]
		})]
	});
}
function u({ title: i, description: l, onEdit: u, onDelete: d }) {
	return /* @__PURE__ */ c("tr", {
		"data-testid": "secret-item",
		className: o,
		children: [
			/* @__PURE__ */ s("td", {
				className: n(a, "text-content-2 truncate"),
				title: i,
				children: i
			}),
			/* @__PURE__ */ s("td", {
				className: n(a, "truncate text-content-2 opacity-80"),
				title: l || "",
				children: l || ""
			}),
			/* @__PURE__ */ s("td", {
				className: a,
				children: /* @__PURE__ */ c("div", {
					className: "flex items-center justify-end gap-0.5",
					children: [/* @__PURE__ */ s("button", {
						"data-testid": "edit-secret-button",
						type: "button",
						onClick: u,
						"aria-label": `Edit ${i}`,
						className: r,
						children: /* @__PURE__ */ s(e, {
							"aria-hidden": !0,
							className: "size-4",
							strokeWidth: 2
						})
					}), /* @__PURE__ */ s("button", {
						"data-testid": "delete-secret-button",
						type: "button",
						onClick: d,
						"aria-label": `Delete ${i}`,
						className: r,
						children: /* @__PURE__ */ s(t, {
							"aria-hidden": !0,
							className: "size-4",
							strokeWidth: 2
						})
					})]
				})
			})
		]
	});
}
//#endregion
export { u as SecretListItem, l as SecretListItemSkeleton };

//# sourceMappingURL=secret-list-item.js.map