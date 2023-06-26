import { fetchPost } from "../../../api/fetch_post";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

export async function browsePosts() {
	clearNope();

	const desiredPostId = await prompt("Enter Post ID");

	// TODO: should we validate this?!

	print(`📨 Fetching post "${desiredPostId}...`);

	const result = await fetchPost(desiredPostId);

	print(`🥳 Received post:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result;
}
function clearNope() {
	// Implement the logic to clear the "nope" state or perform related actions here
	// For example:
	// nope = null;
	// or
	// clearNopeState();
}
