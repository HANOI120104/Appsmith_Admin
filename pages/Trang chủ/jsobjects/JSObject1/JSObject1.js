export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2() {
		try {
			const token = appsmith.store.token;
			if (token) {
				console.log('Token từ appsmith.store:', token);
			} else {
				console.warn('Token chưa được lưu trong store.');
			}
		} catch (error) {
			console.error('Lỗi khi truy xuất token:', error);
		}
	}

}