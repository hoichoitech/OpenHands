/**
 * Packing what a bundle entry ships.
 *
 * A bundle's manifest names its files by the repository path they live at; the
 * contents travel in the published `@openhands/extensions` package, because
 * this host has the package and not the repository. That indirection is the
 * whole reason this module exists: everything else about a bundle is derived
 * the same way a prompt entry's request is.
 */
import { BUNDLE_CONFIG_FILENAME } from "./types";
import type { SetupEntry, SetupFormValues } from "./types";
/** The rendered configuration, packed beside the entrypoint. */
export { BUNDLE_CONFIG_FILENAME };
/**
 * The files the pinned package ships for this entry.
 *
 * Read defensively: a package predating bundles exports no such function, and
 * an entry that declares a bundle there would otherwise pack an empty archive
 * that fails only once a run tries to execute it.
 */
export declare function getBundleFiles(id: string): Record<string, string>;
/**
 * The archive for this entry, with the form's answers rendered into
 * `config.json`.
 *
 * The config is taken from the create payload rather than rendered again here,
 * so what the tarball carries and what the create request records as template
 * provenance cannot disagree.
 */
export declare function packBundle(entry: SetupEntry, values: SetupFormValues): Promise<Uint8Array>;
