var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var assignmentSchema = {
  assignment_name: { type: String,required: true},
  student_name: String,
  score: Number,
  date_completed: Date,
  completed: Boolean
}; // end assignmentSchema

var User = mongoose.model('assignments', assignmentSchema);

module.exports = User;
