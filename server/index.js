import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>
{
    console.log('connected to MongoDB!');
}).catch((err)=>
{
   console.log(err);
});


const app=express();
app.listen(3000,()=>
{
    console.log(`Server is running on 3000 port`);
});

//Make this undefined to json
app.use(express.json());

app.use('/server/user',userRouter);
app.use('/server/user',authRouter);