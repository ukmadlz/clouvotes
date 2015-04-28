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
config.port = vcapp || process.env.PORT;

// Export
exports.config = config;
