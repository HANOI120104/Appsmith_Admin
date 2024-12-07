export default {
	defaultTab: 'Login',

	setDefaultTab: (newTab) => {
		this.defaultTab = newTab;
	},
	async login () {
		const result = await postLogin.run();
		if(result) {
			storeValue('token',postLogin.data.accessToken)
		}
	},
	async onSuccess () {
		storeValue('token',postLogin.data.accessToken)
	},
}