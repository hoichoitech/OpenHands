/**
 * True when the consuming event message is rendered inside an `EventGroup`'s
 * expanded children. Components like `GenericEventMessage` use this to drop
 * their own left bar so we don't render a redundant inner bar on top of the
 * group's outer bar.
 */
export declare const IsInEventGroupContext: import("react").Context<boolean>;
