import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim:true, // removes the space if it is at beginning or end
        lowercase:true, // always convert to Lowercase 
        minLength:3,
        maxLength:30,
    },
    password: {
        type:String,
        required:true,
        trim:true,
        minLength:6,
    },
    firstName: {
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastName: {
        type:String,
        required:true,
        trim:true,
        maxLength:50
    }
});

const User = mongoose.model("User",userSchema);
export default User;