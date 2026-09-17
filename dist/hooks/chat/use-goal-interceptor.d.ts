/**
 * Intercepts "/goal [--max N] <objective>" submissions and starts a goal loop
 * on the agent server: it pursues the objective, judging completion after each
 * run until done or the cap is reached. Live progress streams back as goal
 * ConversationStateUpdateEvents (rendered by GoalStatusBanner). Everything else
 * falls through to `onSubmit`. Passthrough when `conversationId` is null.
 */
export declare const useGoalInterceptor: (conversationId: string | null | undefined, onSubmit: (message: string) => void) => (message: string) => void;
