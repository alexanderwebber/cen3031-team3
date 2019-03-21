var path = require('path'),  
    	express = require('express'), 
    	mongoose = require('mongoose'),
    	morgan = require('morgan'),
    	bodyParser = require('body-parser'),
     	config = require('./config'),
    	listingsRouter = require('../routes/portal.server.routes'),
	passport = require("passport"),
	User = require("./model/user"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoos = require("passport-local-mongoose");


module.exports.init = function() {
	//initialize app
	var app = express();
	
	//connect to database
  	mongoose.connect(config.db.uri);

	app.use(bodyParser.urlencoded({extended:true}));
	app.use(require("express-session")({
    		secret:"Rusty is the best og in the world",
    		resave: false,
    		saveUninitialized: false
	}));

	app.set('view engine','ejs');

	passport.use(new LocalStrategy(User.authenticate()));
	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());

	app.get("/",function(req,res){
   		 res.render("home");
	});

	app.get("/secret",isLoggedIn, function(req, res){
    		res.render("secret");
	});

	// Login Routes
	app.get("/login", function(req, res){
    		res.render("login");
	})

	// middleware
	app.post("/login", passport.authenticate("local",{
    		successRedirect:"/secret",
    		failureRedirect:"/login"
	}),function(req, res){
    		res.send("User is "+ req.user.id);
	});

	app.get("/logout", function(req, res){
    		req.logout();
    		res.redirect("/");
	});


	function isLoggedIn(req, res, next){
		if(req.isAuthenticated()){
        		return next();
    		}
    		res.redirect("/login");
	}	

	app.listen(process.env.PORT, process.env.IP, function(){
    		console.log("connect!");
	});



  	//enable request logging for development debugging
  	app.use(morgan('dev'));

  	//body parsing middleware 
  	app.use(bodyParser.json());

	app.set('view engine','ejs');
  
 	app.all('/*', function(req, res) {
	res.sendFile(path.resolve('client/index.html'));
  });

  return app;
};
