import type { SkillInfo } from "#/types/settings";
/** Read-only view of the rule, for surfaces that list skills without toggling. */
export declare function useSkillEnabledFilter(): (skill: SkillInfo) => boolean;
export interface SkillEnablementController {
    isEnabled: (skill: SkillInfo) => boolean;
    setEnabled: (skillName: string, enabled: boolean) => void;
}
/**
 * Shared toggle state for every surface that switches skills on and off.
 *
 * Which of the two lists a skill belongs to is decided here alone, so one
 * surface cannot write a preference another cannot see.
 */
export declare function useSkillEnablement(): SkillEnablementController;
