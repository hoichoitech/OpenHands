/**
 * Profile name validation pattern.
 * Profile names: 1-64 chars, must start with alphanumeric, then alphanumerics
 * or '.', '_', '-'. Blocks empty names, path separators, leading dots
 * (hidden files / path traversal), and shell-special characters.
 */
export declare const PROFILE_NAME_PATTERN: RegExp;
/**
 * Shared profile name validation. Any whitespace (including leading/trailing)
 * makes the value invalid. When `isRequired`, empty values are invalid;
 * otherwise empty is valid.
 */
export declare function isProfileNameValid(value: string, { isRequired }?: {
    isRequired?: boolean;
}): boolean;
/**
 * Derive a profile name from a model string.
 * Extracts the model portion after the provider prefix (e.g., "openai/gpt-4" -> "gpt-4")
 * and sanitizes it to match the profile name pattern.
 */
export declare function deriveProfileNameFromModel(model: string): string;
