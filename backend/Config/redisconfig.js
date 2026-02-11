import redis from "redis";

const REDIS_HOST = process.env.REDIS_HOST
const REDIS_PORT = process.env.REDIS_PORT

const client = redis.createClient({
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  },
});

client.on("error", (err) => console.log("Redis Client Error", err));

let isConnected = false;

export async function connectRedis() {
  if (!isConnected) {
    await client.connect();
    console.log(`Connected to Redis at ${REDIS_HOST}:${REDIS_PORT}`);
    isConnected = true;
  }
}

export default client;
