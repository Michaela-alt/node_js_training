const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3000, function(){
    console.log('listening to port 3000');
});
