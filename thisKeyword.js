// 1. number(10).add(3).print().sub(6).print().multiply(10).print().divide(2).print();
// 2. number(10).add(9).sub(5).multiply(10).divide(2).print();

const calc = {
	total: 0,
	number(a) {
		this.total = a;
		return this;
	},
	add(a) {
		this.total += a;
		return this;
	},
	sub(a) {
		this.total -= a;
		return this;
	},
	multiply(a) {
		this.total *= a;
		return this;
	},
	divide(a) {
		this.total /= a;
		return this;
	},
	print() {
		console.log(this.total);
		return this;
	}
};
calc.number(10).add(3).print().sub(6).print().multiply(10).print().divide(2).print();
