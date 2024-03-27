import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://yatish:yatish@cluster0.ue7bi.mongodb.net/";
const connectDB = async () => {
  try {
    console.log(MONGO_URI);
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongo db connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
