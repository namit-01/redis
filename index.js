import express from "express";
import dotenv from "dotenv";
import Redis from "ioredis";
import mongoose from "mongoose";
import User from "./model.js";

dotenv.config();

const app = express();
app.use(express.json());
// MongoDB connection
async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI); // use your actual env var name
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}

// Redis connection
const redis = new Redis(process.env.REDIS_URL);

app.get("/get", async (req, res) => {
  // Example: store and fetch a value from Redis
  const c = await redis.get("all");
  if (c) {
    return res.json(JSON.parse(c));
  } else {
    const user = await User.find({});
    await redis.set("all", JSON.stringify(user));
    return res.json(user);
  }
});
app.get("/getw", async (req, res) => {
  try {
    const user = await User.find({});
    return res.json(user);
  } catch (err) {}
});
app.post("/create", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password });
  await redis.del("all");
  return res.json(user);
});

app.listen(3000, async () => {
  await connectDb(); // now it's a proper function
  console.log("🚀 Server running on port 3000");
});
