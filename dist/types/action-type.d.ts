declare enum ActionType {
    INIT = "initialize",
    MESSAGE = "message",
    SYSTEM = "system",
    READ = "read",
    WRITE = "write",
    RUN = "run",
    RUN_IPYTHON = "run_ipython",
    BROWSE = "browse",
    BROWSE_INTERACTIVE = "browse_interactive",
    DELEGATE = "delegate",
    THINK = "think",
    FINISH = "finish",
    REJECT = "reject",
    CHANGE_AGENT_STATE = "change_agent_state",
    MCP = "call_tool_mcp",
    TASK_TRACKING = "task_tracking"
}
export default ActionType;
