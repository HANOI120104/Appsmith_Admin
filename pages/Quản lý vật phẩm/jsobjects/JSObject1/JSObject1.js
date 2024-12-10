export default {
	
	async createNewSupply () {
	const response = await postWarehouses.run();
	if(response){
	await getWarehouses.run();
	}
	},
	
	async updateQuantity() {
	const update = await updateQuantity.run();
	if(update){
	await getWarehouses.run();
	}
	},
	
	async getData(){
	const data = await getWarehouses.run();
	if(data){
	storeValue('data', getWarehouses.data )
	console.log(appsmith.store.data)
	}
	
	},
	
	async onSuccess(){

	}



}