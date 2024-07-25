const app = require('./app');


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http:localhost:${PORT}`);
});  