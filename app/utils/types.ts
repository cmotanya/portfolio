import { z } from "zod";

export const sendEmailSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required!")
    .min(3, "Name must be at least 3 characters long!"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Email is required!")
    .min(3, "Email must be at least 3 characters long!")
    .email("Invalid email address!"),

  mobile: z
    .string()
    .trim()
    .min(1, "Phone number is required!")
    .min(10, "Phone number must be at least 10 characters long!")
    .max(15, "Phone number must be at most 15 characters long!")
    .regex(/^\+?\d+$/, "Phone number must contain only digits!"),

  textarea: z
    .string()
    .trim()
    .min(1, { message: "Please enter your message!" })
    .min(4, { message: "Message should be longer than 3 characters long!" }),
});

export type TSendEmailSchema = z.infer<typeof sendEmailSchema>;
