import app from "./app.js";
import dotenv from 'dotenv';
import { connectRedis } from "./Config/redisconfig.js";



dotenv.config({quiet:true})


await connectRedis();

console.log("perfect")




app.get('/',(req,res)=>{

    res.end("welcome to nodejs app changes save karloo")
})

const port = process.env.PORT


app.listen(port,()=>{

    console.log(`port is running ${port}`)
})