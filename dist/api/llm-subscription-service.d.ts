import { OPENAI_SUBSCRIPTION_VENDOR } from "#/constants/llm-subscription";
export interface LLMSubscriptionStatus {
    vendor: typeof OPENAI_SUBSCRIPTION_VENDOR;
    connected: boolean;
    accountEmail: string | null;
    expiresAt: string | number | null;
}
export interface LLMSubscriptionDeviceChallenge {
    deviceCode: string;
    userCode: string;
    verificationUri: string;
    verificationUriComplete: string | null;
    expiresAt: string | number | null;
    intervalSeconds: number | null;
}
declare class LLMSubscriptionService {
    static getOpenAIModels(): Promise<string[]>;
    static getOpenAIStatus(): Promise<LLMSubscriptionStatus>;
    static startOpenAIDeviceLogin(): Promise<LLMSubscriptionDeviceChallenge>;
    static pollOpenAIDeviceLogin(deviceCode: string): Promise<LLMSubscriptionStatus>;
    static logoutOpenAI(): Promise<LLMSubscriptionStatus>;
}
export default LLMSubscriptionService;
