var express = require('express');
var app     = express();

/*app.get('/', function(req, res) {
    res.send('Hello World');
});*/

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Running on port 3000 dyo....')