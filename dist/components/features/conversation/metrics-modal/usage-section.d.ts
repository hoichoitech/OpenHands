interface UsageSectionProps {
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        cache_read_tokens: number;
        cache_write_tokens: number;
    };
}
export declare function UsageSection({ usage }: UsageSectionProps): import("react").JSX.Element;
export {};
