import { response } from "express";
import {Todo, User} from "../model/todo.js";

export const addTodo = async (request,response) => {
    // console.log(request.body);
   try {
    const newTodo = await Todo.create({
        data: request.body.data,
        createdAt: Date.now()
    })
    await newTodo.save();

    response.status(200).json(newTodo);
   }
   catch (error) {
    response.status(400).json(error.message);
   }
}

export const getAllTodos = async (request,response) => {
    // console.log(request.body);
   try {
    const todos = await Todo.find({}).sort({'createdAt': -1})

    response.status(200).json(todos);
   }
   catch (error) {
    response.status(400).json(error.message);
   }
}

export const toggleTodoDone = async (request,response) => {
    // console.log(request.body);
   try {
    const todoRef = await Todo.findById(request.params.id);

    const todos = await Todo.findOneAndUpdate({_id:request.params.id}, {done: !todoRef.done})

        await todos.save()

    response.status(200).json(todos);
   }
   catch (error) {
    response.status(400).json(error.message);
   }
}

export const updateTodo = async (request,response) => {
    // console.log(request.body);
   try {
    await Todo.findOneAndUpdate({_id:request.params.id},{data: request.body.data})

    const todos = await Todo.findById(request.params.id)
    response.status(200).json(todos);
    
   }
   catch (error) {
    response.status(400).json(error.message);
   }
}

export const deleteTodo = async (request,response) => {
    // console.log(request.body);
   try {
   const todos =  await Todo.findByIdAndUpdate(request.params.id)
    response.status(200).json(todos);
    
   }
   catch (error) {
    response.status(400).json(error.message);
   }
}


//register user 

export const registerUser = async (request,response) => {
    try {
        const user = await User.create({
            name: request.body.name,
            password: request.body.password,
            re_password:request.body.re_password,
            email:request.body.email,
            data:request.body.date,
            role:request.body.role
        })
        await user.save();
        response.status(200).json(user);

    } catch (error) {
        response.status(400).json(error.message);
    }
}

export const loginUser = async(request,response) => {
    try{
    const {email,password} = request.body
    const user = await User.findOne({email:email})
    response.status(200).json(user);
    }
    catch (error) {
        response.status(400).json(error.message);
    }
}