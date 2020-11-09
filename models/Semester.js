const mongoose = require('mongoose');
const {Schema} = mongoose;

const SemesterSchema = new Schema({
    season: {
        type: String,
        enum: ["Spring", "Summer"],
    },
    year: {
        type: String
    },
    classes: {
        type: [String]
    }
    
});

const Semester = mongoose.model('semesters',SemesterSchema);
module.exports = Semester;