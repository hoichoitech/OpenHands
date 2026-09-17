interface DangerModalProps {
    testId?: string;
    title: string;
    description: string;
    buttons: {
        danger: {
            text: string;
            onClick: () => void;
        };
        cancel: {
            text: string;
            onClick: () => void;
        };
    };
}
export declare function DangerModal({ testId, title, description, buttons, }: DangerModalProps): import("react").JSX.Element;
export {};
