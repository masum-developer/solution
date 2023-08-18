import mongoose from "mongoose";

const connectMongoDB = async () =>
  await mongoose.connect(`${process.env.MONGODB_URI}`);

export default connectMongoDB;
