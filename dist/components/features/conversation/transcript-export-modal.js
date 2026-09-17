import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { downloadBlob as n } from "../../../utils/utils.js";
import { displayErrorToast as r } from "../../../utils/custom-toast-handlers.js";
import { useEventStore as i } from "../../../stores/use-event-store.js";
import a from "../../../api/event-service/event-service.api.js";
import { useTracking as o } from "../../../hooks/use-tracking.js";
import { ModalBackdrop as s } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as c } from "../../shared/modals/modal-body.js";
import { BaseModalDescription as l, BaseModalTitle as u } from "../../shared/modals/confirmation-modals/base-modal.js";
import { ModalCloseButton as d } from "../../shared/modals/modal-close-button.js";
import { BrandButton as f } from "../settings/brand-button.js";
import { eventsToHtml as p, eventsToMarkdown as m } from "../../../utils/transcript-export/index.js";
import { loadCompleteTranscriptEvents as h } from "../../../utils/transcript-export/load-complete-events.js";
import g from "react";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/components/features/conversation/transcript-export-modal.tsx
var y = "transcript-export-format";
function b({ conversationId: b, conversationUrl: x, sessionApiKey: S, conversationTitle: C, model: w, onClose: T }) {
	let { t: E } = e("openhands"), { trackConversationExported: D } = o(), [O, k] = g.useState("markdown"), [A, j] = g.useState(!0), [M, N] = g.useState(!0), [P, F] = g.useState(!1), I = g.useRef(!1), L = g.useRef(!1), R = g.useRef(!0);
	g.useEffect(() => (R.current = !0, () => {
		R.current = !1, L.current = !0;
	}), []);
	let z = () => {
		I.current && (L.current = !0), T();
	};
	return /* @__PURE__ */ _(s, {
		onClose: z,
		"aria-label": E(t.TRANSCRIPT_EXPORT$TITLE),
		children: /* @__PURE__ */ v(c, {
			testID: "transcript-export-modal",
			className: "relative items-start border border-[var(--oh-border)]",
			children: [
				/* @__PURE__ */ _(d, {
					onClose: z,
					testId: "close-transcript-export-modal",
					className: "absolute right-4 top-4"
				}),
				/* @__PURE__ */ v("div", {
					className: "flex flex-col gap-2 pr-8",
					children: [/* @__PURE__ */ _(u, { title: E(t.TRANSCRIPT_EXPORT$TITLE) }), /* @__PURE__ */ _(l, { description: E(t.TRANSCRIPT_EXPORT$DESCRIPTION) })]
				}),
				/* @__PURE__ */ v("fieldset", {
					className: "flex w-full flex-col gap-2",
					children: [
						/* @__PURE__ */ _("legend", {
							className: "mb-2 text-sm font-medium text-white",
							children: E(t.TRANSCRIPT_EXPORT$FORMAT)
						}),
						/* @__PURE__ */ v("label", {
							className: "flex cursor-pointer items-center gap-3 rounded-md border border-[var(--oh-border)] px-3 py-2 text-sm text-white",
							children: [/* @__PURE__ */ _("input", {
								type: "radio",
								name: y,
								value: "markdown",
								disabled: P,
								checked: O === "markdown",
								onChange: () => k("markdown")
							}), E(t.TRANSCRIPT_EXPORT$MARKDOWN)]
						}),
						/* @__PURE__ */ v("label", {
							className: "flex cursor-pointer items-center gap-3 rounded-md border border-[var(--oh-border)] px-3 py-2 text-sm text-white",
							children: [/* @__PURE__ */ _("input", {
								type: "radio",
								name: y,
								value: "html",
								disabled: P,
								checked: O === "html",
								onChange: () => k("html")
							}), E(t.TRANSCRIPT_EXPORT$HTML)]
						})
					]
				}),
				/* @__PURE__ */ v("div", {
					className: "flex w-full flex-col gap-3 text-sm text-white",
					children: [/* @__PURE__ */ v("label", {
						className: "flex cursor-pointer items-center gap-3",
						children: [/* @__PURE__ */ _("input", {
							type: "checkbox",
							disabled: P,
							checked: A,
							onChange: (e) => j(e.target.checked)
						}), E(t.TRANSCRIPT_EXPORT$INCLUDE_TOOL_DETAILS)]
					}), /* @__PURE__ */ v("label", {
						className: "flex cursor-pointer items-center gap-3",
						children: [/* @__PURE__ */ _("input", {
							type: "checkbox",
							disabled: P,
							checked: M,
							onChange: (e) => N(e.target.checked)
						}), E(t.TRANSCRIPT_EXPORT$INCLUDE_TIMESTAMPS)]
					})]
				}),
				/* @__PURE__ */ v("div", {
					className: "flex w-full justify-end gap-2",
					children: [/* @__PURE__ */ _(f, {
						type: "button",
						variant: "secondary",
						onClick: z,
						testId: "cancel-transcript-export",
						children: E(t.BUTTON$CANCEL)
					}), /* @__PURE__ */ _(f, {
						type: "button",
						variant: "primary",
						onClick: async () => {
							if (!I.current) {
								L.current = !1, I.current = !0, F(!0);
								try {
									let e = await a.getEventCount(b, x ?? "", S).catch(() => void 0);
									if (L.current) return;
									let t = i.getState(), r = await h(t.loadedConversationId === b ? t.events : [], (e) => a.searchEvents(b, x, S, e), e);
									if (L.current) return;
									let o = {
										includeToolDetails: A,
										includeTimestamps: M,
										title: C,
										model: w
									}, s = O === "markdown", c = s ? m(r, o) : p(r, o), l = s ? "md" : "html";
									n(new Blob([c], { type: s ? "text/markdown;charset=utf-8" : "text/html;charset=utf-8" }), `conversation-${b}.${l}`), D(O), T();
								} catch {
									L.current || r(E(t.ERROR$GENERIC));
								} finally {
									I.current = !1, R.current && F(!1);
								}
							}
						},
						testId: "confirm-transcript-export",
						isDisabled: P,
						"aria-busy": P,
						children: E(t.BUTTON$EXPORT_CONVERSATION)
					})]
				})
			]
		})
	});
}
//#endregion
export { b as TranscriptExportModal };

//# sourceMappingURL=transcript-export-modal.js.map