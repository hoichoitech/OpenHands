import type { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
import type { BackendKind } from "#/api/backend-registry/types";
import type { LocalWorkspace } from "#/types/workspace";
import type { Provider } from "#/types/settings";
export type ConversationSortField = "created" | "updated";
export type ThreadScope = "all" | "relevant";
export type OrganizeMode = "grouped" | "chronological";
export type AutomationFilterMode = "all" | "hide-automations" | "only-automations";
export type OlderConversationCutoff = "1h" | "1d" | "7d" | "30d";
export declare const OLDER_CONVERSATION_CUTOFFS: readonly ["1h", "1d", "7d", "30d"];
export declare const DEFAULT_OLDER_CONVERSATION_CUTOFF: OlderConversationCutoff;
export declare const OLDER_CONVERSATION_CUTOFF_MS: Record<OlderConversationCutoff, number>;
export declare function isOlderConversationCutoff(value: unknown): value is OlderConversationCutoff;
/**
 * Splits conversations by last update relative to `nowMs`. Missing or
 * unparseable timestamps stay in `recent` so they are never hidden by the
 * hide-older toggle.
 */
export declare function partitionByCutoff<T extends {
    updated_at: string;
}>(items: readonly T[], cutoffMs: number, nowMs?: number): {
    recent: T[];
    older: T[];
};
/** Max conversations shown under a workspace/repo folder before "View more". */
export declare const GROUP_CONVERSATIONS_PREVIEW_LIMIT = 5;
interface GroupConversationPreviewOptions {
    limit?: number;
    expanded: boolean;
    activeConversationId?: string | null;
    /**
     * When set, the collapsed preview is drawn only from these conversation IDs
     * (plus the active conversation when it belongs to the group). Expanding
     * still reveals every loaded conversation in `conversations`.
     */
    discoveryConversationIds?: ReadonlySet<string>;
}
export declare function getGroupConversationPreview(conversations: readonly AppConversation[], options: GroupConversationPreviewOptions): {
    visibleConversations: AppConversation[];
    isPreviewTruncated: boolean;
    isShowingAll: boolean;
};
export declare function resolvePinnedConversations(pinnedIds: readonly string[], conversations: readonly AppConversation[]): AppConversation[];
export declare function filterOutPinnedConversations(conversations: readonly AppConversation[], pinnedIds: readonly string[]): AppConversation[];
/**
 * Facet bucket for automation-born conversations that carry no
 * `automationname` tag (double-underscore prefix mirrors the
 * `__none_workspace` group-id idiom).
 */
export declare const UNNAMED_AUTOMATION_FACET = "__unnamed__";
/**
 * Whether a conversation was created by an automation run: the cloud backend
 * stamps `trigger: "automation"`, while local agent-server conversations are
 * recognized by the automation tags the SDK workspace attaches at creation.
 */
export declare function isAutomationConversation(conversation: AppConversation): boolean;
export declare function getAutomationNameFacet(conversation: AppConversation): string;
/**
 * Unique automation names among the given conversations, sorted for stable
 * menu order; the unnamed bucket (if present) is appended last.
 */
export declare function collectAutomationNameFacets(conversations: readonly AppConversation[]): string[];
export declare function applyAutomationConversationFilter(conversations: readonly AppConversation[], mode: AutomationFilterMode, selectedNames: readonly string[], availableFacets: readonly string[]): AppConversation[];
/**
 * Distinct user-facing `key=value` facets among the given conversations,
 * sorted A–Z for stable menu order. Reserved/internal tag keys are excluded
 * via `getDisplayConversationTags`; unlike the automation filter there is no
 * unnamed bucket — a conversation with no user tags simply yields no facet.
 */
export declare function collectTagFacets(conversations: readonly AppConversation[]): string[];
/**
 * Display form of a stored facet: a bare tag (empty value, stored as `key=`)
 * renders as just the key. Matching keeps the raw `key=value` form — this is
 * label-only.
 */
export declare function formatTagFacetLabel(facet: string): string;
/**
 * Union semantics: a conversation matches when it carries ANY selected
 * facet, mirroring the automation multi-select. An empty selection — or one
 * that no longer intersects the available facets (tags edited away, stale
 * selections persisted from another backend) — leaves the list unfiltered
 * instead of yielding an unfillable empty list.
 */
export declare function applyTagConversationFilter(conversations: readonly AppConversation[], selectedFacets: readonly string[], availableFacets: readonly string[]): AppConversation[];
/** Subset of `useCreateConversation` variables for launching from a group row */
export type ConversationGroupLaunch = {
    workingDir?: string;
    repository?: {
        name: string;
        gitProvider: Provider;
        branch?: string;
    };
};
export declare function parseConversationTimeMs(iso: string | undefined): number;
export declare function sortConversationsByField(items: readonly AppConversation[], field: ConversationSortField): AppConversation[];
/**
 * Max backend pages fetched for a single grouped "Load more" click. The
 * driver walks past pages that only deepen already-visible folders looking
 * for a new folder, and this cap prevents one click from walking the entire
 * remaining cursor when no undiscovered folder exists. Chronological mode is
 * not capped — it keeps its pre-existing fetch-until-visible behavior.
 */
export declare const MAX_PAGES_PER_LOAD_MORE_CLICK = 3;
/**
 * Conversation IDs that belong on each folder's discovery page — the first
 * backend page where that folder appeared.
 *
 * Global "Load more" still discovers folders from later pages, but the
 * collapsed preview for an already-visible folder stays frozen to this set.
 * Expanding the folder reads the full grouped `conversations` array instead.
 * `forceIncludeConversationId` keeps the active thread in the preview even
 * when it landed on a non-discovery page.
 */
export declare function getGroupDiscoveryConversationIds(items: readonly AppConversation[], pageByConversationId: ReadonlyMap<string, number>, backendKind: BackendKind, options?: {
    forceIncludeConversationId?: string | null;
}): Set<string>;
export declare function groupConversations(items: readonly AppConversation[], backendKind: BackendKind, sortField: ConversationSortField, labels: {
    emptyWorkspace: string;
    emptyRepository: string;
}, knownWorkspaces?: readonly LocalWorkspace[]): {
    id: string;
    label: string;
    conversations: AppConversation[];
    launch: ConversationGroupLaunch;
}[];
export declare function applyGroupFolderOrder<T extends {
    id: string;
}>(groups: readonly T[], order: readonly string[]): T[];
export type GroupFolderDropPosition = "before" | "after";
export declare function moveGroupFolderOrder(order: readonly string[], groupIds: readonly string[], activeGroupId: string, targetGroupId: string, position?: GroupFolderDropPosition): string[];
export {};
