import z from 'zod';
export const transferBodyProps = z.object({
    to: z.string({message:"Id must be a string"}),
    amount: z.number({message:"Amount must be a number"}),
})