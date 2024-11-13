import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://trello-clone-backend:trello-clone-backend@cluster0.7zirx.mongodb.net/trello-clone-backend')
    .then(()=> console.log('DB Connected'));
}