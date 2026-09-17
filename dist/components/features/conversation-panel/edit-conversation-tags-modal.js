import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { X as n } from "../../../node_modules/lucide-react/dist/esm/icons/x.js";
import { RESERVED_CONVERSATION_TAG_KEYS as r, getDisplayConversationTags as i } from "../../../api/agent-server-adapter.js";
import { ModalBackdrop as a } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as o } from "../../shared/modals/modal-body.js";
import { BaseModalDescription as s, BaseModalTitle as c } from "../../shared/modals/confirmation-modals/base-modal.js";
import { BrandButton as l } from "../settings/brand-button.js";
import u from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/edit-conversation-tags-modal.tsx
var p = /^[a-z0-9]+$/;
function m(e, t) {
	let n = {};
	for (let [t, i] of Object.entries(e ?? {})) (r.has(t.trim().toLowerCase()) || typeof i != "string" || i !== "" && i.trim().length === 0) && (n[t] = i);
	for (let [e, r] of t) n[e] = r;
	return n;
}
function h({ tags: h, onConfirm: g, onCancel: _ }) {
	let { t: v } = e("openhands"), [y, b] = u.useState(() => i(h).map(([e, t]) => ({
		key: e,
		value: t
	}))), [x, S] = u.useState(""), [C, w] = u.useState(""), [T, E] = u.useState(null), D = u.useRef(null), O = () => {
		let e = x.trim(), n = C.trim();
		return p.test(e) ? r.has(e) ? { errorKey: t.CONVERSATION$TAG_KEY_RESERVED } : y.some((t) => t.key === e) ? { errorKey: t.CONVERSATION$TAG_KEY_DUPLICATE } : n.length > 256 ? { errorKey: t.CONVERSATION$TAG_VALUE_INVALID } : { row: {
			key: e,
			value: n
		} } : { errorKey: t.CONVERSATION$TAG_KEY_INVALID };
	}, k = () => {
		let e = O();
		if ("errorKey" in e) {
			E(e.errorKey);
			return;
		}
		b((t) => [...t, e.row]), S(""), w(""), E(null), D.current?.focus();
	}, A = (e) => {
		e.key === "Enter" && (e.preventDefault(), k());
	}, j = (e) => {
		b((t) => t.filter((t) => t.key !== e));
	};
	return /* @__PURE__ */ d(a, {
		onClose: _,
		children: /* @__PURE__ */ f(o, {
			className: "items-start border border-[var(--oh-border)]",
			testID: "edit-conversation-tags-modal",
			children: [
				/* @__PURE__ */ f("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ d(c, { title: v(t.CONVERSATION$EDIT_TAGS) }), /* @__PURE__ */ d(s, { children: v(t.CONVERSATION$EDIT_TAGS_DESCRIPTION) })]
				}),
				/* @__PURE__ */ f("div", {
					className: "flex w-full flex-col gap-2",
					onClick: (e) => e.stopPropagation(),
					children: [
						y.length > 0 ? /* @__PURE__ */ d("ul", {
							className: "flex w-full flex-col gap-1",
							"data-testid": "edit-tags-rows",
							children: y.map((e) => /* @__PURE__ */ f("li", {
								className: "flex items-center gap-2 rounded-md border border-[var(--oh-border)] px-2 py-1",
								"data-testid": `edit-tag-row-${e.key}`,
								children: [/* @__PURE__ */ d("span", {
									className: "min-w-0 flex-1 truncate text-xs text-white",
									children: e.value ? `${e.key}=${e.value}` : e.key
								}), /* @__PURE__ */ d("button", {
									type: "button",
									"aria-label": v(t.CONVERSATION$REMOVE_TAG),
									"data-testid": `remove-tag-${e.key}`,
									onClick: () => j(e.key),
									className: "shrink-0 text-[var(--oh-muted)] hover:text-white",
									children: /* @__PURE__ */ d(n, {
										className: "h-3.5 w-3.5",
										"aria-hidden": !0
									})
								})]
							}, e.key))
						}) : null,
						/* @__PURE__ */ f("div", {
							className: "flex w-full items-center gap-2",
							children: [
								/* @__PURE__ */ d("input", {
									type: "text",
									value: x,
									placeholder: v(t.CONVERSATION$TAG_KEY_PLACEHOLDER),
									"aria-label": v(t.CONVERSATION$TAG_KEY_PLACEHOLDER),
									"data-testid": "new-tag-key-input",
									ref: D,
									onChange: (e) => S(e.target.value),
									onKeyDown: A,
									className: "w-28 shrink-0 rounded-md border border-[var(--oh-border)] bg-base-secondary px-2 py-1 text-xs text-white placeholder:text-[var(--oh-muted)]"
								}),
								/* @__PURE__ */ d("input", {
									type: "text",
									value: C,
									placeholder: v(t.CONVERSATION$TAG_VALUE_PLACEHOLDER),
									"aria-label": v(t.CONVERSATION$TAG_VALUE_PLACEHOLDER),
									"data-testid": "new-tag-value-input",
									onChange: (e) => w(e.target.value),
									onKeyDown: A,
									className: "min-w-0 flex-1 rounded-md border border-[var(--oh-border)] bg-base-secondary px-2 py-1 text-xs text-white placeholder:text-[var(--oh-muted)]"
								}),
								/* @__PURE__ */ d(l, {
									type: "button",
									variant: "secondary",
									onClick: k,
									testId: "add-tag-button",
									children: v(t.BUTTON$ADD)
								})
							]
						}),
						T ? /* @__PURE__ */ d("p", {
							role: "alert",
							"data-testid": "edit-tags-error",
							className: "text-xs text-red-400",
							children: v(T)
						}) : null
					]
				}),
				/* @__PURE__ */ f("div", {
					className: "flex justify-end gap-2 w-full",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ d(l, {
						type: "button",
						variant: "secondary",
						onClick: _,
						testId: "cancel-button",
						children: v(t.BUTTON$CANCEL)
					}), /* @__PURE__ */ d(l, {
						type: "button",
						variant: "primary",
						onClick: () => {
							let e = x.trim() !== "" || C.trim() !== "", t = y;
							if (e) {
								let e = O();
								if ("errorKey" in e) {
									E(e.errorKey);
									return;
								}
								t = [...y, e.row];
							}
							g(m(h, t.map((e) => [e.key, e.value])));
						},
						testId: "confirm-button",
						children: v(t.BUTTON$SAVE)
					})]
				})
			]
		})
	});
}
//#endregion
export { h as EditConversationTagsModal };

//# sourceMappingURL=edit-conversation-tags-modal.js.map