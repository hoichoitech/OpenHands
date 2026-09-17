import { AxiosError } from "axios";
export declare const isAxiosErrorWithErrorField: (error: AxiosError) => error is AxiosError<{
    error: string;
}>;
export declare const isAxiosErrorWithMessageField: (error: AxiosError) => error is AxiosError<{
    message: string;
}>;
