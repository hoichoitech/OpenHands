import type { LatestAutomationRunState } from "#/hooks/query/use-latest-automation-runs";
import { type Automation } from "#/types/automation";
interface PinnedAutomationCardProps {
    automation: Automation;
    runState: LatestAutomationRunState;
    onUnpin: (automationId: string) => void;
    onDragStart: (automationId: string) => void;
    onDragOver: (automationId: string, position: "before" | "after") => void;
    onDrop: (automationId: string) => void;
    onDragEnd: () => void;
    isDropTarget: boolean;
    dropPosition: "before" | "after" | null;
    isDragging: boolean;
}
/**
 * Home pinned card. Shares the Automations dashboard tile chrome (surface,
 * header, pills, status strip) and keeps pin-only extras: drag-to-reorder,
 * conversation title, and unpin.
 */
export declare function PinnedAutomationCard({ automation, runState, onUnpin, onDragStart, onDragOver, onDrop, onDragEnd, isDropTarget, dropPosition, isDragging, }: PinnedAutomationCardProps): import("react").JSX.Element;
export {};
