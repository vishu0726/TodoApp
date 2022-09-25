import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

    const Connection = () => {

    const MONGODB_URI = `mongodb://${username}:${password}@ac-skt0udc-shard-00-00.50k2ees.mongodb.net:27017,ac-skt0udc-shard-00-01.50k2ees.mongodb.net:27017,ac-skt0udc-shard-00-02.50k2ees.mongodb.net:27017/?ssl=true&replicaSet=atlas-149ys1-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI,{useNewUrlParser:true})

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })
    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })
    mongoose.connection.on('error', (err) => {
        console.log('Error coming while connecting to the DB',err.message);
    })
}

export default Connection;