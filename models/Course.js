// classes from course offering plan
const mongoose = require('mongoose');
const {Schema} = mongoose;

const CourseSchema = new Schema({
    // CICS or CompSci
    college: {
        type: String,
    },
    // eg 325
    number: {
        type: String
    },
    // eg 3
    credits:{
        type: String
    },
    // eg Intro to HCI
    title: {
        type: String
    },
    // spring and fall
    semester: {
        type: String
    }  
});

const Course = mongoose.model('courses',CourseSchema);
module.exports = Course;