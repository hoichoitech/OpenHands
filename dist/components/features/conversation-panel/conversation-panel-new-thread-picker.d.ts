import type { BackendKind } from "#/api/backend-registry/types";
/**
 * Compact "new thread folder" control for the conversation panel header.
 * Opens the same workspace (local) or repository (cloud) picker as the
 * sidebar new-conversation flows.
 */
export declare function ConversationPanelNewThreadPicker({ backendKind, }: {
    backendKind: BackendKind;
}): import("react").JSX.Element;
