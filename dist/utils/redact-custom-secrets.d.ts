/**
 * Defensive backstop: redact any unmasked value inside a `<CUSTOM_SECRETS>`
 * block before showing dynamic context in the UI, in case backend masking
 * regresses. Text outside the block is untouched.
 */
export declare function redactCustomSecrets(text: string): string;
