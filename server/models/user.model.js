
import crypto from 'crypto';
import { Schema,model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


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
    subscription: {
        id: String,
        status: String,
      },
    avatar: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        }, 
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
   forgotPasswordToken: String,
    forgotPasswordExpire: Date,
}, {
    timestamps: true,

    });

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods ={
    
    generateJWTToken: async function() {
        return await jwt.sign({id: this._id, email: this.email, subscription: this.subscription}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_TIME,
        });
    },
    comparePassword: async function(plainTextPassword) {
        return await bcrypt.compare(plainTextPassword, this.password);
    },

    generatePasswordResetToken: async function () {
        // creating a random token using node's built-in crypto module
        const resetToken = crypto.randomBytes(20).toString('hex');
    
        // Again using crypto module to hash the generated resetToken with sha256 algorithm and storing it in database
        this.forgotPasswordToken = crypto
          .createHash('sha256')
          .update(resetToken)
          .digest('hex');
    
        // Adding forgot password expiry to 15 minutes
        this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000;
    
        return resetToken;
      },
}
const User = model('User', userSchema);


export default User;