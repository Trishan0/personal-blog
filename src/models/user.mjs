import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    firstname : {
        type : String,
        required : true,
        trim : true
    },
    lastname : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        enum : ['user', 'admin'],
        default : 'user'
    }
}, {timestamps : true});

export const User = mongoose.model('User', userSchema);