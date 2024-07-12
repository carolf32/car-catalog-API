import { Router } from "express";
import { container } from "tsyringe";
import { CarServices } from "../services/cars.services";
import { CarControllers } from "../controllers/cars.controller";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { createCarSchema, updateCarSchema } from "../schemas/cars.schema";
import { IsCarIdValid } from "../middlewares/isCarIdValid.middleware";

export const carRouter = Router();

container.registerSingleton("CarServices", CarServices);
const carControllers = container.resolve(CarControllers);

carRouter.post("/", ValidateBody.execute(createCarSchema), (req, res) =>
  carControllers.create(req, res)
);
carRouter.get("/", (req, res) => carControllers.getMany(req, res));
carRouter.get("/:id", IsCarIdValid.execute, (req, res) =>
  carControllers.getCar(req, res)
);
carRouter.patch(
  "/:id",
  ValidateBody.execute(updateCarSchema),
  IsCarIdValid.execute,
  (req, res) => carControllers.update(req, res)
);
carRouter.delete("/:id", IsCarIdValid.execute, (req, res) =>
  carControllers.remove(req, res)
);
