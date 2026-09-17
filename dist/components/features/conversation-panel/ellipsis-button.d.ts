import React from "react";
interface EllipsisButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Optional override classes applied to the button. Use this when a
     * caller needs to customize layout (e.g. translate, flex), not to
     * replace hover treatment which is intentionally shared.
     */
    className?: string;
    /** Icon box; default `w-4 h-4` (use `mobileTopBarIconClassName` in mobile top bars). */
    iconClassName?: string;
    ariaLabel?: string;
    /**
     * Override the default `ellipsis-button` test id. Most callers
     * should leave this unset; provide a custom id only when an
     * existing test suite already targets a specific id (e.g. the
     * `profile-menu-trigger` in LLM profile rows).
     */
    testId?: string;
}
/**
 * Standardized "three vertical dots" overflow trigger.
 *
 * Use this anywhere the chrome needs an inline ellipsis menu trigger
 * (conversation header, conversation cards in the side panel,
 * conversation tabs, settings rows, etc.) so that size, color, and
 * hover treatment stay consistent.
 *
 * The chat input area's overflow button uses its own pill-shaped
 * variant with a custom hover background — do NOT replace that one
 * with this component; it is intentionally different.
 */
export declare const EllipsisButton: React.ForwardRefExoticComponent<EllipsisButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
