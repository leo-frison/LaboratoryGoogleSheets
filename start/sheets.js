var {google} = require('googleapis');
var {OAuth2Client} = require('google-auth-library');
var util = require('util');

var SheetsHelper = function(accessToken) {
  var auth = new OAuth2Client();
  auth.credentials = {
    access_token: accessToken
  };
  this.service = google.sheets({version: 'v4', auth: auth});
};

module.exports = SheetsHelper;


SheetsHelper.prototype.createSpreadsheet = function(title, callback) {
  var dataSheetId = spreadsheet.sheets[0].properties.sheetId;
  var requests = [
  buildHeaderRowRequest(dataSheetId),
  ];
  // TODO: Add pivot table and chart.
  var request = {
  spreadsheetId: spreadsheet.spreadsheetId,
  resource: {
    requests: requests
    }
   };
  self.service.spreadsheets.batchUpdate(request, function(err, response) {
   if (err) {
     return callback(err);
   }
   return callback(null, spreadsheet);
  });
};