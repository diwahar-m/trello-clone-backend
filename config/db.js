import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://msdiwahar5:Lx9dUAKoVxvnSxXR@cluster0.7zirx.mongodb.net/trello-clone-backend')
    .then(()=> console.log('DB Connected'));
}