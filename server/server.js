import app from './app.js'
import dbConnection from './config/dbConnection.js';


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
await dbConnection();
  console.log(`Server is running on port http://localhost:${PORT}`);
});  

