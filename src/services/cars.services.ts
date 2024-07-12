import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TCreateCar, TUpdateCar } from "../interfaces/cars.interface";

@injectable()
export class CarServices {
  async create(payload: TCreateCar) {
    const car = await prisma.car.create({ data: payload });
    return car;
  }

  async getMany() {
    const cars = await prisma.car.findMany();
    return cars;
  }

  async getCar(id: number) {
    const car = await prisma.car.findFirst({ where: { id } });
    return car;
  }

  async update(id: number, payload: TUpdateCar) {
    const car = await prisma.car.update({ where: { id }, data: payload });
    return car;
  }

  async remove(id: number) {
    return await prisma.car.delete({ where: { id } });
  }
}
