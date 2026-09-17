import type { SetupEntry } from "#/manifests/types";
export interface SetupDialogProps {
    entry: SetupEntry;
    onClose: () => void;
}
/**
 * The setup host: capabilities check, prerequisites, form, review, and the
 * action the manifest's mode selects, rendered as a dialog.
 *
 * The host runs the stages and owns everything the same for every entry; the
 * manifest supplies only what varies. Any string the user reads here is either
 * manifest-authored or host chrome.
 */
export declare function SetupDialog({ entry, onClose }: SetupDialogProps): import("react").JSX.Element;
