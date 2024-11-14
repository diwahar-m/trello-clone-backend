import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    userId:{type: String, required: true},
    title: {type: String,required: true},
    description: {type: String, required: false},
    category: {type:  String, default: "todo"},
    date: { type: Date, default: Date.now()},
})

const taskModel = mongoose.models.task || mongoose.model("task", taskSchema);
export default taskModel;