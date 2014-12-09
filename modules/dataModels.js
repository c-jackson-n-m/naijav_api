var mongoose = require("mongoose");

//handle connection details here or in another module
var connection = mongoose.connect("mongodb://localhost/mydb");

//get necessary objects to work with
var Schema = mongoose.Schema,
	ObjectId = mongoose.ObjectId;

//define the schemas
var UserProfileSchema = new Schema({
	email: String,
	_id: ObjectId(this.email),
	fullName: String,
	password: String,
	listOfRoutes: Object,
	listOfSaccos: Object,
	listOfUsers: Object,
	profilePicUrl: String
});

var SaccoProfileSchema = new Schema({
	email: String,
	_id: ObjectId(this.email),
	saccoName: String,
	password: String,
	listOfRoutes: Object,
	listOfSubscribers: Object,
	profilePictureUrl: String
});

var RouteProfileSchema = new Schema({
	email: String,
	_id: ObjectId(this.email),
	routeName: String,
	password: String,
	listOfSaccos: Object,
	listOfSubscribers: Object,
	profilePictureUrl: String
});

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
