import { I18nKey as e } from "../../../i18n/declaration.js";
import { Download as t } from "../../../node_modules/lucide-react/dist/esm/icons/download.js";
import { FileText as n } from "../../../node_modules/lucide-react/dist/esm/icons/file-text.js";
import r from "../../../icons/u-edit.js";
import i from "../../../icons/play.js";
import a from "../../../icons/power.js";
import o from "../../../icons/trash.js";
import { jsx as s } from "react/jsx-runtime";
//#region src/components/features/automations/build-automation-menu-items.tsx
function c({ automation: c, t: l, canManage: u, canToggle: d, onRunNow: f, isRunPending: p, onView: m, onExport: h, onEdit: g, onToggle: _, onDelete: v }) {
	return [
		...u ? [{
			label: l(e.AUTOMATIONS$RUN_NOW),
			icon: /* @__PURE__ */ s(i, { className: "size-4" }),
			onClick: () => f(c.id),
			disabled: p || !c.enabled
		}] : [],
		{
			label: l(e.COMMON$VIEW),
			icon: /* @__PURE__ */ s(n, {
				className: "size-4",
				"aria-hidden": !0
			}),
			onClick: m
		},
		{
			label: l(e.AUTOMATIONS$EXPORT),
			icon: /* @__PURE__ */ s(t, {
				className: "size-4",
				"aria-hidden": !0
			}),
			onClick: () => h(c)
		},
		...u && g ? [{
			label: l(e.AUTOMATIONS$EDIT),
			icon: /* @__PURE__ */ s(r, { className: "size-4" }),
			onClick: () => g(c.id)
		}] : [],
		...d ? [{
			label: c.enabled ? l(e.AUTOMATIONS$TURN_OFF) : l(e.AUTOMATIONS$TURN_ON),
			icon: /* @__PURE__ */ s(a, { className: "size-4" }),
			onClick: () => _(c.id, c.enabled)
		}] : [],
		...u ? [{
			label: l(e.AUTOMATIONS$DELETE),
			icon: /* @__PURE__ */ s(o, { className: "size-4" }),
			onClick: () => v(c.id)
		}] : []
	];
}
//#endregion
export { c as buildAutomationMenuItems };

//# sourceMappingURL=build-automation-menu-items.js.map