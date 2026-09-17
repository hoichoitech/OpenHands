/**
 * Stage 2 — decide whether a deployment can run what a manifest requires.
 *
 * The manifest states what it needs — the features under `requires.features`,
 * and, implicitly, the trigger kinds its form declares. The deployment states
 * what it supports. Neither side is interpreted here beyond set membership, so
 * this stays neutral about what any particular capability means.
 */
import type { DeploymentCapabilities, SetupActionKind, SetupEntry, SetupTriggerKind } from "./types";
/**
 * "unknown" is a real outcome, not an error: a deployment that cannot be asked
 * must not be treated as one that answered no.
 */
export type SetupCapabilitySupport = boolean | "unknown";
export interface SetupCapabilityAssessment {
    supported: boolean;
    /**
     * Requirement names the deployment did not report, so a block can say which
     * ones rather than only that there were some. Empty when a deployment that
     * reports it is not accepting work blocks the entry, because then no single
     * requirement is the reason.
     */
    unmet: string[];
}
export declare function supportedActionKinds(entry: SetupEntry, reported: DeploymentCapabilities): SetupActionKind[];
export declare function supportedTriggerKinds(entry: SetupEntry, reported: DeploymentCapabilities): SetupTriggerKind[];
export declare function assessCapabilityRequirements(entry: SetupEntry, reported: DeploymentCapabilities): SetupCapabilityAssessment;
