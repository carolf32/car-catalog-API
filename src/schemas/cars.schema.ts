import z from "zod";

export const carSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  description: z.string(),
  brand: z.string(),
  year: z.number().positive(),
  km: z.number().positive(),
});

export const createCarSchema = carSchema.omit({ id: true });

export const updateCarSchema = carSchema.partial();
