import React from "react";
/** Backend rule for tag keys (see `ConversationInfo.tags` in the SDK). */
export declare const CONVERSATION_TAG_KEY_PATTERN: RegExp;
/** Backend cap on tag values (see `ConversationInfo.tags` in the SDK). */
export declare const CONVERSATION_TAG_VALUE_MAX_LENGTH = 256;
/**
 * Merges the user's edited display tags with every entry the display helper
 * drops from the current map (reserved/internal keys, whitespace-only or
 * non-string values), so the replace-all PATCH never silently discards
 * internal tags. Bare tags (empty-string values) are user-manageable and
 * come through `editedUserTags` like any valued tag.
 */
export declare function mergeConversationTagEdits(currentTags: Record<string, string> | null | undefined, editedUserTags: readonly (readonly [string, string])[]): Record<string, string>;
interface EditConversationTagsModalProps {
    /** The conversation's complete server-side tag map (including internals). */
    tags: Record<string, string> | null | undefined;
    /** Called with the merged complete map (user edits + preserved internals). */
    onConfirm: (mergedTags: Record<string, string>) => void;
    onCancel: () => void;
}
export declare function EditConversationTagsModal({ tags, onConfirm, onCancel, }: EditConversationTagsModalProps): React.JSX.Element;
export {};
