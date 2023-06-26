import { states } from "./states";

export class State {
	#state = states.MENU;

	get() {
		return this.#state;
	}

	set(newState: string) {
		this.#state = newState;
	  }
	
}
