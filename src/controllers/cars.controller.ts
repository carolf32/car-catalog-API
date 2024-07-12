import { Request, Response } from "express";
import { CarServices } from "../services/cars.services";
import { inject, injectable } from "tsyringe";

@injectable()
export class CarControllers {
  constructor(@inject("CarServices") private carServices: CarServices) {}

  async create(req: Request, res: Response) {
    const car = await this.carServices.create(req.body);
    return res.status(201).json(car);
  }
  async getMany(req: Request, res: Response) {
    const cars = await this.carServices.getMany();
    return res.status(200).json(cars);
  }
  async getCar(req: Request, res: Response) {
    const car = await this.carServices.getCar(+req.params.id);
    return res.status(200).json(car);
  }
  async update(req: Request, res: Response) {
    const car = await this.carServices.update(+req.params.id, req.body);
    return car;
  }
  async remove(req: Request, res: Response) {
    await this.carServices.remove(+req.params.id);
    return res.status(204).json();
  }
}
