import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { cn as n } from "../utils/utils.js";
import { useQueryClient as r } from "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { Typography as i } from "../ui/typography.js";
import { LoadingSpinner as a } from "../components/shared/loading-spinner.js";
import { BrandButton as o } from "../components/features/settings/brand-button.js";
import "../utils/extension-module-card-classes.js";
import { ConfirmationModal as s } from "../components/shared/modals/confirmation-modal.js";
import { useSearchSecrets as c } from "../hooks/query/use-get-secrets.js";
import { useDeleteSecret as l } from "../hooks/mutation/use-delete-secret.js";
import { SecretForm as u } from "../components/features/settings/secrets-settings/secret-form.js";
import { settingsListScrollContainerClassName as d, settingsListTableHeadClassName as f, settingsListTableHeaderCellClassName as p } from "../utils/settings-list-classes.js";
import { BackNavButton as m } from "../components/shared/buttons/back-nav-button.js";
import { SecretListItem as h, SecretListItemSkeleton as g } from "../components/features/settings/secrets-settings/secret-list-item.js";
import _, { useCallback as v, useRef as y } from "react";
import { jsx as b, jsxs as x } from "react/jsx-runtime";
//#region src/routes/secrets-settings.tsx
function S() {
	let S = r(), { t: C } = e("openhands"), w = y(null), { data: T, isLoading: E, hasNextPage: D, isFetchingNextPage: O, onLoadMore: k } = c(), { mutate: A } = l(), [j, M] = _.useState("list"), [N, P] = _.useState(null), [F, I] = _.useState(!1), L = v((e) => {
		let t = e.currentTarget;
		t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && D && !O && k();
	}, [
		D,
		O,
		k
	]), R = () => {
		S.invalidateQueries({ queryKey: ["secrets-search"] }), S.invalidateQueries({ queryKey: ["secrets"] });
	}, z = (e) => {
		A(e, {
			onSettled: () => {
				I(!1);
			},
			onSuccess: R,
			onError: R
		});
	}, B = () => {
		N && z(N);
	}, V = () => {
		I(!1);
	}, H = () => {
		M("list"), P(null);
	}, U = j === "add-secret-form" || j === "edit-secret-form", W = C(j === "add-secret-form" ? t.SECRETS$ADD_A_SECRET : t.SECRETS$EDIT_A_SECRET);
	return /* @__PURE__ */ x("div", {
		"data-testid": "secrets-settings-screen",
		className: "flex flex-col gap-6",
		children: [
			j === "list" ? /* @__PURE__ */ x("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ x("div", {
					className: "min-w-0 space-y-1",
					children: [/* @__PURE__ */ b(i.H2, { children: C(t.SETTINGS$NAV_SECRETS) }), /* @__PURE__ */ b("p", {
						"data-testid": "settings-page-subtitle",
						className: "text-sm leading-5 text-tertiary-light",
						children: C(t.SETTINGS$PAGE_SECRETS_SUBLINE)
					})]
				}), /* @__PURE__ */ b(o, {
					testId: "add-secret-button",
					type: "button",
					variant: "primary",
					className: "shrink-0 whitespace-nowrap",
					onClick: () => M("add-secret-form"),
					isDisabled: E,
					children: C(t.SECRETS$ADD_NEW_SECRET)
				})]
			}) : null,
			U ? /* @__PURE__ */ x("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ b(m, {
					testId: "back-to-secrets",
					onClick: H,
					children: C(t.BUTTON$BACK)
				}), /* @__PURE__ */ b(i.H2, {
					testId: "secret-editor-title",
					children: W
				})]
			}) : null,
			E && j === "list" && /* @__PURE__ */ x("ul", { children: [
				/* @__PURE__ */ b(g, {}),
				/* @__PURE__ */ b(g, {}),
				/* @__PURE__ */ b(g, {})
			] }),
			j === "list" && !E && T?.length === 0 && /* @__PURE__ */ b("div", {
				"data-testid": "secrets-empty",
				className: "rounded-xl border border-[var(--oh-border)] p-8 text-center",
				children: /* @__PURE__ */ b("p", {
					className: "text-sm text-[var(--oh-muted)]",
					children: C(t.SECRETS$EMPTY)
				})
			}),
			j === "list" && !E && (T?.length ?? 0) > 0 && /* @__PURE__ */ x("div", {
				ref: w,
				className: d,
				onScroll: L,
				children: [/* @__PURE__ */ x("table", {
					className: "w-full min-w-full table-fixed",
					children: [/* @__PURE__ */ b("thead", {
						className: f,
						children: /* @__PURE__ */ x("tr", { children: [
							/* @__PURE__ */ b("th", {
								className: n(p, "w-1/4"),
								children: C(t.SETTINGS$NAME)
							}),
							/* @__PURE__ */ b("th", {
								className: n(p, "w-1/2"),
								children: C(t.SECRETS$DESCRIPTION)
							}),
							/* @__PURE__ */ b("th", {
								className: n(p, "w-1/4 text-right"),
								children: C(t.SETTINGS$ACTIONS)
							})
						] })
					}), /* @__PURE__ */ b("tbody", { children: T?.map((e) => /* @__PURE__ */ b(h, {
						title: e.name,
						description: e.description,
						onEdit: () => {
							M("edit-secret-form"), P(e.name);
						},
						onDelete: () => {
							I(!0), P(e.name);
						}
					}, e.name)) })]
				}), O && /* @__PURE__ */ b("div", {
					className: "flex justify-center p-4",
					children: /* @__PURE__ */ b(a, { size: "small" })
				})]
			}),
			(j === "add-secret-form" || j === "edit-secret-form") && /* @__PURE__ */ b(u, {
				mode: j === "add-secret-form" ? "add" : "edit",
				selectedSecret: N,
				onCancel: H
			}),
			F && /* @__PURE__ */ b(s, {
				text: C(t.SECRETS$CONFIRM_DELETE_KEY),
				onConfirm: B,
				onCancel: V
			})
		]
	});
}
//#endregion
export { S as default };

//# sourceMappingURL=secrets-settings.js.map