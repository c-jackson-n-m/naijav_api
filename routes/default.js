var express = require("express"),
	path = require("path"),
	Router = express.Router(),
	bodyParser = require("body-parser");

var dRouter = express.Router();

//configure the routes
//These routes are for the app website, which explains the services that we offer etc
dRouter.get("/", function(req, res, next){
	res.render("index", {title: "NaiJav", heading: "NaiJav"});
});
dRouter.get("/api", function(req, res, next){
	res.render("api", {title: "NaiJav developer api", heading: "NaiJav developer api"});
});

module.exports = dRouter;