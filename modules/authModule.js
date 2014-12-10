//This is the module that handles authentication
var mongoose = require("mongoose"),
	passport = require("passport"),
	passportLocal = require("passport-local"),
	bodyParser = require("body-parser"),
	path = require("path"),
	dataModels = require(path.join(__dirname+"/dataModels"))

//receive login and signup request data from the user and then either create new accounts for them or authenticate them into the system

//for signup
function signUp(vars){
	//this variables parameter will is an object containing all the necessary account creation variables
	//Algorithm
	// 1. create a new document from the UserProfileModel
	// 2. add user profile properties
	// 3. save the user model in the database
	// 4. return a value indicating whether the saving was a success or a fail
	var newUser = new dataModels.User({
		"password": vars.password,
		"fullName": vars.fullName, 
		"listOfSaccos": vars.listOfSaccos, 
		"listOfRoutes": vars.listOfRoutes, 
		"listOfUsers": vars.listOfUsers,
		"profilePicUrl": vars.profilePicUrl
	});
	newUser.email = vars.email;
	//first check if user exists in the database before saving a new instance
	dataModels.User.findOne({_id: vars.email}, function(err, user){
		if(err){
			console.log("There was an error checking for the document");
		}else if(user){
			console.log("User already exists, can't sign up");
		}else{
			//user does not exist, you can proceed with sign up
			newUser.save(function(err){
		    	if(err){
					console.log("Error saving the document");
				}else{
					console.log("Document saved successfully");
				}
			});
		}
	});
}

//for signin
function signIn(vars){
	//fetch user details and then validate the password, then set a session for them
	passport.use(new passportLocal.Strategy({usernameField: vars.email, passwordField: vars.password},function(username, password, done){
		dataModels.User.findOne({_id: vars.email}, function(err, user){
			if(err){ 
				return done(err)
			}else if(!user){
				return done(null, false, {message: "Incorrect username."});
			}else if(!validatePassword(user.password, password)){
				return done(null, false, {message: "Incorrect password."});
			}else{
				return done(null, user);
			}
		});
	}));
}

//the validate password function
function validatePassword(fromDb, fromUser){
	//I might add hashing later on with bcrypt
	if(fromDb === fromUser){
		return true;
	}else{
		return false;
	}
}

module.exports = exports = {"signIn": signIn, "signUp": signUp};
