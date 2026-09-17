import { I18nKey as e } from "../../i18n/declaration.js";
//#region src/utils/suggestions/non-repo-suggestions.ts
var t = e.SUGGESTIONS$HACKER_NEWS, n = "Please write a bash script which displays the top story on Hacker News. It should show the title, the link, and the number of points.\nThe script should only use tools that are widely available on unix systems, like curl and grep.", r = e.SUGGESTIONS$HELLO_WORLD, i = "I want to create a Hello World app in Javascript that:\n* Displays Hello World in the middle.\n* Has a button that when clicked, changes the greeting with a bouncing animation to fun versions of Hello.\n* Has a counter for how many times the button has been clicked.\n* Has another button that changes the app's background color.", a = e.SUGGESTIONS$TODO_APP, o = "I want to create a VueJS app that allows me to:\n* See all the items on my todo list\n* add a new item to the list\n* mark an item as done\n* totally remove an item from the list\n* change the text of an item\n* set a due date on the item\n\nThis should be a client-only app with no backend. The list should persist in localStorage.", s = {
	[t]: n,
	[r]: i,
	[a]: o
};
//#endregion
export { s as NON_REPO_SUGGESTIONS };

//# sourceMappingURL=non-repo-suggestions.js.map