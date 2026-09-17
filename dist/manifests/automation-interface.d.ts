/**
 * The automation interface seam.
 *
 * Every automation-specific datum the host's surfaces render — navigation and
 * page copy, the settable attributes, the import/export envelope, endpoint
 * paths, the featured and responder id lists, the sub-page surface — is served
 * from the interface manifest the pinned `@openhands/extensions` publishes.
 * The host holds none of it. When the package publishes no manifest, or the
 * published one fails admission, there is nothing to serve: the nav entries do
 * not render and the routes 404. `hasAutomationInterface()` is that gate, and
 * every accessor that needs the manifest is reachable only from behind it.
 *
 * Routes are the exception, and they are not a definition: `src/routes.ts`
 * mounts them, so the host states them here and admission checks a manifest's
 * routes against them. That check is what keeps a published deep link
 * resolving to the page it named.
 */
import type { AutomationAttributeName, InterfaceDashboardFilter, InterfaceDashboardSort, InterfaceEndpointName, InterfaceIconSlug, InterfaceImportExport, InterfaceListInsights, InterfaceOverview, InterfaceSubPageId, InterfaceTemplatesPage } from "./types";
/**
 * File-format section for portable `.automation.json` export/import. A docs
 * pointer for the host's import picker, not interface data — the manifest's
 * `importExport` block has no docs field.
 */
export declare const AUTOMATION_FILE_FORMAT_DOCS_URL = "https://docs.openhands.dev/openhands/usage/agent-canvas/managing-automations#exported-file-format";
/**
 * Whether this deployment has an automation interface at all. The nav entries
 * and the route loaders ask before rendering; nothing else has to.
 */
export declare function hasAutomationInterface(): boolean;
export declare function automationListPath(): string;
export declare function automationSetupPath(id: string): string;
export declare function automationDetailPath(id: string): string;
export declare function automationTemplatesPath(): string;
/**
 * Whether `path` (a location pathname) is inside the automation surface: the
 * list route itself or anything nested under it (detail, setup, templates,
 * git-sync). Prefix-safe: "/automations-foo" does not match.
 */
export declare function isAutomationsRoute(path: string): boolean;
/**
 * A declared endpoint path. Empty for one the manifest may omit - the two a
 * bundle needs were added after the block shipped - so a caller that needs one
 * says so rather than reading a host-held default that does not exist.
 */
export declare function getAutomationEndpoint(name: InterfaceEndpointName): string;
/** An id-parameterized endpoint with `{id}` substituted, encoded. */
export declare function getAutomationIdEndpoint(name: "detail" | "dispatch" | "runs" | "tarball", id: string): string;
export interface InterfaceCopy {
    sidebarLabel: string;
    commandMenuTitle: string;
    commandMenuDescription: string;
    commandMenuKeywords: string;
    listTitle: string;
    listSubtitle: string;
    detailBackLabel: string;
    editTitle: string;
}
export declare function getInterfaceCopy(): InterfaceCopy;
export interface AttributeSpec {
    present: boolean;
    label: string;
    /** Null when the manifest states no help text for the attribute. */
    help: string | null;
    required: boolean;
    min: number | null;
    max: number | null;
}
export declare function getAttributeSpec(name: AutomationAttributeName): AttributeSpec;
export declare function getImportExportSpec(): InterfaceImportExport;
export declare function getAutomationsDocsUrl(): string;
export declare function getFeaturedAutomationIds(): readonly string[];
export declare function getResponderIntegrationIds(): readonly string[];
export interface SubPageNavSpec {
    page: InterfaceSubPageId;
    /** The page's route, resolved through the host's route table. */
    to: string;
    label: string;
    icon: InterfaceIconSlug;
}
/**
 * The sub-page navigation, or null when the manifest does not declare the
 * sub-page surface.
 */
export declare function getSubPagesSpec(): SubPageNavSpec[] | null;
export interface DashboardSpec {
    overview: InterfaceOverview;
    filters: InterfaceDashboardFilter[];
    sort: InterfaceDashboardSort;
    insights: InterfaceListInsights;
}
/**
 * The list page's dashboard composition, or null when the manifest does not
 * declare it. Admission accepts the sub-page surface whole or not at all, so
 * these four are present together.
 */
export declare function getDashboardSpec(): DashboardSpec | null;
/** The templates page identity, or null when the manifest does not declare it. */
export declare function getTemplatesPageSpec(): InterfaceTemplatesPage | null;
