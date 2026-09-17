/**
 * Registry of admitted setup manifests.
 *
 * Stage 1 of the setup flow: load the catalog, decide which entries this host
 * will act on, and index the survivors by id. An entry that fails admission is
 * dropped entirely rather than rendered partially, because everything
 * downstream treats its content as instructions.
 */
import type { SetupEntry } from "./types";
export interface SetupRegistry {
    /** Entries this host has admitted, in source order. */
    readonly entries: readonly SetupEntry[];
    findById(id: string): SetupEntry | null;
}
export declare function createSetupRegistry(candidates: readonly unknown[]): SetupRegistry;
