import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { FolderGit2 as n } from "../../../node_modules/lucide-react/dist/esm/icons/folder-git-2.js";
import { GitBranch as r } from "../../../node_modules/lucide-react/dist/esm/icons/git-branch.js";
import { GitCommitHorizontal as i } from "../../../node_modules/lucide-react/dist/esm/icons/git-commit-horizontal.js";
import { Laptop as a } from "../../../node_modules/lucide-react/dist/esm/icons/laptop.js";
import { cn as o } from "../../../utils/utils.js";
import { useConversationId as s } from "../../../hooks/use-conversation-id.js";
import { CONVERSATION_OVERVIEW_GIT_PART as c, CONVERSATION_OVERVIEW_SECTION as l, CONVERSATION_OVERVIEW_SECTION_GROUPS as u, isOverviewGitPartPinned as d, isOverviewSectionPinned as f } from "./conversation-overview-sections.js";
import { useConversationLocalStorageState as p } from "../../../utils/conversation-local-storage.js";
import { dropdownInstantColorClassName as m, dropdownMenuRowIconWrapperClassName as h } from "../../../utils/dropdown-classes.js";
import { ContextMenu as g } from "../../../ui/context-menu.js";
import { useClickOutsideElement as _ } from "../../../hooks/use-click-outside-element.js";
import { Divider as v } from "../../../ui/divider.js";
import { useSelectConversationTab as y } from "../../../hooks/use-select-conversation-tab.js";
import b from "../../../icons/u-pr.js";
import { LuFileDiff as x } from "../../../node_modules/react-icons/lu/index.js";
import { useConversationOverviewDrawerOptional as S } from "./conversation-overview-drawer-context.js";
import C from "../../../icons/pill.js";
import w from "../../../icons/pill-fill.js";
import { CONVERSATION_OVERVIEW_DRAWER_SECTION as T } from "./conversation-overview-drawer.types.js";
import E, { useLayoutEffect as D, useState as O } from "react";
import { Fragment as k, jsx as A, jsxs as j } from "react/jsx-runtime";
import M from "react-dom";
//#region src/components/features/conversation/conversation-overview-context-menu.tsx
var N = { [l.workspace]: {
	section: l.workspace,
	icon: a,
	i18nKey: t.CONVERSATION$OVERVIEW_WORKSPACE
} }, P = [
	{
		part: c.changes,
		icon: x,
		i18nKey: t.COMMON$CHANGES,
		opensChanges: !0
	},
	{
		part: c.repository,
		icon: n,
		i18nKey: t.CONVERSATION$REPOSITORY
	},
	{
		part: c.branch,
		icon: r,
		i18nKey: t.CONVERSATION$BRANCH
	},
	{
		part: c.commits,
		icon: i,
		i18nKey: t.DIFF_VIEWER$COMMITS,
		opensCommits: !0
	},
	{
		part: c.pull_requests,
		icon: b,
		i18nKey: t.CONVERSATION$OVERVIEW_PULL_REQUESTS,
		drawerSection: T.pull_requests
	}
];
function F({ testId: e, pinned: t, pinnedLabel: n, unpinnedLabel: r, onClick: i }) {
	return /* @__PURE__ */ A("button", {
		type: "button",
		"data-testid": e,
		className: o("flex shrink-0 cursor-pointer items-center justify-center rounded-r px-2 text-white", m, "hover:bg-white/10"),
		"aria-pressed": t,
		"aria-label": t ? n : r,
		onClick: i,
		children: /* @__PURE__ */ A("span", {
			className: o("ml-auto overflow-hidden", h),
			"aria-hidden": !0,
			children: A(t ? w : C, {
				className: "size-4",
				width: 16,
				height: 16
			})
		})
	});
}
function I({ isOpen: n, onClose: i, ignoreOutsideClickRef: a, anchorRef: c }) {
	let b = _(i, a), [x, C] = O(), { t: w } = e("openhands"), { conversationId: T } = s(), { state: I, setUnpinnedOverviewSections: L, setUnpinnedOverviewGitParts: R } = p(T), { navigateToChanges: z, navigateToCommits: B } = y(), V = S();
	D(() => {
		if (!n || !c?.current) {
			C(void 0);
			return;
		}
		let e = () => {
			let e = c.current?.getBoundingClientRect();
			e && C({
				position: "fixed",
				zIndex: 9999,
				top: e.bottom + 8,
				right: window.innerWidth - e.right
			});
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [n, c]);
	let H = (e) => {
		if (e.opensChanges) {
			V?.closeDrawer(), z(), i();
			return;
		}
		if (e.opensCommits) {
			V?.closeDrawer(), B(), i();
			return;
		}
		e.drawerSection && (V?.openSection(e.drawerSection), i());
	}, U = (e, t) => {
		t.preventDefault(), t.stopPropagation();
		let n = I.unpinnedOverviewSections ?? [];
		if (n.includes(e)) {
			L?.(n.filter((t) => t !== e));
			return;
		}
		L?.([...n, e]);
	}, W = (e, t) => {
		t.preventDefault(), t.stopPropagation();
		let n = I.unpinnedOverviewGitParts ?? [];
		if (n.includes(e)) {
			R?.(n.filter((t) => t !== e));
			return;
		}
		R?.([...n, e]);
	};
	if (!n) return null;
	let G = !!(c?.current && x), K = f(l.git, I.unpinnedOverviewSections ?? []), q = w(t.CONVERSATION$UNPIN_OVERVIEW_SECTION), J = w(t.CONVERSATION$PIN_OVERVIEW_SECTION), Y = ({ key: e, testIdOpen: t, testIdPin: n, icon: r, label: i, pinned: a, isActionable: s, indent: c = !1, onOpen: l, onPinToggle: u }) => {
		let d = /* @__PURE__ */ j(k, { children: [/* @__PURE__ */ A("span", {
			className: h,
			"aria-hidden": !0,
			children: /* @__PURE__ */ A(r, { className: "h-4 w-4" })
		}), /* @__PURE__ */ A("span", {
			className: "text-sm",
			children: i
		})] });
		return /* @__PURE__ */ A("li", {
			className: "list-none",
			children: /* @__PURE__ */ j("div", {
				className: o("group flex h-[30px] w-full min-w-0 items-stretch rounded hover:bg-[var(--oh-interactive-hover)]", c && "pl-4"),
				children: [s ? /* @__PURE__ */ A("button", {
					type: "button",
					"data-testid": t,
					className: o("flex min-w-0 flex-1 cursor-pointer items-center gap-2 rounded-l p-2 text-start text-white", m),
					onClick: l,
					children: d
				}) : /* @__PURE__ */ A("div", {
					"data-testid": t,
					className: o("flex min-w-0 flex-1 items-center gap-2 rounded-l p-2 text-start text-white", m),
					children: d
				}), /* @__PURE__ */ A(F, {
					testId: n,
					pinned: a,
					pinnedLabel: q,
					unpinnedLabel: J,
					onClick: u
				})]
			})
		}, e);
	}, X = (e) => {
		if (e === l.git) return null;
		let t = N[e];
		return Y({
			key: e,
			testIdOpen: `conversation-overview-menu-open-${e}`,
			testIdPin: `conversation-overview-menu-pin-${e}`,
			icon: t.icon,
			label: w(t.i18nKey),
			pinned: f(e, I.unpinnedOverviewSections ?? []),
			isActionable: !1,
			onPinToggle: (t) => U(e, t)
		});
	}, Z = /* @__PURE__ */ j(g, {
		ref: b,
		testId: "conversation-overview-context-menu",
		theme: G ? "popover" : "default",
		position: G ? "none" : "bottom",
		alignment: G ? "none" : "right",
		spacing: G ? "none" : "default",
		className: o("z-[9999] w-fit", G ? "mt-0" : "mt-2"),
		children: [
			u.map((e, t) => /* @__PURE__ */ j(E.Fragment, { children: [t > 0 ? /* @__PURE__ */ A(v, {
				testId: `conversation-overview-menu-divider-${t}`,
				inset: "menu"
			}) : null, e.sections.map((e) => X(e))] }, e.sections.join("-"))),
			/* @__PURE__ */ A(v, {
				testId: "conversation-overview-menu-divider-git",
				inset: "menu"
			}),
			Y({
				key: l.git,
				testIdOpen: `conversation-overview-menu-open-${l.git}`,
				testIdPin: `conversation-overview-menu-pin-${l.git}`,
				icon: r,
				label: w(t.CONVERSATION$OVERVIEW_GIT),
				pinned: K,
				isActionable: !1,
				onPinToggle: (e) => U(l.git, e)
			}),
			P.map((e) => Y({
				key: e.part,
				testIdOpen: `conversation-overview-menu-open-git-${e.part}`,
				testIdPin: `conversation-overview-menu-pin-git-${e.part}`,
				icon: e.icon,
				label: w(e.i18nKey),
				pinned: d(e.part, I.unpinnedOverviewGitParts ?? []),
				isActionable: !!(e.drawerSection || e.opensCommits || e.opensChanges),
				indent: !0,
				onOpen: () => H(e),
				onPinToggle: (t) => W(e.part, t)
			}))
		]
	});
	return G && x && typeof document < "u" ? M.createPortal(/* @__PURE__ */ A("div", {
		style: x,
		children: Z
	}), document.body) : Z;
}
//#endregion
export { I as ConversationOverviewContextMenu };

//# sourceMappingURL=conversation-overview-context-menu.js.map