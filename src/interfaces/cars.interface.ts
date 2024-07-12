import z from "zod";
import {
  carSchema,
  createCarSchema,
  updateCarSchema,
} from "../schemas/cars.schema";

export type TCar = z.infer<typeof carSchema>;
export type TCreateCar = z.infer<typeof createCarSchema>;
export type TUpdateCar = z.infer<typeof updateCarSchema>;
