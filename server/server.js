import app from './app.js'
import dbConnection from './config/dbConnection.js';
import cloudinary from 'cloudinary';


// Start the server
const PORT = process.env.PORT || 5000;


// Cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
}); 



app.listen(PORT, async () => {
await dbConnection();
  console.log(`Server is running on port http://localhost:${PORT}`);
});  

