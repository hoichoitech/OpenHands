/**
 * Admission policy for the extension-published Automation interface manifest.
 *
 * Like a setup entry, the interface manifest is data authored in a different
 * repository that instructs this host to render copy, build links, and address
 * requests, so the host decides what it is *permitted* to state. Admission is
 * all-or-nothing: one bad field rejects the whole manifest, and the host falls
 * back to its own defaults rather than rendering a partially-trusted mix.
 */
import type { InterfaceRoutes } from "./types";
export interface InterfaceValidationContext {
    /** Ids of the published automation catalog, for the featured-list check. */
    catalogIds: ReadonlySet<string>;
    /** The routes this host has registrations for. A manifest must match them. */
    mountedRoutes: InterfaceRoutes;
}
export interface InterfaceValidationResult {
    valid: boolean;
    errors: string[];
}
/**
 * Decide whether this host will act on a published interface manifest.
 *
 * The version is checked first and fails closed: a format this host does not
 * recognise is refused rather than interpreted with today's rules.
 */
export declare function validateInterfaceManifest(candidate: unknown, context: InterfaceValidationContext): InterfaceValidationResult;
