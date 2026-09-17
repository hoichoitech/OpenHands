import type { RecommendedAutomation } from "@openhands/extensions/automations";
import type { Automation } from "#/types/automation";
interface RecommendedAutomationsRailProps {
    installedAutomations: readonly Pick<Automation, "name">[];
    onSelect: (automation: RecommendedAutomation) => void;
    className?: string;
}
export declare function RecommendedAutomationsRail({ installedAutomations, onSelect, className, }: RecommendedAutomationsRailProps): import("react").JSX.Element | null;
export {};
