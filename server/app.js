var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );
var PORT = process.env.PORT || 3000;
var connStr = 'mongodb://localhost:27017/soloTestingDb';

//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//server listen
app.listen(PORT, function() {
  console.log('server listening on', PORT);
}); // end listen

//routers
var assignment = require( '../routers/assignment' );
app.use('/assignment', assignment);

//db connection
mongoose.connect(connStr);

//export
module.exports = app;
