//This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
    uri: 'mongodb+srv://admin:CEN3031team3@webportaldb-0n9lg.mongodb.net/test?retryWrites=true'
  },
  port: process.env.PORT||8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */