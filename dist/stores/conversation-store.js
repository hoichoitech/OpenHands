import { create as e } from "../node_modules/zustand/esm/react.js";
import { devtools as t } from "../node_modules/zustand/esm/middleware.js";
import { getConversationState as n, setConversationState as r } from "../utils/conversation-local-storage.js";
//#region src/stores/conversation-store.ts
var i = () => {
	if (typeof window > "u") return null;
	let e = window.location.pathname.match(/\/conversations\/([^/]+)/);
	return e ? e[1] : null;
}, a = () => {
	if (typeof window > "u") return "code";
	let e = i();
	return e ? n(e).conversationMode : "code";
}, o = e()(t((e) => ({
	isRightPanelShown: !1,
	isOverviewPanelShown: !1,
	isOverviewPanelPeeked: !1,
	selectedTab: "files",
	commitsAutoExpandSection: null,
	images: [],
	files: [],
	imagesMarkedUploadAsFile: [],
	pastedImageNames: [],
	loadingFiles: [],
	loadingImages: [],
	messageToSend: null,
	messageRestoreIfEmpty: null,
	shouldShownAgentLoading: !1,
	submittedMessage: null,
	shouldHideSuggestions: !1,
	hasRightPanelToggled: !1,
	planContent: null,
	conversationMode: a(),
	subConversationTaskId: null,
	localPlanningConversationId: null,
	setIsRightPanelShown: (t) => e({ isRightPanelShown: t }, !1, "setIsRightPanelShown"),
	setIsOverviewPanelShown: (t) => e({
		isOverviewPanelShown: t,
		isOverviewPanelPeeked: !1
	}, !1, "setIsOverviewPanelShown"),
	setIsOverviewPanelPeeked: (t) => e({ isOverviewPanelPeeked: t }, !1, "setIsOverviewPanelPeeked"),
	setSelectedTab: (t) => e({ selectedTab: t }, !1, "setSelectedTab"),
	setCommitsAutoExpandSection: (t) => e({ commitsAutoExpandSection: t }, !1, "setCommitsAutoExpandSection"),
	setShouldShownAgentLoading: (t) => e({ shouldShownAgentLoading: t }, !1, "setShouldShownAgentLoading"),
	setShouldHideSuggestions: (t) => e({ shouldHideSuggestions: t }, !1, "setShouldHideSuggestions"),
	addImages: (t) => e((e) => ({ images: [...e.images, ...t] }), !1, "addImages"),
	addFiles: (t) => e((e) => ({ files: [...e.files, ...t] }), !1, "addFiles"),
	toggleImageUploadAsFile: (t) => e((e) => {
		let n = new Set(e.imagesMarkedUploadAsFile);
		return n.has(t) ? n.delete(t) : n.add(t), { imagesMarkedUploadAsFile: [...n] };
	}, !1, "toggleImageUploadAsFile"),
	markImagesAsPasted: (t) => e((e) => ({ pastedImageNames: [...new Set([...e.pastedImageNames, ...t])] }), !1, "markImagesAsPasted"),
	removeImage: (t) => e((e) => {
		let n = e.images[t], r = [...e.images];
		return r.splice(t, 1), {
			images: r,
			imagesMarkedUploadAsFile: n ? e.imagesMarkedUploadAsFile.filter((e) => e !== n.name) : e.imagesMarkedUploadAsFile,
			pastedImageNames: n ? e.pastedImageNames.filter((e) => e !== n.name) : e.pastedImageNames
		};
	}, !1, "removeImage"),
	removeFile: (t) => e((e) => {
		let n = [...e.files];
		return n.splice(t, 1), { files: n };
	}, !1, "removeFile"),
	clearImages: () => e({ images: [] }, !1, "clearImages"),
	clearFiles: () => e({ files: [] }, !1, "clearFiles"),
	clearAllFiles: () => e({
		images: [],
		files: [],
		imagesMarkedUploadAsFile: [],
		pastedImageNames: [],
		loadingFiles: [],
		loadingImages: []
	}, !1, "clearAllFiles"),
	addFileLoading: (t) => e((e) => e.loadingFiles.includes(t) ? e : { loadingFiles: [...e.loadingFiles, t] }, !1, "addFileLoading"),
	removeFileLoading: (t) => e((e) => ({ loadingFiles: e.loadingFiles.filter((e) => e !== t) }), !1, "removeFileLoading"),
	addImageLoading: (t) => e((e) => e.loadingImages.includes(t) ? e : { loadingImages: [...e.loadingImages, t] }, !1, "addImageLoading"),
	removeImageLoading: (t) => e((e) => ({ loadingImages: e.loadingImages.filter((e) => e !== t) }), !1, "removeImageLoading"),
	clearAllLoading: () => e({
		loadingFiles: [],
		loadingImages: []
	}, !1, "clearAllLoading"),
	setMessageToSend: (t) => e({ messageToSend: {
		text: t,
		timestamp: Date.now()
	} }, !1, "setMessageToSend"),
	clearMessageToSend: () => e({ messageToSend: null }, !1, "clearMessageToSend"),
	restoreMessageToInputIfEmpty: (t) => e({ messageRestoreIfEmpty: {
		text: t,
		timestamp: Date.now()
	} }, !1, "restoreMessageToInputIfEmpty"),
	clearMessageRestoreIfEmpty: () => e({ messageRestoreIfEmpty: null }, !1, "clearMessageRestoreIfEmpty"),
	setSubmittedMessage: (t) => e({ submittedMessage: t }, !1, "setSubmittedMessage"),
	resetConversationState: () => e({
		shouldHideSuggestions: !1,
		conversationMode: a(),
		subConversationTaskId: null,
		localPlanningConversationId: null,
		planContent: null
	}, !1, "resetConversationState"),
	setHasRightPanelToggled: (t) => e({ hasRightPanelToggled: t }, !1, "setHasRightPanelToggled"),
	setConversationMode: (t) => {
		let n = i();
		n && r(n, { conversationMode: t }), e({ conversationMode: t }, !1, "setConversationMode");
	},
	setSubConversationTaskId: (t) => e({ subConversationTaskId: t }, !1, "setSubConversationTaskId"),
	setLocalPlanningConversationId: (t) => e({ localPlanningConversationId: t }, !1, "setLocalPlanningConversationId"),
	setPlanContent: (t) => e({ planContent: t }, !1, "setPlanContent")
}), { name: "conversation-store" }));
//#endregion
export { o as useConversationStore };

//# sourceMappingURL=conversation-store.js.map