import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    data:{
        type: String,
        require: true
    },
    done:{
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Todo = mongoose.model('todo',todoSchema);

export default Todo;