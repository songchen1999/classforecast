const mongoose = require('mongoose');
const {Schema} = mongoose;

const CourseSchema = new Schema({
    college: {
        type: String,
    },
    number: {
        type: String
    },
    level: {
        type: String
    }
    
});

const Course = mongoose.model('courses',CourseSchema);
module.exports = Course;