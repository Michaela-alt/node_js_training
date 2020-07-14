const fs = require('fs');

//var files = fs.readdirSync('./');
fs.readdir('./x', function(err, files){
    if(err){
        console.log("Error occured. Error message: " + err);
    } else{
        console.log("Files in this directory are: " + files);
    }
});

//sync --> blocking
//async --> non blocking

//console.log(files);