// models/formModel.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    fields: [{
        type: String,  // Yeh tum apne requirements ke hisaab se change kar sakte ho
        required: true,
    }],
});

// Yahan hum formSchema ko model mein convert kar rahe hain
const Form = mongoose.model('Form', formSchema);

// Model ko export kar rahe hain
module.exports = Form;
