import mongoose from 'mongoose';
export default async function connectDB(){
    mongoose.connect(process.env.URL).then((res)=>{console.log("connected to DB 🎉")}).catch((e)=>{console.log(e)});
}