import React from "react";
export declare function shouldReapplyProfileAfterSave({ activeProfileName, originalName, savedName, }: {
    activeProfileName: string | null | undefined;
    originalName: string | null | undefined;
    savedName: string;
}): boolean;
/**
 * LlmSettingsLocalView provides an integrated view for managing LLM profiles
 * in local agent-server mode. It supports listing, creating, and editing profiles.
 *
 * Note: This component manages multiple responsibilities (view state, validation,
 * form coordination, save logic). A future refactoring could extract these into
 * separate hooks (e.g., useProfileForm, useProfileSave) for better testability.
 * See PR review feedback for details.
 */
export declare function LlmSettingsLocalView(): React.JSX.Element;
