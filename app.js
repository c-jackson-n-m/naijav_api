var express = require("express"),
	path = require("path"),
	mongoose = require("mongoose"),
	jade = require("jade"),
	redis = require("redis"),
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser"),
	expressSession = require("express-session"),
	passport = require("passport"),
	passportLocal = require("passport-local"),
	defaultRoutes = require(path.join(__dirname+"/routes/default")),
	apiRoutes = require(path.join(__dirname+"/routes/api"));

var app = express();

//set up variables
app.set("port", (process.env.PORT || 8880));
app.set("ip", (process.env.IP || "127.0.0.1"));
app.set("view engine", "jade");
app.set("views", path.join(__dirname+"/views"));

//configure middlewares
app.use(express.static(path.join(__dirname+"/public")));
app.locals.pretty = true;

app.use(cookieParser());
app.use(expressSession({
	secret: process.env.SESSION_SECRET || "secret",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", defaultRoutes);
app.use("/api", apiRoutes);

//spin up the server
app.listen(app.get("port"), app.get("ip"), function(){
	console.log("Express server listening on %s:%s", app.get("ip"), app.get("port"));
});
