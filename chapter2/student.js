const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    courses: [{type: String, ref: 'Course'}]
});

/* Returns the student's first name, which we will define
 * to be everything up to the first space in the student's name.
 * For instance, "William Bruce Bailey" -> "William" */
schema.virtual('firstName').get(function() {
  return this.name.split(' ')[0];
});

/* Returns the student's last name, which we will define
 * to be everything after the last space in the student's name.
 * For instance, "William Bruce Bailey" -> "Bailey" */
schema.virtual('lastName').get(function() {
  const names = this.name.split(' ');
  return names[names.length-1];
});

module.exports = schema;
