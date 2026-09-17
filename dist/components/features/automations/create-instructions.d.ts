interface CreateInstructionsProps {
    /** If true, the instructions are collapsible and start collapsed */
    collapsible?: boolean;
}
interface CreateInstructionsContentProps {
    onLaunch?: () => void;
}
export declare function CreateInstructionsContent({ onLaunch, }?: CreateInstructionsContentProps): import("react").JSX.Element;
export declare function CreateInstructions({ collapsible, }: CreateInstructionsProps): import("react").JSX.Element;
export {};
