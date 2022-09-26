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
export const Todo = mongoose.model('todo',todoSchema);


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    re_password: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    role:{
        type:String,
        default:true
    }
})

export const User = mongoose.model('user',userSchema);