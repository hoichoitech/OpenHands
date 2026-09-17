import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Check as n } from "../../../node_modules/lucide-react/dist/esm/icons/check.js";
import { FilePlus as r } from "../../../node_modules/lucide-react/dist/esm/icons/file-plus.js";
import { cn as i } from "../../../utils/utils.js";
import { StyledTooltip as a } from "../../shared/buttons/styled-tooltip.js";
import { jsx as o } from "react/jsx-runtime";
//#region src/components/features/chat/pasted-image-upload-as-file-button.tsx
function s({ active: s, onToggle: c }) {
	let { t: l } = e("openhands"), u = l(t.CHAT_INTERFACE$UPLOAD_IMAGES_AS_FILES), d = l(t.CHAT_INTERFACE$DO_NOT_UPLOAD_AS_FILE), f = s ? d : u;
	return /* @__PURE__ */ o("div", {
		className: "absolute bottom-2 left-1 z-10 h-4 w-4",
		children: /* @__PURE__ */ o(a, {
			content: f,
			placement: "bottom",
			offset: 10,
			shouldFlip: !1,
			tooltipClassName: "bg-white text-black text-xs font-medium leading-5",
			children: /* @__PURE__ */ o("button", {
				type: "button",
				"aria-label": f,
				"aria-pressed": s,
				onClick: (e) => {
					e.stopPropagation(), c();
				},
				className: i("flex h-4 w-4 items-center justify-center rounded-full bg-[var(--oh-surface)] text-[var(--oh-foreground)] transition-colors cursor-pointer hover:bg-[var(--oh-muted)]"),
				children: o(s ? n : r, {
					width: 10,
					height: 10,
					strokeWidth: 2.5,
					"aria-hidden": !0
				})
			})
		})
	});
}
//#endregion
export { s as PastedImageUploadAsFileButton };

//# sourceMappingURL=pasted-image-upload-as-file-button.js.map