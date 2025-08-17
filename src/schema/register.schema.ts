import * as z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("This field is required")
      .min(2, "min 2 char")
      .max(10, "max 10 char"),
    email: z
      .string()
      .nonempty("This field is required")
      .email("not valid email"),
    password: z
      .string()
      .nonempty("This field is required")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "not valid password"
      ),
    rePassword: z.string().nonempty("This field is required"),
    phone: z
      .string()
      .nonempty("This field is required")
      .regex(/^(002)?(01)[0-25]\d{8}$/),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ["rePawssord"],
    message: "no match",
  });

export type registerSchemaFrom = z.infer<typeof registerSchema>;
