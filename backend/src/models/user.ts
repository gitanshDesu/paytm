import mongoose from "mongoose";
import bcrypt from "bcrypt";
interface UserDBProps extends Document {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    createHash(password: string): Promise<string>; // Method definition
    validatePassword(userPassword: string): Promise<boolean>; //Method definition
};

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim:true, // removes the space if it is at beginning or end
        lowercase:true, // always convert to Lowercase 
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

// Method to generate a hash from plain text.
userSchema.methods.createHash = async function (plainTextPassword:string) {
     // Hashing user's salt and password with 10 iterations,
    const saltRounds = 10;
     // First method to generate a salt and then create hash
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(plainTextPassword,salt);
};
//Validating the user password with the stored hash and hash function
userSchema.methods.validatePassword = async function (userPassword:string){
    return await bcrypt.compare(userPassword,this.password);
};
const User = mongoose.model<UserDBProps>("User",userSchema);
export default User;