/*
  Config management
 */

// Load .env if found
var fs = require('fs');
if (fs.existsSync('.env')) {
  require('dotenv').load();
}

// Load in the VCAPP Service stuff
if (process.env.VCAPP_SERVCES) {
  var vcapServices = JSON.parse(process.env.VCAP_SERVICES);
}

// Config
var config = {}

// Port
config.port = vcapServices.port || process.env.PORT;

// Cloudant
config.cloudant = {
  username: vcapServices.cloudantNoSQLDB[0].credentials.username || process.env.CLOUDANT_USERNAME,
  account: vcapServices.cloudantNoSQLDB[0].credentials.username || process.env.CLOUDANT_ACCOUNT,
  password: vcapServices.cloudantNoSQLDB[0].credentials.password || process.env.CLOUDANT_PASSWORD
}

// Twilio
config.twilio = {}

// Export
exports.config = config;
