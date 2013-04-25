(function() {
	var Product = Backbone.Model.extend({})

	var ProductCollection = Backbone.Collection.extend({
		model: Product,

		initialize: function(models, options) {
			this.url = options.url;
		},

		comparator: function(item) {
			return item.get('title');
		}
	});

	// Cart Model
	var Item = Backbone.Model.extend({
		update: function(amount) {
			this.set({'quantity': amount}, {silent: true});
			this.collection.trigger('change', this)
		},
		price: function() {
			console.log(this.get('product').get('title'), this.get('quantity'));
			return this.get('product').get('price') * this.get('quantity');
		}
	});

	var	 ItemCollection = Backbone.Collection.extend({
		model: Item,

		getOrCreateItemForProduct: function(product) {
			var i,
			pid = product.get('id');
			o = this.detect(function(obj) {
				return (obj.get('product').get('id') == pid);
			});
			// Getting the item since it already exists
			if (o) {
				return o;
			}
			// New item based on existing product
			i = new Item({'product': product, 'quantity': 0});
			// Add new Item to Collection without notifying observers
			this.add(i, {silent: true});
			return i;
		},

		getTotalCount: function() {
			// WTF is this doing?!?!
			return this.reduce(function(memo, obj) {
				return obj.get('quantity') + memo; }, 0);
			
		},

		getTotalCost: function() {
			return this.reduce(function(memo, obj) {
				return obj.price() + memo; }, 0);
		}
		
	});

	// VIEWS
	var _BaseView = Backbone.View.extend
})