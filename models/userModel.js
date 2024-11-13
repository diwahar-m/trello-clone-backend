import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email:{type: String,required: true, unique: true},
    password:{type: String, unique: true},
    taskData:{type: Array, default:[]}
},{minimize: false}) 
// minimize will allow cartData to be empty
const userModel = mongoose.models.user || mongoose.model("user", userSchema)
export default userModel;