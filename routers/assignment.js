var express = require( 'express' );
var router = express.Router();
var User = require('../models/user');

//POST route
router.post('/', function(req, res) {
  console.log('in post user route');
  console.log(req.body);
  var newData = req.body;
  var newAssignment = new User({
    assignment_name: newData.assignment_name,
    student_name: newData.student_name,
    score: newData.score,
    date_completed: newData.date_completed,
    completed: newData.completed
  }); // end newAssignment
  console.log(newAssignment);
  newAssignment.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('new assignment created');
      res.sendStatus(200);
    } // end else
  }); // end save
}); // end post

//GET route
router.get('/', function(req, res) {
  console.log('get route hit');
  //find all
  User.find({}, function(err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
      res.sendStatus(200);
    } // end else
  }); // end find
}); // end get


module.exports = router;
