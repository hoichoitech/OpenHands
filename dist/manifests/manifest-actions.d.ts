/**
 * The action bridge — the only channel through which a manifest can make this
 * host *do* something.
 *
 * A manifest is data from another repository, so it never describes a request.
 * It chooses between the two outcomes this host offers, and it chooses by
 * declaring a `mode`: a direct entry produces a create request the host derives,
 * an assisted entry hands setup to a conversation.
 *
 * A direct entry that ships a bundle takes one more step before that create
 * request - packing and uploading the archive - but it still names no host, no
 * path and no method: the endpoints come from the interface manifest and the
 * files from the published package.
 */
import type { SetupEntry, SetupFormValues, SetupRequestBody } from "./types";
export interface SetupActionResult {
    /** The created resource, or the conversation that will finish setup. */
    response: Record<string, unknown>;
}
export declare function useSetupAction(): (entry: SetupEntry, values: SetupFormValues, payload: SetupRequestBody | null, selectedTrigger?: string | null, selectedAction?: string | null) => Promise<SetupActionResult>;
