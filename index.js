import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./Database/config.js";
import authRoute from "./Routers/authRouter.js"
import userRouter from "./Routers/userRouter.js"
dotenv.config();

const app=express();
app.use(cors({
     origin:'*',
    credentials:true
}
));
app.use(express.json())
//error handler
app.use((err,req,res,next)=>{                //error message will be handeled if we missed to handle
const statusCode =err.statusCode || 500;
const message =err.message || "Internal Server Error"  
res.status(statusCode).json({
    success:false,
    statusCode,
    message
})
})


connectDB();

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to the api")
})

app.use('/api/auth',authRoute)
app.use('/api/user',userRouter)

app.listen(process.env.PORT,()=>{
    console.log("The app is running successfully");
})