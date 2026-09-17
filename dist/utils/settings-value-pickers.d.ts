export declare const isNonEmptyString: (value: unknown) => value is string;
export declare const pickFirstString: (...values: unknown[]) => string | undefined;
export declare const pickFirstBoolean: (...values: unknown[]) => boolean | undefined;
export declare const pickFirstNumber: (...values: unknown[]) => number | undefined;
export declare const pickNullableString: (...values: unknown[]) => string | null | undefined;
