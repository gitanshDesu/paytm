import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
//Defining methods to create hash and validate user password with stored hash and hash function.
// Method to generate a hash from plain text.
userSchema.methods.createHash = async function (plainTextPassword:string) {
     // Hashing user's salt and password with 10 iterations,
    const saltRounds = 10;
     // First method to generate a salt and then create hash
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(plainTextPassword,salt);
    // Second mehtod - Or we can create salt and hash in a single method also
  // return await bcrypt.hash(plainTextPassword, saltRounds);
}
//Validating the user password with the stored hash and hash function
userSchema.methods.validatePassword = async function (userPassword:string){
    return await bcrypt.compare(userPassword,this.password);
}
const User = mongoose.model("User",userSchema);
export default User;