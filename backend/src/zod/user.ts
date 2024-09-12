import z from "zod";

export const signUpBodyProps = z.object({
    username: z.string().email({message:"Enter Valid Email"}),
    password: z.string().min(6,{message: "Password must be 6 or more characters long"}),
    firstName: z.string().max(50,{message:"First Name can't be more than 50 characters"}),
    lastName: z.string().max(50,{message:"Last Name can't be more than 50 characters"}),

});

export const signInBodyProps = z.object({
    username: z.string().email({message:"Enter Valid Email"}),
    password: z.string().min(6,{message: "Password must be 6 or more characters long"}),
});

export const updateBodyProps = z.object({
    password: z.string().min(6,{message: "Password must be 6 or more characters long"}).optional(),
    firstName: z.string().max(50,{message:"First Name can't be more than 50 characters"}).optional(),
    lastName: z.string().max(50,{message:"Last Name can't be more than 50 characters"}).optional(),
});