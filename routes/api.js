var express = require("express"),
	path = require("path"),
	Router = express.Router(),
	bodyParser = require("body-parser"),
	authModule = require(path.join(__dirname+"/../modules/authModule"));

var apiRouter = express.Router(),
	jsonParser = bodyParser.json();
//the REST api methods go here
//
//THE AUTH MODULE API
apiRouter.get("/signIn", function(req, res, next){
	//route gets the signIn page
	res.send("This is the GET /api/signIn REST endpoint");
});
apiRouter.post("/signIn", jsonParser, function(req, res, next){
	//this route post signIn data to the server so that the server can authenticate the requesting user
	var userObj = {
		email: req.body.email,
		password: req.body.password
	};	
	//signIn the user
	authModule.signIn(userObj);
});

apiRouter.get("/signUp", function(req, res, next){
	//this route gets the singUp page
	res.send("This is the rest GET /api/signUp REST endpoint");
});
apiRouter.post("/signUp", jsonParser, function(req, res, next){
	//this route posts signUp data to the server so that the server can create a new account for the user
	//
	//construct the user object
	var userObj = {
		email: req.body.email,
		password: req.body.password,
		fullName: req.body.fullName,
		listOfSaccos: req.body.listOfSaccos,
		listOfRoutes: req.body.listOfRoutes,
		listOfUsers: req.body.listOfUsers,
		profilePicUrl: req.body.profilePicUrl
	};
	//signUp the user
	authModule.signUp(userObj);
});

//THE USER PROFILE MODULE API

module.exports = exports = apiRouter;
