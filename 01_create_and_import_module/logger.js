/*



 */
/*
var url = 'http://mylogger.io/log'; //dummy url

function DisplayLog(log_message) {
    //send a HTTP Request
    console.log("log message: " + log_message);
    //console.log('log message: ${log_message}');
}

function DisplayURL(url) {
    //send a HTTP Request
    console.log("Active URL: " + url);
    //console.log('Active URL: ${url}');
}

DisplayLog('Test node app');


module.exports.TampilkanLog = DisplayLog;
module.exports.TampilkanURL = DisplayURL;
*/


var url = "http://sguloggingservice.com/log";
function log(message) {
    //send an HTTP Request
    console.log(message);
}

//module.exports.log = log; // kanan lokal, kiri module

//module.exports.NamaVariablePublic = NamaVariableLocal

//module.exports.URLLENGKAP = url;

//module.exports.PublicLog = log;

module.exports = log;
