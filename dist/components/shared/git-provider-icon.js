import { cn as e } from "../../utils/utils.js";
import { FaBitbucket as t, FaGithub as n, FaGitlab as r } from "../../node_modules/react-icons/fa6/index.js";
import i from "../../assets/branding/azure-devops-logo.js";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/shared/git-provider-icon.tsx
function c({ gitProvider: c, className: l }) {
	return /* @__PURE__ */ s(a, { children: [
		c === "github" && /* @__PURE__ */ o(n, {
			size: 14,
			className: l
		}),
		c === "gitlab" && /* @__PURE__ */ o(r, {
			size: 14,
			className: l
		}),
		c === "bitbucket" && /* @__PURE__ */ o(t, {
			size: 14,
			className: l
		}),
		c === "bitbucket_data_center" && /* @__PURE__ */ o(t, {
			size: 14,
			className: l
		}),
		c === "azure_devops" && /* @__PURE__ */ o(i, { className: e(l, "w-[14px] h-[14px]") })
	] });
}
//#endregion
export { c as GitProviderIcon };

//# sourceMappingURL=git-provider-icon.js.map