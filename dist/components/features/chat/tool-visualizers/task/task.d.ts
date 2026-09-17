/**
 * Task visualizer for the `task` tool, which delegates work to a spawned
 * subagent. The action card shows which subagent is being run and the query
 * (the prompt the parent agent sent); the observation card adds the task id and
 * the subagent's returned result. Until the observation arrives, the card just
 * shows the query, so an in-flight delegation is still legible. Both the query
 * and the result are rendered as markdown with a copy button.
 */
export declare const taskVisualizer: import("../define").RegisteredVisualizer;
