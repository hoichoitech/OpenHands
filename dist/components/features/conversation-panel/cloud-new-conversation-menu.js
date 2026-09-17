import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { useNavigation as r } from "../../../context/navigation-context.js";
import { dropdownMenuListClassName as i, dropdownMenuRowClassName as ee, dropdownMenuRowIconWrapperClassName as a } from "../../../utils/dropdown-classes.js";
import { useCreateConversation as o } from "../../../hooks/mutation/use-create-conversation.js";
import { Divider as s } from "../../../ui/divider.js";
import { useUserProviders as c } from "../../../hooks/use-user-providers.js";
import { GitProviderIcon as l } from "../../shared/git-provider-icon.js";
import { useDebounce as u } from "../../../hooks/use-debounce.js";
import { useGitRepositories as d } from "../../../hooks/query/use-git-repositories.js";
import { useSearchRepositories as f } from "../../../hooks/query/use-search-repositories.js";
import p from "../../../icons/repo.js";
import { useHomeStore as te } from "../../../stores/home-store.js";
import { useIsCreatingConversation as ne } from "../../../hooks/use-is-creating-conversation.js";
import { NEW_CONVERSATION_DROPDOWN_SURFACE as m } from "./new-conversation-dropdown-styles.js";
import { usePopoverFixedPlacement as h } from "../../../hooks/use-popover-fixed-placement.js";
import g from "../../../icons/search.js";
import _ from "react";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/cloud-new-conversation-menu.tsx
function b({ repo: e, disabled: t, onSelect: n, itemClass: r }) {
	return /* @__PURE__ */ v("li", { children: /* @__PURE__ */ y("button", {
		type: "button",
		disabled: t,
		"data-testid": "launch-repository",
		"data-repo-name": e.full_name,
		onClick: () => n(e),
		className: r,
		children: [/* @__PURE__ */ v("span", {
			className: a,
			"aria-hidden": !0,
			children: /* @__PURE__ */ v(p, {
				width: 14,
				height: 14
			})
		}), /* @__PURE__ */ v("span", {
			className: "truncate",
			children: e.full_name
		})]
	}) });
}
function x({ trigger: a, className: p, popoverClassName: x, popoverTestId: S = "new-conversation-popover", useFixedPlacement: C = !1 }) {
	let { t: w } = e("openhands"), { navigate: T } = r(), { providers: E } = c(), { lastSelectedProvider: D, setLastSelectedProvider: re } = te(), [O, k] = _.useState(!1), A = _.useRef(null), j = _.useRef(null), M = h(j, {
		open: O,
		enabled: C
	}), [N, P] = _.useState(D ?? null), [F, I] = _.useState(""), L = u(F, 300);
	_.useEffect(() => {
		if (E.length === 0) {
			N !== null && P(null);
			return;
		}
		N && E.includes(N) || P(D && E.includes(D) ? D : E[0]);
	}, [
		E,
		N,
		D
	]);
	let { data: R, isLoading: z, isError: B, hasNextPage: V, isFetchingNextPage: H, fetchNextPage: U } = d({ provider: N }), { data: W, isLoading: G } = f(L, N), K = _.useMemo(() => R?.pages.flatMap((e) => e.items) ?? [], [R]), q = L ? W ?? [] : K, { mutate: J, isPending: Y } = o(), ie = ne(), X = Y || ie;
	_.useEffect(() => {
		if (!O) return;
		let e = (e) => {
			A.current && !A.current.contains(e.target) && k(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [O]), _.useEffect(() => {
		if (!O) return;
		let e = (e) => {
			e.key === "Escape" && k(!1);
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [O]);
	let ae = (e) => {
		X || J({
			repository: {
				name: e.full_name,
				gitProvider: e.git_provider,
				branch: e.main_branch ?? "main"
			},
			entryPoint: "sidebar_cloud_menu"
		}, { onSuccess: (e) => {
			k(!1), T(`/conversations/${e.conversation_id}`);
		} });
	}, oe = (e) => {
		P(e), re(e), I("");
	}, Z = ee;
	_.useEffect(() => {
		O && (L || !V || H || z || q.length === 0 || q.length >= 10 || U());
	}, [
		O,
		L,
		V,
		H,
		z,
		q.length,
		U
	]);
	let Q = L ? G : z, $ = !L && V && q.length > 0, se = _.useCallback(() => {
		k((e) => !e);
	}, []), ce = O && (!C || M !== null), le = C && M ? {
		position: "fixed",
		top: M.top,
		left: M.left,
		width: M.width
	} : void 0;
	return /* @__PURE__ */ y("div", {
		className: n(!C && "relative", p),
		ref: A,
		children: [/* @__PURE__ */ v("span", {
			ref: j,
			className: "inline-flex",
			children: a({
				onClick: se,
				"aria-expanded": O,
				"aria-haspopup": "menu",
				disabled: X
			})
		}), ce && /* @__PURE__ */ y("div", {
			"data-testid": S,
			className: n(m, !C && n("absolute top-full mt-0", x)),
			style: le,
			children: [
				E.length > 1 && /* @__PURE__ */ v("div", {
					className: "flex items-center gap-1 px-1 py-1",
					"data-testid": "cloud-provider-tabs",
					children: E.map((e) => {
						let t = e === N;
						return /* @__PURE__ */ y("button", {
							type: "button",
							"data-testid": `cloud-provider-tab-${e}`,
							onClick: () => oe(e),
							className: n("flex items-center gap-1 rounded border px-2 py-1 text-xs", "transition-none", t ? "border-[var(--oh-border-subtle)] bg-[var(--oh-interactive-hover)] text-white" : "border-transparent text-[var(--oh-text-secondary)] hover:text-white"),
							children: [/* @__PURE__ */ v(l, { gitProvider: e }), /* @__PURE__ */ v("span", {
								className: "capitalize",
								children: e
							})]
						}, e);
					})
				}),
				/* @__PURE__ */ v("div", {
					className: "px-2",
					children: /* @__PURE__ */ y("div", {
						className: "relative",
						children: [/* @__PURE__ */ v(g, {
							width: 16,
							height: 16,
							"aria-hidden": !0,
							className: "pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[var(--oh-muted)]"
						}), /* @__PURE__ */ v("input", {
							type: "text",
							"data-testid": "cloud-repo-search-input",
							value: F,
							onChange: (e) => I(e.target.value),
							placeholder: w(t.COMMON$SEARCH_REPOSITORIES),
							disabled: !N,
							className: n("w-full border-0 bg-transparent py-1.5 pl-6 pr-0 text-sm text-white", "outline-none placeholder:text-[var(--oh-muted)]", "focus:outline-none focus:ring-0", "disabled:cursor-not-allowed disabled:opacity-60")
						})]
					})
				}),
				/* @__PURE__ */ v(s, { inset: "menu" }),
				/* @__PURE__ */ y("ul", {
					className: n("max-h-[40vh] overflow-y-auto custom-scrollbar-always sm:max-h-[280px]", i),
					children: [
						Q && q.length === 0 && /* @__PURE__ */ v("li", {
							className: "px-2 py-2 text-sm text-[var(--oh-muted)] italic",
							"data-testid": "cloud-repo-loading",
							children: w(t.HOME$LOADING_REPOSITORIES)
						}),
						B && /* @__PURE__ */ v("li", {
							className: "px-2 py-2 text-sm text-[#F87171]",
							"data-testid": "cloud-repo-error",
							children: w(t.HOME$FAILED_TO_LOAD_REPOSITORIES)
						}),
						!Q && !B && q.length === 0 && !!N && /* @__PURE__ */ v("li", {
							className: "px-2 py-2 text-sm text-[var(--oh-muted)] italic",
							"data-testid": "cloud-repo-empty",
							children: w(t.GITHUB$NO_RESULTS)
						}),
						q.map((e) => /* @__PURE__ */ v(b, {
							repo: e,
							disabled: X,
							onSelect: ae,
							itemClass: Z
						}, `${e.git_provider}:${e.id}`)),
						$ && /* @__PURE__ */ v("li", { children: /* @__PURE__ */ v("button", {
							type: "button",
							"data-testid": "cloud-repo-load-more",
							disabled: H,
							onClick: () => U(),
							className: Z,
							children: /* @__PURE__ */ v("span", {
								className: "text-[var(--oh-text-secondary)]",
								children: w(H ? t.HOME$LOADING_MORE_REPOSITORIES : t.CONVERSATION$LOAD_MORE)
							})
						}) })
					]
				})
			]
		})]
	});
}
//#endregion
export { x as CloudNewConversationMenu };

//# sourceMappingURL=cloud-new-conversation-menu.js.map