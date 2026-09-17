import { CANVAS_UI_CLIENT_ACTION_KIND } from "#/constants/canvas-ui";
import { LAUNCH_CHILD_CONVERSATION_ACTION_KIND } from "#/constants/child-conversation";
type EventType = "MCPTool" | "Finish" | "Think" | "ExecuteBash" | "Terminal" | "FileEditor" | "StrReplaceEditor" | "TaskTracker" | "PlanningFileEditor" | "InvokeSkill" | "SwitchLLM";
type ActionOnlyType = "BrowserNavigate" | "BrowserClick" | "BrowserType" | "BrowserGetState" | "BrowserGetContent" | "BrowserScroll" | "BrowserGoBack" | "BrowserListTabs" | "BrowserSwitchTab" | "BrowserCloseTab" | "CanvasUI";
type ObservationOnlyType = "Browser";
type ActionEventType = `${ActionOnlyType}Action` | `${EventType}Action` | "GlobAction" | "GrepAction" | "TaskAction" | typeof CANVAS_UI_CLIENT_ACTION_KIND | typeof LAUNCH_CHILD_CONVERSATION_ACTION_KIND;
type ObservationEventType = `${ObservationOnlyType}Observation` | `${EventType}Observation` | "TerminalObservation" | "GlobObservation" | "GrepObservation" | "TaskObservation" | "CanvasUIObservation" | "ClientToolObservation";
export interface ActionBase<T extends ActionEventType = ActionEventType> {
    kind: T;
}
export interface ObservationBase<T extends ObservationEventType = ObservationEventType> {
    kind: T;
}
export {};
