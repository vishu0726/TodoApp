import Todo from "../model/todo.js";

export const addTodo = async (request,response) => {
    // console.log(request.body);
   try {
    const newTodo = await Todo.create({
        data: request.body.data,
        createdAt: Date.now()
    })
    await newTodo.save();

    response.status(200).json(newTodo)
   }
   catch (error) {
    response.status(400).json(error.message);
   }
}