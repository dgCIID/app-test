var express = require("express"),
    app     = express(),
    http    = require("http"),
    server  = http.createServer(app);
    mongoose= require('mongoose');

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send("Hello world!");
});

//connect to file and db api REST CRUD tvshows
routes = require('./routes/tvshows')(app);


//connect to mongoose
mongoose.connect('mongodb://localhost/tvshows', function(err,res) {
  if(err) {
    console.log('ERROR: Connecting to Database. '+err);
  } else {
    console.log('Connected to Databse');
  }
});


server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});

