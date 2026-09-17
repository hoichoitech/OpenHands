import type { DeviceAuthorizationResponse, DeviceTokenResponse, PollDeviceTokenOptions } from "@openhands/typescript-client/client/device-flow-client";
export { DeviceFlowError, isOpenHandsCloudHost, } from "@openhands/typescript-client/client/device-flow-client";
export declare function startDeviceFlow(host: string): Promise<DeviceAuthorizationResponse>;
export declare function pollForToken(host: string, deviceCode: string, options: PollDeviceTokenOptions): Promise<DeviceTokenResponse>;
export type { DeviceAuthorizationResponse, DeviceTokenResponse, PollDeviceTokenOptions as PollOptions, } from "@openhands/typescript-client/client/device-flow-client";
