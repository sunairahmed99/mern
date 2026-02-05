import { createClient } from "redis";
import dotenv from 'dotenv';

dotenv.config({quiet:true})

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379,
  },
  password: process.env.REDIS_PASSWORD || undefined,
});

// Redis events
redisClient.on("connect", () => {
  console.log("✅ Redis connected");
});

redisClient.on("ready", () => {
  console.log("🚀 Redis ready to use");
});

redisClient.on("error", (err) => {
  console.error("❌ Redis Error:", err);
});

redisClient.on("end", () => {
  console.log("⚠️ Redis connection closed");
});

// Connect function
export const connectRedis = async () => {
  try {
    if (!redisClient.isOpen) {
      await redisClient.connect();
    }
  } catch (error) {
    console.error("❌ Redis connection failed:", error);
    process.exit(1);
  }
};

export default redisClient;
