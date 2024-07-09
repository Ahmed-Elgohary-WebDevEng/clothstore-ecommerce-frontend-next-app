import { z } from "zod";

export const registerSchema = z
  .object({
    first_name: z.string().min(5),
    last_name: z.string().min(5),
    username: z.string().min(7),
    email: z.string().email(),
    phone: z.string().regex(/^01[0-9]{9}$/, {
      message: "Invalid phone number format. It should be a 11-digit number.",
    }),
    password: z.string().min(7),
    password_confirmation: z.string().min(7),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Password don't match",
    path: ["password_confirmation"],
  });

export type TRegisterForm = z.infer<typeof registerSchema>;
