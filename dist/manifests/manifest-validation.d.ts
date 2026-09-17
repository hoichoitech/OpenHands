/**
 * Admission policy for extension-authored catalog manifests.
 *
 * A manifest is data authored in a different repository that instructs this host
 * to render copy and compose a request. The host therefore decides what a
 * manifest is *permitted* to do rather than trusting the file — validation here
 * is a trust boundary, not a convenience check, and it deliberately does not
 * defer to a schema shipped alongside the manifests it would be validating.
 *
 * Beyond mirroring the published schema, this adds the invariants the host's own
 * derivation depends on: a single trigger kind to read, a repository field for
 * an event trigger's source, and field names unique across the form. Without
 * them the derived request body would be silently wrong rather than rejected.
 *
 * A manifest that fails any check is rejected outright. It never renders a
 * partial UI, because everything downstream treats its content as instructions.
 */
export interface SetupValidationResult {
    valid: boolean;
    errors: string[];
}
/** Whether a catalog entry ships a setup experience at all. It is optional. */
export declare function hasSetupBlock(candidate: unknown): boolean;
/**
 * Decide whether this host will act on a catalog manifest.
 *
 * The version is checked first and fails closed: a format this host does not
 * recognise is refused rather than interpreted with today's rules.
 */
export declare function validateSetupEntry(candidate: unknown): SetupValidationResult;
