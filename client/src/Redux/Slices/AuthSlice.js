import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import axiosInstance from '../../axios';
import {toast} from 'react-toastify';


const initialState = {
    isLoggedIn : localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || '',
    data: localStorage.getItem('data') || {}
}

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const res = axiosInstance.post('user/register', data);
        toast.promise(res, {
            loading: 'Creating account...',
            success: (data) => {
                return data?.data?.message || 'Account created successfully';
            },
            error: 'An error occurred'
        });

        return(await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message || 'Failed to create account');
    }
});


const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.role = action.payload.role;
            state.data = action.payload.data;
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', action.payload.role);
            localStorage.setItem('data', JSON.stringify(action.payload.data));
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.role = '';
            state.data = {};
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('role');
            localStorage.removeItem('data');
        }
    }
});

export const {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer;
