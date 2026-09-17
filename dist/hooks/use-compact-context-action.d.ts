/**
 * Shared compact/condense action used by the Usage panel CTA and the
 * composer context-window popover.
 */
export declare function useCompactContextAction(perTurnToken?: number): {
    handleCompact: () => void;
    isCompacting: boolean;
    isDisabled: boolean;
    description: string;
};
