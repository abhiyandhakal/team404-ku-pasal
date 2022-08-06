import { mongoose } from "@typegoose/typegoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(
      `Successfully connected to mongodb on ${conn.connection.host}.`
    );
  } catch (e) {
    console.error(e);
  }
};
