import React from "react";
import { Provider } from "#/types/settings";
interface ConversationGitActionsMenuProps {
    anchorRef: React.RefObject<HTMLButtonElement | null>;
    onClose: () => void;
    gitProvider: Provider;
    /** Prefix for menu/item `data-testid` values (suffixes: -menu, -commit, …). */
    testIdPrefix?: string;
}
/**
 * Portaled dropdown of agent-prompt git actions (commit, pull, push, PR, branch).
 * Anchored under a trigger; shared by the overview diffs row and header toggle.
 */
export declare function ConversationGitActionsMenu({ anchorRef, onClose, gitProvider, testIdPrefix, }: ConversationGitActionsMenuProps): React.ReactPortal | null;
export {};
