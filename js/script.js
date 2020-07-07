function getThis() {
	console.log(this);
}

// getThis();

const prod1 = {
	name: 'Intel',
	price: 100,
	getPrice: function  () {
		console.log(this.price);
	},

	info: {

		information: ['2.3ghz'],
		getInfo: function(){
			console.log(this);
		},
	},
};

prod1.getPrice();

prod1.info.getInfo();