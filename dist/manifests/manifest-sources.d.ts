/**
 * The one place that decides which manifests this host is offered.
 *
 * Setup manifests are published by `@openhands/extensions` as an optional
 * `setup` block on a catalog entry, so the catalog is the whole source. Entries
 * without one are skipped, which means the pinned package deciding to ship them
 * is the only step left — there is no wiring to add here.
 *
 * The catalog is passed as `unknown[]` on purpose: admission is a trust
 * boundary, so the host validates the published data rather than trusting the
 * types that shipped beside it.
 */
import { type SetupRegistry } from "./manifest-registry";
export declare const SETUP_REGISTRY: SetupRegistry;
export declare const AUTOMATION_INTERFACE_CANDIDATE: unknown;
