var express = require("express");
var app 	= express();

/* serves main page */
app.get("/", function(req, res) {
	res.sendfile('index.html');
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
 	res.sendfile(__dirname + req.params[0]); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Server up...");
});