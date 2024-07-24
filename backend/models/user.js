import mongoose from "mongoose";
import validator from 'validator';

const {Schema} = mongoose;

const userschema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [1, 'Name should be at least 1 character long'],  
        maxlength: [100, 'Name should not exceed 100 characters'],  
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function(value) {
                return validator.isEmail(value);
            },
            message: 'Invalid email address',
        },
    },
    password: {
        type: String,
        required: true,
        minlength: [5, 'Password should be at least 8 characters long'],  
        validate: {
            validator: function(value) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(value);
            },
            message: 'Password should contain at least one uppercase letter, one lowercase letter, and one number',
        },
    },
    picture: {
        type: String, // Assuming you store the URL of the image
    },
});

const user = mongoose.model("user", userschema);
export default user;
