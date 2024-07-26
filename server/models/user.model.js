import { Schema,model } from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        minLenght: 5,
        maxLenght: 50,
        lowercase: true,
        trim: true,
    },
   
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minLenght: 8,
        maxLenght: 50,
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        }, 
    },
    forgotPassword: {
        type: String,
    },
    forgotPasswordExpire: {
        type: Date,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    }, 
    });

const User = model('User', userSchema);


export default User;