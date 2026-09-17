import React from "react";
import type { SkillInfo } from "#/types/settings";
interface SkillDetailModalProps {
    skill: SkillInfo;
    enabled: boolean;
    onToggle: (enabled: boolean) => void;
    onClose: () => void;
}
export declare function SkillDetailModal({ skill, enabled, onToggle, onClose, }: SkillDetailModalProps): React.JSX.Element;
export {};
