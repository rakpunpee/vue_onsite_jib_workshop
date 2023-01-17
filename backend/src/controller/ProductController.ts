import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Products } from "../entity/Products";

export class ProductController {
  private ProductRepository = AppDataSource.getMongoRepository(Products);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.ProductRepository.find();
  }
}
