import { SkillInfo } from "#/types/settings";
/**
 * Skills catalog scoped to the active conversation, so the slash-command menu
 * and skills modal list the same skills that were loaded into it.
 *
 * Cloud: the per-conversation route reports what the conversation's
 * agent-server actually loaded (public catalog, user/org repos, project
 * skills, auto-loaded marketplace plugins); the global `/api/v1/skills/search`
 * catalog only scans the API host's built-in skills directory. The route needs
 * a running sandbox, which `useActiveConversation` polls for.
 *
 * Local (and cloud with no conversation route, e.g. the home page): the
 * workspace-scoped catalog, falling back to the global workspace dir for
 * "No workspace" conversations (`selected_workspace` is null).
 */
export declare const useConversationSkills: () => import("@tanstack/react-query").UseQueryResult<NoInfer<SkillInfo[]>, import("axios").AxiosError<unknown, any>>;
