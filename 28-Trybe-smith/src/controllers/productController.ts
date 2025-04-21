import { Request, Response, NextFunction } from 'express';
import HttpStatus from '../enums/HttpStatus';
import IProduct from '../interface/IProduct';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res:Response, next:NextFunction) => {
    try {
      const product = req.body as IProduct;
      const result = await this.productService.create(product);

      return res.status(HttpStatus.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  };

  public getAll = async (__req: Request, res:Response, next: NextFunction) => {
    try {
      const result = await this.productService.getAll();

      return res.status(HttpStatus.OK).json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default ProductController;