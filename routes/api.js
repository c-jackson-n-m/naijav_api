var express = require("express"),
	path = require("path"),
	Router = express.Router(),
	bodyParser = require("body-parser"),
	authModule = require(path.join(__dirname+"/../modules/authModule"));

var apiRouter = express.Router();

//the REST api methods go here
//
//THE AUTH MODULE API
apiRouter.get("/signIn", function(req, res, next){
	//route gets the signIn page
});
apiRouter.post("/signIn", function(req, res, next){
	//this route post signIn data to the server so that the server can authenticate the requesting user
	
	//auth the user
	authModule.signIn();
});

apiRouter.get("/signUp", function(req, res, next){
	//this route gets the singUp page
});
apiRouter.post("/signUp", function(req, res, next){
	//this route posts signUp data to the server so that the server can create a new account for the user
	//
	//construct the user object
	var userObj = {
		email: req.email,
		password: req.password,
		fullName: req.fullName,
		listOfSaccos: req.listOfSaccos,
		listOfRoutes: req.listOfRoutes,
		listOfUsers: req.listOfUsers,
		profilePicUrl: req.profilePicUrl
	};
	//signUp the user
	authModule.signUp(userObj);
});

//THE USER PROFILE MODULE API

