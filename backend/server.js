import app from "./app.js";
import dotenv from 'dotenv';
import { connectRedis } from "./Config/redis.js";


dotenv.config({quiet:true})

app.get('/',(req,res)=>{

    res.end("welcome to nodejs app")
})

const port = process.env.PORT

const startServer = async () => {
  try {
    await connectRedis();

    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Server start error:", error);
  }
};

startServer();

