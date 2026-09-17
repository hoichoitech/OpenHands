import { SettingsFieldSchema } from "#/types/settings";
export declare const FIELD_HELP_LINKS: Record<string, {
    textKey: string;
    linkTextKey: string;
    href: string;
    /** Skip rendering the schema description separately when the help text already includes it. */
    hideDescription?: boolean;
    /** Optional trailing copy rendered after the link (e.g. " section of OpenHands Cloud."). */
    suffixKey?: string;
}>;
export declare function FieldHelp({ field }: {
    field: SettingsFieldSchema;
}): import("react").JSX.Element;
