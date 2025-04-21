import { Request, Response, NextFunction } from 'express';
import HttpStatus from '../enums/HttpStatus';
import IUser from '../interface/IUser';
import UserService from '../services/userService';
import generateToken from '../Auth/jwt';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req:Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body as IUser;

      const result = await this.userService.create(user);
      const token = generateToken(user);

      if (!result) throw new Error('Algo deu errado');
      
      return res.status(HttpStatus.CREATED).json({ token });
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;