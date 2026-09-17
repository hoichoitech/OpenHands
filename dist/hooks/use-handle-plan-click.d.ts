import { type MouseEvent } from "react";
/**
 * Custom hook that encapsulates the logic for handling plan creation.
 * Returns a function that can be called to create a plan conversation and
 * the pending state of the conversation creation.
 *
 * @returns An object containing handlePlanClick function and isCreatingConversation boolean
 */
export declare const useHandlePlanClick: () => {
    handlePlanClick: (event?: MouseEvent<HTMLButtonElement> | KeyboardEvent, initialMessage?: string) => void;
    hasPlanner: boolean;
    isCreatingConversation: boolean;
};
