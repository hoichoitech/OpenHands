import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Trash2 as n } from "../../../node_modules/lucide-react/dist/esm/icons/trash-2.js";
import { cn as r } from "../../../utils/utils.js";
import { useQueryClient as i } from "../../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useConversationOverviewDrawerOptional as a } from "./conversation-overview-drawer-context.js";
import { extensionModuleEmptyStateClassName as o } from "../../../utils/extension-module-card-classes.js";
import { ConfirmationModal as s } from "../../shared/modals/confirmation-modal.js";
import { useSearchSecrets as c } from "../../../hooks/query/use-get-secrets.js";
import { useDeleteSecret as l } from "../../../hooks/mutation/use-delete-secret.js";
import { SecretForm as u } from "../settings/secrets-settings/secret-form.js";
import { useEffect as d, useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-secrets-panel.tsx
function h({ openAdd: h }) {
	let g = i(), { t: _ } = e("openhands"), v = a()?.addRequestKey ?? 0, { data: y, isLoading: b } = c(), { mutate: x, isPending: S } = l(), [C, w] = f("list"), [T, E] = f(null);
	d(() => {
		h && w("add-secret-form");
	}, [h]), d(() => {
		v !== 0 && w("add-secret-form");
	}, [v]);
	let D = () => {
		g.invalidateQueries({ queryKey: ["secrets-search"] }), g.invalidateQueries({ queryKey: ["secrets"] });
	};
	return C === "add-secret-form" ? /* @__PURE__ */ p("div", {
		"data-testid": "conversation-overview-secrets-add-form",
		className: "flex h-full min-h-0 flex-col overflow-y-auto p-4",
		children: /* @__PURE__ */ p(u, {
			mode: "add",
			selectedSecret: null,
			onCancel: () => w("list")
		})
	}) : /* @__PURE__ */ m("div", {
		"data-testid": "conversation-overview-secrets-panel",
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ p("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-2 py-2",
			children: b ? /* @__PURE__ */ p("p", {
				className: "px-2 py-4 text-sm text-[var(--oh-muted)]",
				children: _(t.HOME$LOADING)
			}) : y && y.length > 0 ? /* @__PURE__ */ p("ul", {
				className: "flex flex-col gap-0.5",
				children: y.map((e) => /* @__PURE__ */ m("li", {
					"data-testid": "conversation-overview-secret-item",
					className: "group flex items-center gap-2 rounded-md px-2 py-2 hover:bg-white/5",
					children: [/* @__PURE__ */ m("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ p("p", {
							className: "truncate text-sm text-[var(--oh-foreground)]",
							children: e.name
						}), e.description ? /* @__PURE__ */ p("p", {
							className: "truncate text-xs text-[var(--oh-muted)]",
							children: e.description
						}) : null]
					}), /* @__PURE__ */ p("button", {
						type: "button",
						"data-testid": `conversation-overview-secret-delete-${e.name}`,
						"aria-label": _(t.BUTTON$DELETE),
						onClick: () => E(e.name),
						className: r("shrink-0 rounded-md p-1 text-[var(--oh-muted)]", "opacity-0 transition-opacity group-hover:opacity-100", "hover:bg-white/10 hover:text-[var(--oh-foreground)]"),
						children: /* @__PURE__ */ p(n, {
							className: "size-3.5",
							"aria-hidden": !0
						})
					})]
				}, e.name))
			}) : /* @__PURE__ */ p("p", {
				"data-testid": "conversation-overview-secrets-empty",
				className: r(o, "px-2 py-6 text-center text-sm"),
				children: _(t.SECRETS$EMPTY)
			})
		}), T ? /* @__PURE__ */ p(s, {
			text: _(t.SECRETS$CONFIRM_DELETE_KEY),
			isConfirming: S,
			onCancel: () => E(null),
			onConfirm: () => {
				x(T, {
					onSettled: () => E(null),
					onSuccess: D,
					onError: D
				});
			}
		}) : null]
	});
}
//#endregion
export { h as ConversationOverviewSecretsPanel };

//# sourceMappingURL=conversation-overview-secrets-panel.js.map