import { SkillInfo } from "#/types/settings";
interface SkillItemProps {
    skill: SkillInfo & {
        content?: string;
    };
    isExpanded: boolean;
    onToggle: (agentName: string) => void;
}
export declare function SkillItem({ skill, isExpanded, onToggle }: SkillItemProps): import("react").JSX.Element;
export {};
