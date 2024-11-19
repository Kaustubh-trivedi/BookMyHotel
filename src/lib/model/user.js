import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    type: String,
    name: String,
    email: String,
    username: String,
    password: String,
    raw_password: String,
    profile_image:String,
})