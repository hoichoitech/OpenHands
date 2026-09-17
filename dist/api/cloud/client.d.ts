import { CloudClient } from "@openhands/typescript-client/clients";
import type { Backend } from "../backend-registry/types";
export declare function createCloudClient(backend?: Backend): CloudClient;
export declare function createCloudClientForRuntime(backend?: Backend): CloudClient;
