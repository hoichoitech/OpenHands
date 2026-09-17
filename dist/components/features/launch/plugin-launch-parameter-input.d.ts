export interface PluginLaunchParameterInputProps {
    pluginIndex: number;
    paramKey: string;
    paramValue: unknown;
    onParameterChange: (pluginIndex: number, paramKey: string, value: unknown) => void;
}
export declare function PluginLaunchParameterInput({ pluginIndex, paramKey, paramValue, onParameterChange, }: PluginLaunchParameterInputProps): import("react").JSX.Element;
