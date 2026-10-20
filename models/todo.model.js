import mongoose from 'mongoose';

const todoSchema= new mongoose.Schema({
    name: String,
    task: String,
    deadline: Date
});

export default mongoose.model("Todo", todoSchema);
