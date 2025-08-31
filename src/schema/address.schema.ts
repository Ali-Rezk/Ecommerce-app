import * as z from "zod";

export const addressSchema = z.object({
  details: z.string().min(2).max(100).nonempty("This field is required"),
  city: z.string().min(2).max(100).nonempty("This field is required"),
  phone: z.string().min(11).max(11).nonempty("This field is required"),
});

export type addressSchemaFrom = z.infer<typeof addressSchema>;
