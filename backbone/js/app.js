topping = 'anchovi';
function pizzaParty(numSlices) {
	var topping = "pepperoni",

	innerFunction = function() {
		var topping = 'ham';
		console.log("....But put " + topping + " on " + numSlices + " slices");
	}

	console.log("This pizza is all about the " + topping);

	innerFunction();
}
pizzaParty(3);