/**
 * A utility class for logging events. This class will only log events in development mode.
 */
declare class EventLogger {
    static isDevMode: boolean;
    /**
     * Format and log a message event
     * @param event The raw event object
     */
    static message(event: MessageEvent): void;
    /**
     * Log an event with a name
     * @param event The raw event object
     * @param name The name of the event
     */
    static event(event: Event, name?: string): void;
    /**
     * Log a warning message
     * @param warning The warning message
     */
    static warning(warning: string): void;
    /**
     * Log an error message
     * @param error The error message
     */
    static error(error: string): void;
}
export default EventLogger;
