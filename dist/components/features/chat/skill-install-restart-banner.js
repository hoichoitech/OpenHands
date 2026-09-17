import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { X as n } from "../../../node_modules/lucide-react/dist/esm/icons/x.js";
import { useNavigation as r } from "../../../context/navigation-context.js";
import { displayErrorToast as i } from "../../../utils/custom-toast-handlers.js";
import { useActiveBackend as a } from "../../../contexts/active-backend-context.js";
import { useActiveConversation as o } from "../../../hooks/query/use-active-conversation.js";
import { useCreateConversation as s } from "../../../hooks/mutation/use-create-conversation.js";
import { useSkillInstalls as c } from "../../../hooks/use-skill-installs.js";
import { useIsCreatingConversation as l } from "../../../hooks/use-is-creating-conversation.js";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/features/chat/skill-install-restart-banner.tsx
function f({ conversationId: f }) {
	let { t: p } = e("openhands"), { installs: m, dismissAll: h } = c(f), { backend: g } = a(), { mutate: _, isPending: v } = s(), y = l(), { navigate: b } = r(), { data: x } = o();
	if (g.kind !== "local" || m.length === 0) return null;
	let S = m[m.length - 1], C = m.filter((e) => e.workspacePath === S.workspacePath).map((e) => e.skillName);
	return /* @__PURE__ */ d("div", {
		className: "flex w-full items-start gap-2 rounded-lg border border-[var(--oh-border)] bg-[var(--oh-surface-raised)] p-2 text-[var(--oh-foreground)]",
		"data-testid": "skill-install-restart-banner",
		children: [/* @__PURE__ */ d("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ u("p", {
				className: "text-sm text-[var(--oh-foreground)]",
				children: p(t.SKILLS$INSTALL_BANNER_MESSAGE, { skills: C.join(", ") })
			}), /* @__PURE__ */ u("button", {
				type: "button",
				onClick: () => {
					v || y || _({
						workingDir: S.workspacePath,
						workspaceMode: "local_repo",
						repository: x?.selected_repository && x?.git_provider ? {
							name: x.selected_repository,
							gitProvider: x.git_provider,
							branch: x.selected_branch ?? void 0
						} : void 0,
						entryPoint: "skill_install_restart_banner"
					}, {
						onSuccess: (e) => b(`/conversations/${e.conversation_id}`),
						onError: (e) => i(e.message)
					});
				},
				disabled: v || y,
				className: "mt-2 cursor-pointer rounded-md border border-[var(--oh-border)] px-2 py-1 text-xs font-normal text-[var(--oh-foreground)] hover:bg-[var(--oh-interactive-hover)] disabled:cursor-not-allowed disabled:opacity-50",
				"data-testid": "skill-install-restart-action",
				children: p(t.SKILLS$INSTALL_BANNER_ACTION)
			})]
		}), /* @__PURE__ */ u("button", {
			type: "button",
			onClick: h,
			className: "shrink-0 cursor-pointer rounded-md p-1 text-[var(--oh-muted)] hover:bg-[var(--oh-interactive-hover)] hover:text-[var(--oh-foreground)]",
			"aria-label": p(t.BUTTON$CLOSE),
			"data-testid": "skill-install-restart-dismiss",
			children: /* @__PURE__ */ u(n, {
				className: "h-4 w-4",
				"aria-hidden": !0
			})
		})]
	});
}
//#endregion
export { f as SkillInstallRestartBanner };

//# sourceMappingURL=skill-install-restart-banner.js.map