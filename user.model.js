/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var userSchema = new Schema({
 	  
  email: {
    type: String, 
    required: true,
	unique: true
  }, 
  pw: {
    type: String, 
    required: true 
  }, 
  admin: {
	  type: Boolean,
	  required: true
  },
  parents: {
	  first_name: String,
	  last_name: String,
	  street: String,
	  city: String,
	  state: String,
	  zipcode: Number,
	  cell_number: Number,
	  alt_number: Number,
	  relationship: String,
	  comments: String	  
  }
  students: {
	  first_name: String,
	  last_name: String,
	  dob: Date,
	  notes: String
	  class_schedule_id: String
  }
  
  created_at: Date,
  updated_at: Date
});

var websiteTextSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: false
  }
    });

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
userSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var User = mongoose.model('User', UserSchema);
var WebText = mongoose.model('WebText', websiteTextSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = {User, WebText};