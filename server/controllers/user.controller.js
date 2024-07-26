import AppError from '../utils/error.util.js';


const register = async (req, res , next) => {
    const {fullName, email, password} = req.body;

    if (!fullName || !email || !password) {
        return next(new AppError('Please fill all fields', 400));
    };
};

const login = async (req, res) => {
    res.send('login');
    };


const logout = async (req, res) => {
    res.send('logout');
    };

const getProfile = async (req, res) => {
    res.send('getProfile');
    } ;
    
export {register, login, logout, getProfile};