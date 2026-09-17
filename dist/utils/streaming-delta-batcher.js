import { mergeStreamingDeltaEvent as e } from "./handle-event-for-ui.js";
//#region src/utils/streaming-delta-batcher.ts
var t = typeof requestAnimationFrame == "function" ? {
	schedule: (e) => requestAnimationFrame(e),
	cancel: (e) => cancelAnimationFrame(e)
} : {
	schedule: (e) => setTimeout(e, 16),
	cancel: (e) => clearTimeout(e)
};
function n(n, r = t) {
	let i = [], a = null, o = () => {
		a !== null && (r.cancel(a), a = null);
	}, s = () => {
		if (o(), i.length === 0) return;
		let t = i;
		i = [], n(t.reduce((t, n) => e(n, t)));
	};
	return {
		enqueue: (e) => {
			i.push(e), a === null && (a = r.schedule(s));
		},
		flush: s,
		reset: () => {
			o(), i = [];
		}
	};
}
//#endregion
export { n as createStreamingDeltaBatcher };

//# sourceMappingURL=streaming-delta-batcher.js.map