import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import HomeLayout from '../Layouts/HomeLayout';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createAccount } from '../Redux/Slices/AuthSlice';


 
 function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

const [previewImage, setPreviewImage] = useState("");

const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: ""
});


function handleUserInput(e){
    const { name, value } = e.target;

    setSignupData({
        ...signupData,
        [name]: value
    });
};


function getImage(e){
    e.preventDefault();


    const uploadedImage = e.target.files[0];
   

    if(uploadedImage){
       setSignupData({
              ...signupData,
              avatar: uploadedImage
         });
    };
    const fileReader = new FileReader();
fileReader.readAsDataURL(uploadedImage);
fileReader.addEventListener('load', () => { 
    setPreviewImage(fileReader.result);
});
};




     async function createNewAccount(e) {
    e.preventDefault();

    if (!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar) {
        console.log('Missing fields:', signupData);
        toast.error('Please fill in all fields');
        return;
    }

    if (signupData.fullName.length < 5) {
        console.log('Full name too short:', signupData.fullName);
        toast.error('Name must be at least 5 characters');
        return;
    }

    

    if (!signupData.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        console.log('Invalid email:', signupData.email);
        toast.error('Invalid email address');
        return;
    }

    if(!signupData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
        toast.error('Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number');
        return;
    }


const formData = new FormData();
formData.append('fullName', signupData.fullName);
formData.append('email', signupData.email);
formData.append('password', signupData.password);
formData.append('avatar', signupData.avatar);


// dispatch create account action
const response = await dispatch(createAccount(formData));

if (response?.payload?.success)
    navigate('/');




setSignupData({
    fullName: "",
    email: "",
    password: "",
    avatar: ""
});
setPreviewImage("");


}






  return (
    <HomeLayout>
     <div className='flex items-center justify-center h-[90vh]'>
        <form onSubmit={createNewAccount} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
            <h1 className='text-center text-2xl font-bold'> Registration Page</h1>


            <label htmlFor="Image_uploads" className='cursor-pointer'>
{previewImage ? (
    <img src={previewImage} alt="preview" className='w-24 h-24 m-auto rounded-full'/>
) : (
   <BsPersonCircle className='w-24 h-24 rounded-full m-auto'/>
)}
            </label>
            <input 
            onChange={getImage}
            type="file" 
            name='image_uploads'
            className='hidden'
            id='Image_uploads'
            accept='.jpg, jpeg, .png ,.svg' />

            <div className='flex flex-col gap-1'>
                <label htmlFor="fullName" className='font-semibold'>Name</label>
                <input type="text"
                required
                name='fullName'
                id='fullName'
                placeholder='Enter your name...'
                className='bg-transparent px-2 py-1 border'
                onChange={handleUserInput}
                value={signupData.fullName} />
              
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='font-semibold'>Email</label>
                <input type="email"
                required
                name='email'
                id='email'
                placeholder='Enter your email...'
                className='bg-transparent px-2 py-1 border' 
                onChange={handleUserInput}
                value={signupData.email}/>
                
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='font-semibold'>Password</label>
                <input type="password"
                required
                name='password'
                id='password'
                placeholder='********'
                className='bg-transparent px-2 py-1 border'
                onChange={handleUserInput}
                value={signupData.password} />
                

            </div>

            <button type='submit' className='mt-2 w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 py-2 rounded-sm  font-semibold text-lg cursor-pointer '>
                Create Account
            </button>

            <p className='text-center'>
                Already have an account? <a href='/login' className='text-blue-500'>Login</a>
            </p>
        </form>
     </div>
    </HomeLayout>
  );

}
export default Signup;