import React from "react";
import type { SkillInfo } from "#/types/settings";
interface SkillCardProps {
    skill: SkillInfo;
    enabled: boolean;
    onOpen: () => void;
    onToggle: (enabled: boolean) => void;
}
export declare function SkillCard({ skill, enabled, onOpen, onToggle, }: SkillCardProps): React.JSX.Element;
export {};
