const mongoose = require('mongoose');

var studentInfoSchema = new mongoose.Schema({
    student_number: {
        type: String
    },
    first_name: {
        type: String
    },
    middle_name: {
        type: String
    },
    last_name: {
        type: String
    },
    civil_status_id: {
        type: String
    },
    gender_id: {
        type: String
    },
    address: {
        type: String
    },
    birthday: {
        type: String
    },
    birthplace: {
        type: String
    },
    citizenship_id: {
        type: String
    },
    religion_id: {
        type: String
    },
    course_id: {
        type: String
    },
    year_level_id: {
        type: String
    }
});


mongoose.model('StudentInfo', studentInfoSchema)