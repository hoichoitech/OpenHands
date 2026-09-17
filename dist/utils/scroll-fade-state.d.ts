export interface ScrollFadeState {
    left: boolean;
    right: boolean;
}
export interface VerticalScrollEdgeState {
    top: boolean;
    bottom: boolean;
}
/** Whether a horizontal scroller is clipped on each edge. */
export declare function readScrollFadeState(element: HTMLElement): ScrollFadeState;
/** Whether a vertical scroller is clipped on each edge. */
export declare function readVerticalScrollEdgeState(element: HTMLElement): VerticalScrollEdgeState;
