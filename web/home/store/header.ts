import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
	state: () => {
		return {
			selectValue: "首页"
		};
	},
	getters: {},
	actions: {
		handleSelect(values: string[]) {
			this.selectValue = values.join("/");
		}
	}
});
