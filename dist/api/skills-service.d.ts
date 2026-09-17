import { SkillInfo } from "#/types/settings";
declare class SkillsService {
    static getSkills(projectDir?: string): Promise<SkillInfo[]>;
    /**
     * Skills loaded into a running cloud conversation (see
     * `fetchCloudConversationSkills`). Cloud-only: local conversations keep
     * using `getSkills(projectDir)`, whose agent-server call already scopes to
     * the conversation's workspace.
     */
    static getConversationSkills(conversationId: string): Promise<SkillInfo[]>;
}
export default SkillsService;
