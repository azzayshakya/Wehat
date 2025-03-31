import { z } from "zod";

export const CreateAccountFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 1 characters" })
    .max(3,{ message: "Password must be 3 characters long" }),
});
