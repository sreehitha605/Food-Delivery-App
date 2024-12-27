import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://fooddelivery:fooddelivery123@cluster0.ihxw2.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}