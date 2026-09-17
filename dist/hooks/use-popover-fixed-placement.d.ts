import React from "react";
export interface FixedPlacementBox {
    top: number;
    left: number;
    width: number;
}
/**
 * Position a popover with `position: fixed`, anchored below the trigger and
 * clamped within the viewport. Used by the conversation-panel "+ New
 * conversation" menus when they're rendered inside an overflow-hidden
 * sidebar and would otherwise be clipped.
 *
 * Returns the measured `{ top, left, width }` box (or `null` when the
 * popover is closed or fixed placement is disabled). The hook also wires
 * up window resize + capture-phase scroll listeners so the box follows the
 * trigger as the page moves.
 */
export declare function usePopoverFixedPlacement(triggerRef: React.RefObject<HTMLElement | null>, options: {
    open: boolean;
    enabled: boolean;
    targetWidth?: number;
}): FixedPlacementBox | null;
