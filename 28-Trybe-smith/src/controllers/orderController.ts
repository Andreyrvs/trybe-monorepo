import { Request, Response, NextFunction } from 'express';
import HttpStatus from '../enums/HttpStatus';
import OrderService from '../services/orderService';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.orderService.getAll();
      return res.status(HttpStatus.OK).json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default OrderController;