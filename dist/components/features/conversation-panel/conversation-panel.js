import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { isExecutionActive as n } from "../../../utils/status.js";
import { cn as r } from "../../../utils/utils.js";
import { useNavigation as i } from "../../../context/navigation-context.js";
import { displayErrorToast as ee, displaySuccessToast as te } from "../../../utils/custom-toast-handlers.js";
import { useActiveBackend as ne } from "../../../contexts/active-backend-context.js";
import { useBackendScopedPath as re } from "../../../hooks/use-backend-scoped-path.js";
import { tooltip_default as ie } from "../../../node_modules/@heroui/tooltip/dist/chunk-AUA5GDXN.js";
import { useClickOutsideElement as ae } from "../../../hooks/use-click-outside-element.js";
import { useCreateConversation as oe } from "../../../hooks/mutation/use-create-conversation.js";
import { NavigationLink as se } from "../../shared/navigation-link.js";
import { useDeleteConversation as ce } from "../../../hooks/mutation/use-delete-conversation.js";
import { useUnifiedPauseConversation as le } from "../../../hooks/mutation/use-unified-stop-conversation.js";
import { useIsCreatingConversation as ue } from "../../../hooks/use-is-creating-conversation.js";
import { useUpdateConversation as de } from "../../../hooks/mutation/use-update-conversation.js";
import { ConfirmDeleteModal as fe } from "./confirm-delete-modal.js";
import { ConfirmStopModal as pe } from "./confirm-stop-modal.js";
import { usePaginatedConversations as me } from "../../../hooks/query/use-paginated-conversations.js";
import { useResolvedWorkspaces as he } from "../../../hooks/query/use-resolved-workspaces.js";
import { useStartTasks as ge } from "../../../hooks/query/use-start-tasks.js";
import { ConfirmArchiveModal as _e } from "./confirm-archive-modal.js";
import { ExitConversationModal as ve } from "./exit-conversation-modal.js";
import { useUpdateConversationTags as ye } from "../../../hooks/mutation/use-update-conversation-tags.js";
import { EditConversationTagsModal as be } from "./edit-conversation-tags-modal.js";
import { ConversationCard as xe } from "./conversation-card/conversation-card.js";
import { ConversationCardPreview as Se } from "./conversation-card/conversation-card-preview.js";
import { StartTaskCard as Ce } from "./start-task-card/start-task-card.js";
import { ConversationCardSkeleton as we } from "./conversation-card/conversation-card-skeleton.js";
import { CompactConversationRow as Te } from "./compact-conversation-row.js";
import { OLDER_CONVERSATION_CUTOFF_MS as Ee, applyAutomationConversationFilter as De, applyGroupFolderOrder as Oe, applyTagConversationFilter as ke, collectAutomationNameFacets as Ae, collectTagFacets as je, filterOutPinnedConversations as Me, getGroupDiscoveryConversationIds as Ne, groupConversations as Pe, isOlderConversationCutoff as Fe, partitionByCutoff as Ie, resolvePinnedConversations as Le, sortConversationsByField as Re } from "./conversation-panel-list-helpers.js";
import { useConversationPanelPreferencesStore as a } from "../../../stores/conversation-panel-preferences-store.js";
import { ConversationLayoutsMenu as ze } from "./conversation-layouts-menu.js";
import { ConversationActiveTagFilters as Be } from "./conversation-active-tag-filters.js";
import { ConversationPanelNewThreadPicker as Ve } from "./conversation-panel-new-thread-picker.js";
import { ConversationGroupFolderList as He } from "./conversation-group-folder-list.js";
import { ConversationPanelPinnedSection as Ue } from "./conversation-panel-pinned-section.js";
import { useArchivedConversationsStore as o } from "../../../stores/archived-conversations-store.js";
import { usePinnedConversationsStore as s } from "../../../stores/pinned-conversations-store.js";
import c from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-panel.tsx
var We = () => {}, Ge = [];
function d({ onClose: d, compact: f = !1 }) {
	let { t: p } = e("openhands"), { conversationId: m, navigate: h } = i(), { backend: g } = ne(), Ke = re(), qe = ae(d ?? We), [Je, _] = c.useState(!1), [Ye, Xe] = c.useState(!1), [Ze, Qe] = c.useState(!1), [$e, v] = c.useState(!1), [et, tt] = c.useState(!1), [nt, y] = c.useState(!1), b = a((e) => e.showOlderConversations), rt = a((e) => e.olderConversationCutoff), it = a((e) => e.showArchivedConversations), at = a((e) => e.showRepoBranchMetadata), ot = a((e) => e.showLlmProfiles), x = a((e) => e.showTagsMetadata), st = a((e) => e.showHoverMetadata), S = a((e) => e.organizeMode), C = a((e) => e.conversationSort), ct = a((e) => e.threadScope), w = a((e) => e.automationFilterMode), lt = a((e) => e.selectedAutomationNames), T = a((e) => e.selectedTagFacets), ut = a((e) => e.toggleTagFacet), dt = a((e) => e.toggleAutomationName), ft = a((e) => e.clearFilterSelections), pt = a((e) => e.groupFolderOrder), mt = a((e) => e.setGroupFolderOrder), [ht, gt] = c.useState(!1), [_t, vt] = c.useState(!1), yt = ae(() => {
		gt(!1);
	}), [bt, xt] = c.useState(() => /* @__PURE__ */ new Set()), [St, Ct] = c.useState(() => /* @__PURE__ */ new Set()), [wt, Tt] = c.useState(!1), E = s((e) => e.pinsByBackendId[g.id] ?? Ge), Et = s((e) => e.togglePin), Dt = s((e) => e.unpinConversation), Ot = s((e) => e.pruneMissingConversations), kt = o((e) => e.archivesByBackendId[g.id] ?? Ge), At = o((e) => e.archiveConversation), D = c.useMemo(() => new Set(kt), [kt]), O = o((e) => e.removeArchivedConversation), jt = c.useCallback((e) => {
		xt((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, []), Mt = c.useCallback((e) => {
		Ct((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, []);
	c.useEffect(() => {
		S !== "grouped" && (xt(/* @__PURE__ */ new Set()), Ct(/* @__PURE__ */ new Set()));
	}, [S]);
	let Nt = c.useRef(null), [k, A] = c.useState(null), [Pt, j] = c.useState(null), [M, Ft] = c.useState(null), { data: N, isLoading: It, isFetched: P, hasNextPage: F, isFetching: Lt, isFetchingNextPage: Rt, fetchNextPage: zt } = me(), { workspaces: Bt } = he(), { data: Vt } = ge(), I = c.useMemo(() => {
		let e = N?.pages.flatMap((e) => e.items) ?? [], t = /* @__PURE__ */ new Set();
		return e.filter((e) => t.has(e.id) ? !1 : (t.add(e.id), !0));
	}, [N]), Ht = c.useMemo(() => {
		let e = /* @__PURE__ */ new Map();
		return N?.pages.forEach((t, n) => {
			t.items.forEach((t) => {
				e.has(t.id) || e.set(t.id, n);
			});
		}), e;
	}, [N]), L = c.useMemo(() => it ? I : I.filter((e) => !D.has(e.id)), [
		I,
		D,
		it
	]), R = c.useMemo(() => Ae(L), [L]), Ut = c.useMemo(() => {
		if (f || S !== "grouped" || g.kind !== "local") return [];
		let e = (e) => e.trim().replace(/\/+$/, ""), t = /* @__PURE__ */ new Map();
		for (let n of Bt) {
			let r = e(n.path);
			r && t.set(r, n);
		}
		for (let n of L) {
			let r = n.selected_workspace ? e(n.selected_workspace) : "";
			if (r && !t.has(r)) {
				let e = r.split("/").filter(Boolean).pop() ?? r;
				t.set(r, {
					id: r,
					name: e,
					path: r
				});
			}
		}
		return Array.from(t.values());
	}, [
		g.kind,
		f,
		L,
		Bt,
		S
	]), z = c.useMemo(() => De(L, w, lt, R), [
		w,
		R,
		L,
		lt
	]), B = c.useMemo(() => je(L), [L]), V = c.useMemo(() => ke(z, T, B), [
		z,
		T,
		B
	]), Wt = c.useMemo(() => Le(E, L), [L, E]);
	c.useEffect(() => {
		if (!P) return;
		let e = N?.pages.flatMap((e) => e.items.map((e) => e.id)) ?? [];
		Ot(g.id, e);
	}, [
		g.id,
		N,
		P,
		Ot
	]), c.useEffect(() => {
		E.length === 0 && Tt(!1);
	}, [E.length]);
	let Gt = c.useMemo(() => {
		let e = ct === "relevant" ? V.filter((e) => n(e.execution_status)) : V;
		return f ? e : Me(e, E);
	}, [
		V,
		f,
		E,
		ct
	]), { recent: H, older: U } = c.useMemo(() => Ie(Gt, Ee[Fe(rt) ? rt : "7d"]), [rt, Gt]), Kt = c.useMemo(() => Re(b ? [...H, ...U] : H, C), [
		H,
		U,
		b,
		C
	]), qt = c.useMemo(() => ({
		emptyWorkspace: p(t.CONVERSATION_PANEL$NO_WORKSPACE),
		emptyRepository: p(t.CONVERSATION_PANEL$NO_REPOSITORY)
	}), [p]), W = c.useMemo(() => f || S !== "grouped" ? null : [...H, ...b ? U : []], [
		f,
		U,
		S,
		H,
		b
	]), G = c.useMemo(() => W ? Pe(W, g.kind, C, qt, Ut) : null, [
		g.kind,
		C,
		qt,
		W,
		Ut
	]), Jt = c.useMemo(() => W ? Ne(W, Ht, g.kind, { forceIncludeConversationId: m }) : null, [
		g.kind,
		Ht,
		m,
		W
	]), K = c.useMemo(() => G ? Oe(G, pt) : null, [G, pt]), Yt = c.useMemo(() => G?.map((e) => e.id) ?? [], [G]), Xt = c.useMemo(() => Re(H.filter((e) => n(e.execution_status)), C), [C, H]), Zt = Kt.length, Qt = K?.length ?? 0, $t = S === "grouped" && !f ? Qt === 0 : Zt === 0, en = $t && w !== "all" && L.length > 0 && z.length === 0, tn = $t && T.length > 0 && z.length > 0 && V.length === 0, q = S === "grouped" && !f ? Qt : Zt, J = N?.pages.length ?? 0, [Y, nn] = c.useState(null), [X, rn] = c.useState(null), an = c.useRef(q);
	an.current = q;
	let on = c.useRef(J);
	on.current = J;
	let Z = c.useCallback(() => {
		nn(null), rn(null);
	}, []), sn = c.useCallback(() => {
		F && (nn(an.current), rn(on.current));
	}, [F]);
	c.useEffect(() => {
		if (Y !== null) {
			if (q > Y) {
				Z();
				return;
			}
			if (S === "grouped" && !f && X != null && J >= X + 3) {
				Z();
				return;
			}
			if (!(Lt || Rt)) {
				if (!F) {
					Z();
					return;
				}
				zt();
			}
		}
	}, [
		Z,
		f,
		Y,
		X,
		q,
		J,
		S,
		F,
		Lt,
		Rt,
		zt
	]);
	let cn = Y !== null || Rt, { mutate: ln, mutateAsync: un } = ce(), { mutate: dn } = le(), { mutate: fn } = de(), { mutate: pn } = ye(), mn = U.length > 0 && !b, hn = !!F && !mn && !f, { mutate: gn } = oe(), _n = ue(), vn = c.useCallback((e) => {
		_n || gn({
			workingDir: e.workingDir,
			repository: e.repository,
			entryPoint: "sidebar_relaunch_project"
		}, { onSuccess: (e) => {
			h(`/conversations/${e.conversation_id}`);
		} });
	}, [
		gn,
		_n,
		h
	]), yn = c.useCallback((e, t) => {
		_(!0), A(e), j(t);
	}, []), bn = c.useCallback((e, t) => {
		Xe(!0), A(e), j(t);
	}, []), xn = c.useCallback((e) => {
		Qe(!0), A(e);
	}, []), Sn = c.useCallback((e) => {
		k && pn({
			conversationId: k,
			tags: e
		}, { onSuccess: () => {
			te(p(t.CONVERSATION$TAGS_UPDATED));
		} });
	}, [
		k,
		p,
		pn
	]), Cn = c.useCallback((e) => {
		O(g.id, e);
	}, [g.id, O]), wn = c.useCallback((e) => {
		v(!0), A(e);
	}, []), Tn = c.useCallback((e, n) => {
		fn({
			conversationId: e,
			newTitle: n
		}, { onSuccess: () => {
			te(p(t.CONVERSATION$TITLE_UPDATED));
		} });
	}, [p, fn]), En = () => {
		if (k) {
			let e = k;
			ln({ conversationId: e }, { onSuccess: () => {
				O(g.id, e), e === m && h("/conversations");
			} });
		}
	}, Dn = () => {
		k && (At(g.id, k), Dt(g.id, k), k === m && h("/conversations"));
	}, On = () => {
		k && dn({ conversationId: k });
	}, kn = async () => {
		let e = I.map((e) => e.id), t = await Promise.allSettled(e.map((e) => un({ conversationId: e }))), n = t.flatMap((t, n) => t.status === "fulfilled" ? [e[n]] : []), r = t.length - n.length;
		for (let e of n) O(g.id, e);
		m !== null && n.includes(m) && h("/conversations"), r > 0 && ee(`${r} conversation${r === 1 ? "" : "s"} could not be deleted.`);
	}, Q = c.useCallback((e, t) => {
		let n = E.includes(e.id), i = D.has(e.id);
		return f ? /* @__PURE__ */ l(Te, {
			conversationId: e.id,
			title: e.title ?? "",
			selectedRepository: {
				selected_repository: e.selected_repository,
				selected_branch: e.selected_branch,
				git_provider: e.git_provider
			},
			executionStatus: e.execution_status,
			sandboxStatus: e.sandbox_status,
			lastUpdatedAt: e.updated_at,
			createdAt: e.created_at,
			workspaceWorkingDir: e.selected_workspace ?? e.workspace?.working_dir,
			isActive: e.id === m,
			onClose: d,
			showRepositoryMetadata: at,
			llmModel: e.llm_model,
			showLlmProfiles: ot,
			agentKind: e.agent_kind,
			acpServer: e.acp_server,
			tags: e.tags,
			showTags: x
		}, e.id) : /* @__PURE__ */ l(ie, {
			placement: "right-start",
			delay: 1e3,
			closeDelay: 100,
			isDisabled: !st || M === e.id,
			disableAnimation: !1,
			className: "max-w-none overflow-visible rounded-xl border border-[var(--oh-border)] bg-base-secondary p-0 text-white shadow-xl",
			content: /* @__PURE__ */ l(Se, {
				title: e.title ?? "",
				executionStatus: e.execution_status,
				sandboxStatus: e.sandbox_status,
				selectedRepository: {
					selected_repository: e.selected_repository,
					selected_branch: e.selected_branch,
					git_provider: e.git_provider
				},
				workspaceWorkingDir: e.selected_workspace ?? e.workspace?.working_dir,
				llmModel: e.llm_model,
				agentKind: e.agent_kind,
				acpServer: e.acp_server,
				createdAt: e.created_at,
				tags: e.tags
			}),
			children: /* @__PURE__ */ l(se, {
				to: Ke(`/conversations/${e.id}`),
				onClick: d,
				className: r("block rounded-md transition-colors", M !== e.id && "hover:bg-[var(--oh-surface)]", (e.id === m || M === e.id) && "bg-[var(--oh-surface)]"),
				children: /* @__PURE__ */ l(xe, {
					onDelete: () => yn(e.id, e.title ?? ""),
					onArchive: i ? void 0 : () => bn(e.id, e.title ?? ""),
					onUnarchive: i ? () => Cn(e.id) : void 0,
					onStop: () => wn(e.id),
					onEditTags: g.kind === "local" ? () => xn(e.id) : void 0,
					onChangeTitle: (t) => Tn(e.id, t),
					title: e.title ?? "",
					selectedRepository: {
						selected_repository: e.selected_repository,
						selected_branch: e.selected_branch,
						git_provider: e.git_provider
					},
					lastUpdatedAt: e.updated_at,
					createdAt: e.created_at,
					executionStatus: e.execution_status,
					sandboxStatus: e.sandbox_status,
					conversationId: e.id,
					contextMenuOpen: M === e.id,
					onContextMenuToggle: (t) => Ft(t ? e.id : null),
					isActive: e.id === m,
					workspaceWorkingDir: e.selected_workspace ?? e.workspace?.working_dir,
					showRepositoryMetadata: at,
					llmModel: e.llm_model,
					showLlmProfiles: ot,
					agentKind: e.agent_kind,
					acpServer: e.acp_server,
					tags: e.tags,
					showTags: x,
					isArchived: i,
					isPinned: n,
					onTogglePin: () => Et(g.id, e.id),
					alwaysShowPinIcon: n && !t?.inPinnedSection
				})
			})
		}, e.id);
	}, [
		g.id,
		g.kind,
		D,
		f,
		m,
		bn,
		Tn,
		yn,
		xn,
		wn,
		Cn,
		d,
		M,
		E,
		at,
		ot,
		x,
		st,
		Et
	]), $ = It || !P, An = !f && !$ && Wt.length > 0, jn = S === "grouped" && !f && K != null && K.length > 0, Mn = P && !It && !f && $t && !An && !Vt?.length && !jn;
	return /* @__PURE__ */ u("div", {
		ref: qe,
		"data-testid": "conversation-panel",
		className: "flex h-full min-h-0 w-full flex-col",
		children: [
			!f && /* @__PURE__ */ l("div", {
				className: r("-ml-2.5 w-[calc(100%+0.625rem)] max-w-none box-border border-b", _t ? "border-[var(--oh-border)]" : "border-transparent"),
				children: /* @__PURE__ */ u("div", {
					"data-testid": "older-conversations-summary",
					className: "flex min-w-0 flex-nowrap items-center gap-x-2 py-2 pl-4 pr-2.5 text-[var(--oh-muted)]",
					children: [/* @__PURE__ */ l("span", {
						className: "min-w-0 truncate text-sm font-medium text-[var(--oh-muted)]",
						children: p(t.SIDEBAR$CONVERSATIONS)
					}), /* @__PURE__ */ u("div", {
						className: "ml-auto flex shrink-0 items-center gap-0.5",
						children: [/* @__PURE__ */ l(Ve, { backendKind: g.kind }), /* @__PURE__ */ l(ze, {
							menuOpen: ht,
							setMenuOpen: gt,
							menuRef: yt,
							backendKind: g.kind,
							tagFacets: B,
							automationNameFacets: R,
							totalConversationsCount: I.length,
							onRequestDeleteAll: () => y(!0)
						})]
					})]
				})
			}),
			!f && /* @__PURE__ */ l(Be, {
				selectedFacets: T,
				onToggleFacet: ut,
				selectedAutomationNames: lt,
				onToggleAutomationName: dt,
				onClearAll: ft
			}),
			/* @__PURE__ */ u("div", {
				ref: Nt,
				"data-testid": "conversation-panel-list-scroll",
				onScroll: (e) => {
					vt(e.currentTarget.scrollTop > 0);
				},
				className: r("flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden overscroll-contain custom-scrollbar-always", !f && "conversation-panel-list-scroll"),
				children: [
					$ && /* @__PURE__ */ l(we, { compact: f }),
					!f && Mn && /* @__PURE__ */ l("div", {
						"data-testid": "conversation-panel-empty-state",
						className: "flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-8",
						children: /* @__PURE__ */ l("p", {
							className: "text-xs text-[var(--oh-muted)]",
							children: p(en ? t.CONVERSATION_PANEL$NO_AUTOMATION_MATCHES : tn ? t.CONVERSATION_PANEL$NO_TAG_MATCHES : t.CONVERSATION$NO_CONVERSATIONS)
						})
					}),
					An ? /* @__PURE__ */ l(Ue, {
						pinnedConversations: Wt,
						isPreviewExpanded: wt,
						onTogglePreviewExpanded: () => Tt((e) => !e),
						activeConversationId: m,
						showDivider: !f && S === "chronological",
						renderConversationCard: (e) => Q(e, { inPinnedSection: !0 })
					}) : null,
					!f && Vt?.map((e) => /* @__PURE__ */ l(se, {
						to: Ke(`/conversations/task-${e.id}`),
						onClick: d,
						className: "block",
						children: /* @__PURE__ */ l(Ce, { task: e })
					}, e.id)),
					!$ && f ? Xt.map((e) => Q(e)) : null,
					!$ && !f && S === "grouped" && K && K.length > 0 ? /* @__PURE__ */ l(He, {
						groups: K,
						groupIds: Yt,
						groupFolderOrder: pt,
						setGroupFolderOrder: mt,
						collapsedGroupIds: bt,
						expandedGroupPreviewIds: St,
						discoveryConversationIds: Jt,
						onToggleGroupCollapsed: jt,
						onToggleGroupPreviewExpanded: Mt,
						isCreatingConversationFlow: _n,
						activeConversationId: m,
						onLaunchFromGroup: vn,
						renderConversationCard: (e) => Q(e)
					}) : null,
					!$ && !f && S === "chronological" ? /* @__PURE__ */ l("div", {
						className: "space-y-0.5",
						children: Kt.map((e) => Q(e))
					}) : null,
					hn && (cn ? /* @__PURE__ */ l("div", {
						className: "py-1",
						children: /* @__PURE__ */ l(we, { compact: f })
					}) : /* @__PURE__ */ l("div", {
						className: "flex justify-center py-4",
						children: /* @__PURE__ */ l("button", {
							type: "button",
							"data-testid": "load-more-conversations",
							onClick: sn,
							className: "text-xs text-[var(--oh-muted)] hover:text-white",
							children: p(t.CONVERSATION$LOAD_MORE)
						})
					}))
				]
			}),
			Je && /* @__PURE__ */ l(fe, {
				onConfirm: () => {
					En(), _(!1), j(null);
				},
				onCancel: () => {
					_(!1), j(null);
				},
				conversationTitle: Pt ?? void 0
			}),
			Ye && /* @__PURE__ */ l(_e, {
				onConfirm: () => {
					Dn(), Xe(!1), j(null);
				},
				onCancel: () => {
					Xe(!1), j(null);
				},
				conversationTitle: Pt ?? void 0
			}),
			Ze && /* @__PURE__ */ l(be, {
				tags: I.find((e) => e.id === k)?.tags,
				onConfirm: (e) => {
					Sn(e), Qe(!1);
				},
				onCancel: () => Qe(!1)
			}),
			nt && /* @__PURE__ */ l(fe, {
				title: p(t.CONVERSATION$CONFIRM_DELETE_ALL_TITLE),
				description: p(t.CONVERSATION$CONFIRM_DELETE_ALL_DESC, { count: I.length }),
				onConfirm: async () => {
					await kn(), y(!1);
				},
				onCancel: () => y(!1)
			}),
			$e && /* @__PURE__ */ l(pe, {
				onConfirm: () => {
					On(), v(!1);
				},
				onCancel: () => v(!1)
			}),
			et && /* @__PURE__ */ l(ve, {
				onConfirm: () => {
					d?.();
				},
				onClose: () => tt(!1),
				onCancel: () => tt(!1)
			})
		]
	});
}
//#endregion
export { d as ConversationPanel };

//# sourceMappingURL=conversation-panel.js.map