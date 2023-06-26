import { exit } from "./exit/exit";
import { showMenu } from "./menu/menu";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
import { State } from "./states/state";
import { states } from "./states/states";
import { clear, print, printNewLine, prompt } from "./ui/console.js";

type StateAction<T> = (state: State) => Promise<T>;


const stateActions: Record<string, StateAction<void>> = {
	MENU: async (state) => {
		clear();
	  const newMenuOption = await showMenu();
	  state.set(newMenuOption);
	},
	SEND_MESSAGE: async (state) => {
		clear();
	  const nextState = await sendMessage();
	  state.set(nextState);
	},
	SHOW_POSTS: async (state) => {
		clear();
		const posts = await showAllPosts();
		state.set(states.MENU);
	  },
	  SHOW_USERS: async (state) => {
		clear();
		const users = await showAllUsers();
		state.set(states.MENU);
	  },
	  BROWSE_POSTS: async (state) => {
		clear();
		const post = await browsePosts();
		state.set(states.MENU);
	  },
	  ADD_USER: async (state) => {
		clear();
		print("🏗️  This functionality has not been implemented!");
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		state.set(states.MENU);
	  },
	  UNKNOWN: async (state) => {
		clear();
		print("😵 We have entered an unknown state.");
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		state.set(states.MENU);
	  },
	  CABBAGE: async (state) => {
		clear();
		print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
		print("🥬      CABBAGE MODE UNLOCKED     🥬", false);
		print("🥬     Why did you want this?     🥬", false);
		print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		state.set(states.MENU);
	  },
	  default: async (state) => {
		clear();
		print(`🌋 😱 Uh-oh, we've entered an invalid state: "${state.get()}"`);
		print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
		print("💥 Crashing the program now...  💥", false);
		print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
		printNewLine();
		exit(99);
	  }
  };
  

async function begin() {
  clear();
  print("👋 Welcome to our cool blog browser!");
  await prompt("⌨️ Press [ENTER] to continue! 🕶️");
  main();
}

async function main() {
	const state = new State();
  
	while (true) {
	  const currentState = state.get();
	  const action = stateActions[currentState] || stateActions.default;
	  await action(state);
	}
  }
  
  

begin();
