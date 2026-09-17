import type { BackendKind } from "#/api/backend-registry/types";
import type { WorkspaceMode } from "#/api/conversation-metadata-store";
import { I18nKey } from "#/i18n/declaration";
export declare const DEFAULT_WORKSPACE_MODE: WorkspaceMode;
export declare const LAST_LOCAL_WORKSPACE_MODE_STORAGE_KEY = "openhands-last-local-workspace-mode";
export declare function readStoredLocalWorkspaceMode(): WorkspaceMode;
export declare function writeStoredLocalWorkspaceMode(mode: WorkspaceMode): void;
export declare function getWorkspaceModeI18nKey(mode: WorkspaceMode, backendKind: BackendKind): I18nKey;
