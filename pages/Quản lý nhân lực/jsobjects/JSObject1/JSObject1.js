export default {


	async handleDelete(id){
		console.log(id);

		try{
			await deleteUserId.run({id});
		}catch(error){
			console.log(error);
		}
	}

}