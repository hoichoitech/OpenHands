import type { SkillFacetGroup, SkillFacetGroupId } from "./skill-filter";
interface SkillFiltersModalProps {
    groups: SkillFacetGroup[];
    activeCount: number;
    onToggle: (groupId: SkillFacetGroupId, value: string) => void;
    onClearAll: () => void;
    onClose: () => void;
}
export declare function SkillFiltersModal({ groups, activeCount, onToggle, onClearAll, onClose, }: SkillFiltersModalProps): import("react").JSX.Element;
export {};
