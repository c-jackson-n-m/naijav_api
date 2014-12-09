//models
var PersonModel = Backbone.Model.extend({
	initialize: function(){
		console.log("Initialized a Person Model");
	},
	defaults: {
		name: "You name asshole",
		age: 20,
		occupation: "Eating"
	},
	urlRoot: "/data"
});

//collections
var PeopleCollection = Backbone.Collection.extend({
	initialize: function(){
		console.log("Initialized a People Collection");
	},
	model: PersonModel,
	url: "/data"
});

