var mongoose = require("mongoose");

//handle connection details here or in another module
var dbLocation = "mongodb://localhost/mydb";
mongoose.connect(dbLocation);

//get necessary objects to work with
var Schema = mongoose.Schema,
	ObjectId = mongoose.ObjectId;

//define the schemas
var UserProfileSchema = new Schema({
	_id: String,
	fullName: String,
	password: String,
	listOfRoutes: Object,
	listOfSaccos: Object,
	listOfUsers: Object,
	profilePicUrl: String
});

var SaccoProfileSchema = new Schema({
	_id: String,
	saccoName: String,
	password: String,
	listOfRoutes: Object,
	listOfSubscribers: Object,
	profilePictureUrl: String
});

var RouteProfileSchema = new Schema({
	_id: String,
	routeName: String,
	password: String,
	listOfSaccos: Object,
	listOfSubscribers: Object,
	profilePictureUrl: String
});

//virtuals
UserProfileSchema.virtual("email").get(function(){
	return this._id;
});
UserProfileSchema.virtual("email").set(function(value){
	this._id = value;
});
//will complete email/_id virtuals for saccos and routes

//define models out of these schemas
mongoose.model("UserProfileModel", UserProfileSchema);
mongoose.model("SaccoProfileModel", SaccoProfileSchema);
mongoose.model("RouteProfileModel", RouteProfileSchema);

//get those models ready for use
var UserProfileModel = mongoose.model("UserProfileModel"),
	SaccoProfileModel = mongoose.model("SaccoProfileModel"),
	RouteProfileModel = mongoose.model("RouteProfileModel");

//export these models
module.exports = exports = {"User":UserProfileModel, "Sacco":SaccoProfileModel, "Route":RouteProfileModel};
