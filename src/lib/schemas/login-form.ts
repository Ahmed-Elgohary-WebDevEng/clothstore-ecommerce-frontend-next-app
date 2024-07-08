import { z } from "zod";

export const loginFormSchema = z.object({
  // input forms validation
  email: z.string().email(),
  password: z.string().min(6),
});

export type TLoginForm = z.infer<typeof loginFormSchema>;
