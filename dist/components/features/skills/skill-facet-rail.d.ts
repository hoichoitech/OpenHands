import type { SkillFacetGroup, SkillFacetGroupId } from "./skill-filter";
interface SkillFacetRailProps {
    groups: SkillFacetGroup[];
    onToggle: (groupId: SkillFacetGroupId, value: string) => void;
    className?: string;
}
export declare function SkillFacetRail({ groups, onToggle, className, }: SkillFacetRailProps): import("react").JSX.Element | null;
export {};
