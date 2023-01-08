import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
	state: () => {
		return {
			selectValue: "None"
		};
	},
	getters: {},
	actions: {
		handleSelect(values: string[]) {
			this.selectValue = values.join("/");
		}
	}
});
