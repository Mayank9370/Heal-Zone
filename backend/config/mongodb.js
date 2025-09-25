import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "HealZone",         // ✅ fix
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Database Connected:", mongoose.connection.db.databaseName);
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
};

export default connectDB;