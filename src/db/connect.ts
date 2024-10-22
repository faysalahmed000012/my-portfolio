import mongoose from "mongoose";

export async function dbConnect() {
  try {
    console.log(process.env.MONGO_URI);
    const connection = await mongoose.connect(process.env.MONGO_URI as string);
    if (connection) {
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
}
