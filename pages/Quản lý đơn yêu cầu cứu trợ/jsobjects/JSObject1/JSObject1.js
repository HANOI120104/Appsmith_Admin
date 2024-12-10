export default {
	// async addSupply(){
	// con
	// }

	async getWarehouse(){
		const data = getWarehouses.data;
		const newData = data.map((item)=>{
			return{
				...item,
				sl:0
			}
		})
		storeValue("newData", []);
	}, 
	async updateSl() {
		const data = appsmith.store.newData;
		const updatedData = data.map((item) => {
			if (item.id === Input3.text) {
				return { ...item, sl: inp_addQuantity.text }; // Cập nhật sl của item
			}
			return item; // Giữ nguyên các item còn lại
		});

		// Lưu lại dữ liệu đã cập nhật vào Store
		storeValue("newData", updatedData);
	}


}
// const addNewSupply = {
// "wareHouseId": "674f2ef21c962b5e36e6c8f2",
// "wareHouseName": "Đường",
// "quantity": 5,
// "unit": "kg"
// }
// async getQuantity(newObject){
// const currentArray = appsmith.store.myArray || [];
// const updatedArray = [...currentArray, newObject];
// 
// // Lưu lại mảng đã cập nhật vào store
// storeValue("myArray", updatedArray);
// }

}