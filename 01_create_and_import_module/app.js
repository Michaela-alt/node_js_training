/*console.log("hai hai micha, kamu berhasil ^^"); //global object


var logger = require('./logger');
logger.TampilkanLog("This is a log message from app.js");
logger.TampilkanURL();
*/


/*
setTimeout() //manggil function setelah delay beberapa waktu
clearTimeout()

setInterval() // mamanggil function secara berulang , setelah delay
clearInterval()

// global object di javascript

//WEB BROWSER
window.console.log

console.log

//NODE JS
window.console.log // yang terjadi di web browser
console.log
*/

/*
var message = "ini message not global. Hanya berjalan di node ini saja";
console.log(global.message); // result --> undefined
console.log(message); // result --> print message

//require('./subfolder/logger');
*/

var logger = require('./logger'); // use const to safely avoid same naming error in two var

//console.log(logger);
//logger.PublicLog('ini test cara pertama');
//logger('ini test cara kedua');

