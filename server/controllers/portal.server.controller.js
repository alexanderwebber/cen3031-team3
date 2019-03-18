/* Dependencies */
var mongoose = require('mongoose'),
    portalSchemas = require('../models/portal.server.model.js'),
    config = require('../config/config');


/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var portal = new Listing(req.body);

};

/* Get website text */
exports.getWebTextByType = function(req, res, next, type){
  portalSchemas.websiteTextSchema.findByType(type).exec(function(err, webText){
    if(err){
      res.status(400).send(err);
    } else {
      req.webText = webText;
      next();
    }
  })
};