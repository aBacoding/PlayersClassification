const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type:String,
            required: true,
            minlength: 8
        },
        repeatpassword: {
            type:String,
            required: true,
            minlength: 8
        },
        isAdmin: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    { timestamps: true }
);

const Register = new mongoose.model("Register", userSchema);
module.exports = Register;