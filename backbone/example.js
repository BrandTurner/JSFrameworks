/*Person = Backbone.Model.extend({
	defaults: {
		name: 'Fetus',
		age: 0,
		child: ''
	},
	initialize: function(){
		alert("Welcome to your life");
	},
	adopt: function(adopteeName){
		this.set({ child: adopteeName });
	}
});

var person = new Person({name: 'Thomas', age: 67, child: 'Ryan'});

var age = person.get("age"); // 67
var name = person.get("name"); // Thomas
var child = person.get("child"); //Ryan

person.adopt("John Resign");
var child = person.get("child") // John Resig*/
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