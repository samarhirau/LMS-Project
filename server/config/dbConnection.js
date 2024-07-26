import mongoose from "mongoose";


mongoose.set('strictQuery', false);

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error", error);
    console.log(error);
    process.exit(1);
  }
}


export default dbConnection;