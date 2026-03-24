/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";

const mongo_url = process.env.MONGO_URI;
export async function connectDB() {
  try {
    await mongoose.connect(mongo_url as string);

    mongoose.connection.on("connected", () => {
      console.log("MongoDB Connected");
    });

    mongoose.connection.on("error", (error: Error) => {
      console.log("Mongoose Connection Failed", error.message);
    });
  } catch (error: any) {
    console.log("Error While Connecting MongoDB", error.message);
  }
}
