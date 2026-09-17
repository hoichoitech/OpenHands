import React from "react";
import type { CriticResult } from "#/types/agent-server/core/base/critic";
interface CriticResultDisplayProps {
    criticResult: CriticResult;
}
/**
 * Displays a critic evaluation result with star rating, score percentage,
 * and expandable categorized feature breakdown.
 */
export declare function CriticResultDisplay({ criticResult, }: CriticResultDisplayProps): React.JSX.Element;
export {};
