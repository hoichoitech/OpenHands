import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { useNavigation as ee } from "../../../context/navigation-context.js";
import { StyledTooltip as r } from "../../shared/buttons/styled-tooltip.js";
import { dropdownMenuListClassName as i, dropdownMenuRowClassName as te, dropdownMenuRowIconWrapperClassName as ne } from "../../../utils/dropdown-classes.js";
import { useCreateConversation as a } from "../../../hooks/mutation/use-create-conversation.js";
import { Divider as o } from "../../../ui/divider.js";
import s from "../../../icons/repo.js";
import { useIsCreatingConversation as c } from "../../../hooks/use-is-creating-conversation.js";
import { useLocalWorkspaces as l } from "../../../hooks/query/use-local-workspaces.js";
import { useResolvedWorkspaces as u } from "../../../hooks/query/use-resolved-workspaces.js";
import { useAddWorkspaceParents as d, useAddWorkspaces as f, useRemoveWorkspace as p, useRemoveWorkspaceParent as re } from "../../../hooks/mutation/use-local-workspaces-mutations.js";
import { getWorkspacesUnsupportedMessage as m } from "../../../utils/workspaces-compatibility.js";
import { FolderBrowserModal as h } from "../home/workspace-dropdown/folder-browser-modal.js";
import { ManageWorkspacesModal as g } from "../home/workspace-dropdown/manage-workspaces-modal.js";
import { NEW_CONVERSATION_DROPDOWN_SURFACE as _ } from "./new-conversation-dropdown-styles.js";
import { usePopoverFixedPlacement as v } from "../../../hooks/use-popover-fixed-placement.js";
import y from "react";
import { jsx as b, jsxs as x } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/local-new-conversation-menu.tsx
function S({ trigger: S, className: ie, popoverClassName: ae, popoverTestId: C = "new-conversation-popover", useFixedPlacement: w = !1 }) {
	let { t: T } = e("openhands"), { navigate: E } = ee(), [D, O] = y.useState(!1), k = y.useRef(null), A = y.useRef(null), j = v(A, {
		open: D,
		enabled: w
	}), { data: M, error: N } = l(), P = M?.workspaceParents ?? [], { mutate: F } = f(), { mutate: I } = p(), { mutate: L } = d(), { mutate: R } = re(), { workspaces: z } = u(), B = m(N, T), [V, H] = y.useState(!1), [U, W] = y.useState(!1), { mutate: G, isPending: K } = a(), q = c(), J = K || q;
	y.useEffect(() => {
		if (!D || V || U) return;
		let e = (e) => {
			k.current && !k.current.contains(e.target) && O(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [
		D,
		V,
		U
	]), y.useEffect(() => {
		if (!D || V || U) return;
		let e = (e) => {
			e.key === "Escape" && O(!1);
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [
		D,
		V,
		U
	]);
	let Y = (e) => {
		J || G({
			workingDir: e,
			entryPoint: "sidebar_local_menu"
		}, { onSuccess: (e) => {
			O(!1), E(`/conversations/${e.conversation_id}`);
		} });
	}, X = te, Z = y.useCallback((e) => {
		e.preventDefault(), e.stopPropagation();
	}, []), oe = y.useCallback(() => {
		O((e) => !e);
	}, []), se = D && (!w || j !== null), Q = !!B, ce = w && j ? {
		position: "fixed",
		top: j.top,
		left: j.left,
		width: j.width
	} : void 0, $ = /* @__PURE__ */ b("button", {
		type: "button",
		"data-testid": "add-workspaces-button",
		disabled: Q,
		onMouseDown: Z,
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), !Q && H(!0);
		},
		className: X,
		children: T(t.HOME$ADD_WORKSPACES)
	}), le = B ? /* @__PURE__ */ b(r, {
		content: B,
		placement: "top",
		children: /* @__PURE__ */ b("span", {
			className: "block",
			children: $
		})
	}) : $;
	return /* @__PURE__ */ x("div", {
		className: n(!w && "relative", ie),
		ref: k,
		children: [
			/* @__PURE__ */ b("span", {
				ref: A,
				className: "inline-flex",
				children: S({
					onClick: oe,
					"aria-expanded": D,
					"aria-haspopup": "menu",
					disabled: J
				})
			}),
			se && /* @__PURE__ */ x("div", {
				"data-testid": C,
				className: n(_, !w && n("absolute top-full mt-0", ae)),
				style: ce,
				children: [/* @__PURE__ */ x("ul", {
					className: n("max-h-[40vh] overflow-y-auto sm:max-h-[280px]", i),
					children: [/* @__PURE__ */ b("li", { children: /* @__PURE__ */ b("button", {
						type: "button",
						disabled: J,
						"data-testid": "launch-no-workspace",
						onClick: () => Y(),
						className: X,
						children: /* @__PURE__ */ b("span", {
							className: "text-[var(--oh-muted)]",
							children: T(t.HOME$NO_WORKSPACE_OPTION)
						})
					}) }), z.map((e) => /* @__PURE__ */ b("li", { children: /* @__PURE__ */ x("button", {
						type: "button",
						disabled: J,
						"data-testid": "launch-workspace",
						"data-workspace-path": e.path,
						onClick: () => Y(e.path),
						className: X,
						children: [/* @__PURE__ */ b("span", {
							className: ne,
							"aria-hidden": !0,
							children: /* @__PURE__ */ b(s, {
								width: 14,
								height: 14
							})
						}), /* @__PURE__ */ b("span", {
							className: "truncate",
							children: e.name
						})]
					}) }, e.id))]
				}), /* @__PURE__ */ x("div", {
					className: n("flex flex-col", i),
					"data-testid": "new-conversation-menu-footer",
					children: [
						/* @__PURE__ */ b(o, {
							inset: "menu",
							testId: "new-conversation-menu-footer-divider"
						}),
						le,
						(z.length > 0 || P.length > 0) && /* @__PURE__ */ b("button", {
							type: "button",
							"data-testid": "manage-workspaces-button",
							onMouseDown: Z,
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), W(!0);
							},
							className: X,
							children: T(t.HOME$MANAGE_WORKSPACES)
						})
					]
				})]
			}),
			/* @__PURE__ */ b(h, {
				isOpen: V,
				onClose: () => H(!1),
				onAdd: (e) => F(e),
				onAddParent: (e) => L(e)
			}),
			/* @__PURE__ */ b(g, {
				isOpen: U,
				workspaces: z,
				workspaceParents: P,
				onClose: () => W(!1),
				onRemove: (e) => I(e),
				onRemoveParent: (e) => R(e)
			})
		]
	});
}
//#endregion
export { S as LocalNewConversationMenu };

//# sourceMappingURL=local-new-conversation-menu.js.map