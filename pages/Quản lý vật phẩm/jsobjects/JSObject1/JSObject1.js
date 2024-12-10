export default {

	async createNewSupply () {
		const response = await postWarehouses.run();
		if(response){
			await getWarehouses.run();
		}
	},

	async updateQuantity () {
		await updateQuantity.run();
	}



}