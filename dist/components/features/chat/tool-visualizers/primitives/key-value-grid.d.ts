import React from "react";
interface KeyValueRow {
    /** Already-translated label. */
    label: string;
    value: React.ReactNode;
}
/**
 * Two-column label / value grid for compact parameter displays.
 */
export declare function KeyValueGrid({ rows }: {
    rows: KeyValueRow[];
}): React.JSX.Element;
export {};
