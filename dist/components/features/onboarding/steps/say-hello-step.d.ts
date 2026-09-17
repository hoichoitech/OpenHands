import React from "react";
interface SayHelloStepProps {
    onBack: () => void;
    /** Dismisses onboarding without launching a conversation. */
    onClose: () => void;
    /** Called once the conversation has been created — used by the parent
     * modal to mark the onboarding as complete before unmounting. */
    onLaunched: () => void;
}
/**
 * Step 3: a simple text input pre-filled with "hello OpenHands!" that
 * launches a brand-new conversation with no workspace and navigates
 * to it. Completing this step finishes the onboarding flow.
 */
export declare function SayHelloStep({ onBack, onClose, onLaunched, }: SayHelloStepProps): React.JSX.Element;
export {};
