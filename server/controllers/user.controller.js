// import User from '../models/user.model.js';
import AppError from '../utils/error.util.js';
import cloudinary from 'cloudinary';




const cookieOptions = {
    httpOnly: true,
    secure: true,  //process.env.NODE_ENV === 'production'
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000),
};


const register = async (req, res , next) => {
    const {fullName, email, password} = req.body;

    if (!fullName || !email || !password) {
        return next(new AppError('Please fill all fields', 400));
    };

    const userExits = await user.findOne({email});

    if (userExits) {
        return next(new AppError('Email already exists', 400));
    };


   const user = await user.create({
       fullName,
       email,
       password,
       avatar:{
        public_id: email,
        secure_url: 'https://res.cloudinary.com/djzjx2z6e/image/upload/v1633660136/avatars/default_avatar.png'
       }
   });

   if (!user) {
    return next(new AppError('Something went wrong', 500));

};

if (req.file) {

    try {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
            folder: 'avatars',
            width: 250,
            height: 250,
            crop: 'fill',
            gravity: 'face'
        });

        if (!result) {
            user.avatar.public_id = result.public_id;
            user.avatar.secure_url = result.secure_url;


            // remove file from server
            fs.rm(`uploads/${req.file.filename}`)
        }
    }
    catch (error) {
        return next(new AppError(error.message || 'file not uploaded , please try again ', 500));
    }
};


await user.save();


user.password = undefined;

const token = await user.generateJWTToken();

res.cookie('token', token, cookieOptions);


res.status(201).json({
    status: 'success',
    message: 'User registered successfully',
    data: user,
});

};


const login = async (req, res) => {
try {

   const {email, password} = req.body;

   if (!email || !password) {
       return next(new AppError('Please fill all fields', 400));
    };

    const user = await user.findOne({
        email
    }).select('+password');


    if (!user || !(await user.comparePassword(password))) {
        return next(new AppError('Invalid email or password', 400));
    };

    const token = await user.generateJWTToken();
    user.password = undefined;

    res.cookie('token', token, cookieOptions);

    res.status(200).json({
        status: 'success',
        message: 'User logged in successfully',
        data: user,
    });


    }
    catch (error) {
        return next(new AppError(error.message, 500));
    }
    }

const logout = async (req, res) => {
    res.clearCookie('token', null ,{
        secure: true,
        httpOnly: true,
        maxAge: 0
    });

    res.status(200).json({
        status: 'success',
        message: 'User logged out successfully',
    });
    };

const getProfile = async (req, res) => {
    try {
    const userId = req.user.id;
    const user = await user.findById(userId);
    
    res.status(200).json({
        status: 'success',
        message: 'User profile fetched successfully',
        data: user,
    });
    }
    catch (error) {
        return next(new AppError(error.message, 500));
    }

    };
    
export {register, login, logout, getProfile};