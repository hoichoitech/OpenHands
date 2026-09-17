import { DEFAULT_UNPINNED_OVERVIEW_GIT_PARTS as e, DEFAULT_UNPINNED_OVERVIEW_SECTIONS as t, VALID_CONVERSATION_OVERVIEW_GIT_PARTS as n, VALID_CONVERSATION_OVERVIEW_SECTIONS as r } from "../components/features/conversation/conversation-overview-sections.js";
import { useEffect as i, useState as a } from "react";
//#region src/utils/conversation-local-storage.ts
var o = {
	CONVERSATION_STATE: "conversation-state",
	PENDING_TASK_DRAFT: "pending-task-draft"
}, s = "conversation-state-updated", c = {
	selectedTab: "files",
	unpinnedTabs: [],
	unpinnedOverviewSections: [...t],
	unpinnedOverviewGitParts: [...e],
	conversationMode: "code",
	subConversationTaskId: null,
	draftMessage: null,
	rightPanelShown: !1,
	filesTabDiffView: null,
	filesTabContentViewMode: "rich",
	filesTabTreeVisible: !0,
	filesTabOpenPaths: [],
	filesTabSelectedPath: null
}, l = new Set([
	"files",
	"commits",
	"browser",
	"terminal",
	"planner",
	"tasklist",
	"usage"
]), u = new Set([
	"editor",
	"served",
	"app",
	"vscode"
]), d = new Set(["rich", "plain"]);
function f(e) {
	let t = e;
	if (t.selectedTab != null && (u.has(t.selectedTab) || t.selectedTab === "changes" || !l.has(t.selectedTab))) {
		let e = t.selectedTab;
		t = { ...t }, e === "changes" ? t.selectedTab = "commits" : delete t.selectedTab;
	}
	if (t.unpinnedTabs) {
		let e = t.unpinnedTabs.filter((e) => e !== "changes" && !u.has(e));
		e.length !== t.unpinnedTabs.length && (t = {
			...t,
			unpinnedTabs: e
		});
	}
	if (t.unpinnedOverviewSections) {
		let e = t.unpinnedOverviewSections.filter((e) => r.has(e));
		e.length !== t.unpinnedOverviewSections.length && (t = {
			...t,
			unpinnedOverviewSections: e
		});
	}
	if (t.unpinnedOverviewGitParts) {
		let e = t.unpinnedOverviewGitParts.filter((e) => n.has(e));
		e.length !== t.unpinnedOverviewGitParts.length && (t = {
			...t,
			unpinnedOverviewGitParts: e
		});
	}
	if (t.filesTabContentViewMode != null && !d.has(t.filesTabContentViewMode) && (t = { ...t }, delete t.filesTabContentViewMode), t.rightPanelShown != null && typeof t.rightPanelShown != "boolean" && (t = { ...t }, delete t.rightPanelShown), t.filesTabTreeVisible != null && typeof t.filesTabTreeVisible != "boolean" && (t = { ...t }, delete t.filesTabTreeVisible), t.filesTabOpenPaths != null) if (!Array.isArray(t.filesTabOpenPaths)) t = { ...t }, delete t.filesTabOpenPaths;
	else {
		let e = t.filesTabOpenPaths.filter((e) => typeof e == "string" && e.length > 0);
		e.length !== t.filesTabOpenPaths.length && (t = {
			...t,
			filesTabOpenPaths: e
		});
	}
	return t.filesTabSelectedPath != null && typeof t.filesTabSelectedPath != "string" && (t = { ...t }, delete t.filesTabSelectedPath), t;
}
function p(e) {
	return e.startsWith("task-");
}
function m(e) {
	return e === "" || p(e);
}
function h(e) {
	if (m(e)) return c;
	try {
		let t = `${o.CONVERSATION_STATE}-${e}`, n = localStorage.getItem(t);
		return n === null ? c : {
			...c,
			...f(JSON.parse(n))
		};
	} catch {
		return c;
	}
}
function g(e, t) {
	if (!m(e)) try {
		let n = `${o.CONVERSATION_STATE}-${e}`, r = {
			...h(e),
			...t
		};
		localStorage.setItem(n, JSON.stringify(r)), typeof window < "u" && window.dispatchEvent(new CustomEvent(s, { detail: { conversationId: e } }));
	} catch (e) {
		console.warn("Failed to set conversation localStorage", e);
	}
}
function _(e) {
	return `${o.PENDING_TASK_DRAFT}-${e}`;
}
function v(e, t) {
	if (e) try {
		localStorage.setItem(_(e), t);
	} catch (e) {
		console.warn("Failed to store pending task draft", e);
	}
}
function y(e) {
	if (!e) return null;
	try {
		let t = _(e), n = localStorage.getItem(t);
		return localStorage.removeItem(t), n;
	} catch (e) {
		return console.warn("Failed to consume pending task draft", e), null;
	}
}
function b(e) {
	try {
		let t = `${o.CONVERSATION_STATE}-${e}`;
		localStorage.removeItem(t), typeof window < "u" && window.dispatchEvent(new CustomEvent(s, { detail: { conversationId: e } }));
	} catch (t) {
		console.warn("Failed to clear conversation localStorage", e, t);
	}
}
function x(e) {
	let [t, n] = a(() => h(e));
	i(() => {
		if (typeof window > "u") return;
		let t = `${o.CONVERSATION_STATE}-${e}`, r = () => {
			n(h(e));
		}, i = (e) => {
			e.key === t && r();
		}, a = (t) => {
			t.detail?.conversationId === e && r();
		};
		return r(), window.addEventListener("storage", i), window.addEventListener(s, a), () => {
			window.removeEventListener("storage", i), window.removeEventListener(s, a);
		};
	}, [e]);
	let r = (t) => {
		if (m(e)) {
			n((e) => ({
				...e,
				...t
			}));
			return;
		}
		g(e, t);
	};
	return {
		state: t,
		setSelectedTab: (e) => r({ selectedTab: e }),
		setUnpinnedTabs: (e) => r({ unpinnedTabs: e }),
		setUnpinnedOverviewSections: (e) => r({ unpinnedOverviewSections: e }),
		setUnpinnedOverviewGitParts: (e) => r({ unpinnedOverviewGitParts: e }),
		setConversationMode: (e) => r({ conversationMode: e }),
		setDraftMessage: (e) => r({ draftMessage: e }),
		setRightPanelShown: (e) => r({ rightPanelShown: e }),
		setFilesTabDiffView: (e) => r({ filesTabDiffView: e }),
		setFilesTabContentViewMode: (e) => r({ filesTabContentViewMode: e }),
		setFilesTabTreeVisible: (e) => r({ filesTabTreeVisible: e }),
		setFilesTabOpenState: (e, t) => r({
			filesTabOpenPaths: e,
			filesTabSelectedPath: t
		})
	};
}
//#endregion
export { b as clearConversationLocalStorage, y as consumePendingTaskDraft, h as getConversationState, p as isTaskConversationId, g as setConversationState, v as setPendingTaskDraft, x as useConversationLocalStorageState };

//# sourceMappingURL=conversation-local-storage.js.map