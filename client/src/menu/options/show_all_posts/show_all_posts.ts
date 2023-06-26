import { fetchAllPosts } from "../../../api/fetch_all_posts.js";
import { clear, print, prompt, printNewLine } from "../../../ui/console.js";

export async function showAllPosts() {
	clear("yes");

	printNewLine();

	print("📨 Fetching posts...");

	const result = await fetchAllPosts();

	print(`🥳 Received ${result.length} posts. Here they are:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result;
}
