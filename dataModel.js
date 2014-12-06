var mongoose = require("mongoose");

//handle connection details here or in another module

//get necessary objects to work with
var Schema = mongoose.Schema,
	ObjectId = mongoose.ObjectId;

//define the schemas
var UserProfileSchema = new Schema({
	appId: String,
	email: String,
	fullName: String,
	listOfRoutes: Object,
	listOfSaccos: Object,
	listOfUsers: Object,
	profilePicUrl: String
});

var SaccoProfileSchema = new Schema({
	appId: String,
	email: String,
	saccoName: String,
	listOfRoutes: Object,
	listOfSubscribers: Object,
	profilePictureUrl: String
});

var RouteProfileSchema = new Schema({
	appId: String,
	email: String,
	routeName: String,
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
module.exports = exports = [UserProfileModel, SaccoProfileModel, RouteProfileModel];
